function being(name,phrase){
    this.name = name;
    this.phrase = phrase;
    this.sayPhrase = () => console.log(this.phrase);
}

const person = new being('person', 'Hi, I am person');
person.sayPhrase();
const alien = new being('alien', 'Hi, I am alien');
alien.sayPhrase();