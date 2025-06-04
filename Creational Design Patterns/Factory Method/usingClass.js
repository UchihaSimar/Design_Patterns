class Being{
    constructor(name, phrase){
        this.name = name;
        this.phrase = phrase;
    }

    sayPhrase = () => console.log(this.phrase);
}

const person = new Being('Person',"Hi, I am person");
person.sayPhrase();
const alien = new Being('Alien',"Hi, I am alien");
alien.sayPhrase();