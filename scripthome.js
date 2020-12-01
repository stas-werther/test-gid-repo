function cookTheSpell() {
    
    console.log('Cooking...', this.id)
    }
const kettle = {
    id: 1,
    ingradient1: '',
    ingradient2: '',
    ingradient3: '',
    ingradient4: '',
    cookTheSpell,
}


const LightningSpell = {
    ingradient1: '',
    ingradient2: '',
    ingradient3: '',
    ingradient4: '',
    cookTheSpell,
}
const FireballSpell = {
    ingradient1: '',
    ingradient2: '',
    ingradient3: '',
    ingradient4: '',
}

const magicbook = {
    firstSpell: LightningSpell,
    secondSpell: FireballSpell,
}
kettle.cookTheSpell();
LightningSpell.cookTheSpell();
    