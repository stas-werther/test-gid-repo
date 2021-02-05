export const logNestedElements = (root) => {
    root.childNodes.forEach((node) => {
      if (node.childNodes && node.childNodes.length) {
        console.group(`Element: ${node.tagName} - ${node.nodeType}`);
        logNestedElements(node);
        console.groupEnd();
      } else {
          console.log(`${node.nodeName}: ${node.nodeValue} - ${node.nodeType}`);
      }
    });
  };