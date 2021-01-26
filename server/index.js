const { readJSON, writeJSON } = require('./utils');
const { resolve } = require('path');
const { readFile } = require('fs');
const  http  = require('http');
const { join } = require('path');
const express = require('express');

const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(express.json());
app.use(bodyParser.json());

app.get('/get', (req,res) => {
  readJSON(usersAddr, (_, data) => {
    res.end(JSON.stringify(data));
  });
});

app.post('/app', ({ body },res) => {
  readJSON(usersAddr, (_, data) => {
    const lastUser = data[data.length - 1];
    const newData = [
      ...data,
      {
        ...body,
        id: ((lastUser && lastUser.id) || 0) + 1,
      },
    ];
    writeJSON(usersAddr, newData, () => {
      res.send(newData);
    });
  });
});

app.get('/', (req,res) => {
  
  res.send('Hello World')
});

app.listen(port, () => {
  console.log(`Listening http://localhost:${port}`);
});


const usersAddr = join(__dirname, './users.json');
const levelsAddr = join(__dirname, './levels.json');

// readJSON(usersAddr, (_, data) => {
//   readJSON(levelsAddr, (_, levels) => {
//     const users = data.map((user) => {
//       const level = levels.find((lvl) => lvl.value === user.level);
//       return { ...user, level };
//     });

//     console.log(users);
//   });
// });

/*readJSON(usersAddr, (_, data) => {
  const users = [...data];
  const lastUser = users[users.length - 1];
  const nextId = (lastUser?.id || 0) + 1;
  const newUser = {
    id: nextId,
    name: `User ${nextId}`,
    level: Math.ceil(Math.random() * 3),
  };
  const Updateusers = [...users, newUser];
  writeJSON(usersAddr, Updateusers, () => {
      console.log('Data saved');
  })
});*/

const get = (req, res) => {
  res.writeHead(200, {
    ['Content-Type']: 'application/json',
  });

  readJSON(usersAddr, (_, data) => {
    res.end(JSON.stringify(data));
  });
};

const add = (req, res, body) => {
  res.writeHead(200, {
    ['Content-Type']: 'application/json',
  });
  readJSON(usersAddr, (_, data) => {
    const lastUser = data[data.length - 1];
    const newData = [
      ...data,
      {
        ...body,
        id: ((lastUser && lastUser.id) || 0) + 1,
      },
    ];
    writeJSON(usersAddr, newData, () => {
      res.end(JSON.stringify(newData));
    });
  });
};

const route = (req, res, data) => {
  const parsedUrl = req.url.split('/').filter((part) => part);

  switch (parsedUrl[0]) {
    case 'get':
      get(req, res);
      break;
    case 'add':
      add(req, res, data);
      break;
    default:
      res.end('Hi there!');
  }
};

const server = http.createServer((req, res) => {
  let body = [];
  req
    .on('data', (chunk) => {
      body.push(chunk);
    })
    .on('end', () => {
      body = Buffer.concat(body).toString();
      route(req, res, body ? JSON.parse(body) : undefined);
    });
});

server.listen(8080, () => {
  console.log('You can reach the server here http://localhost:8080');
});