const builderObject = {
    name:"Person"
}

addAbilityToFly = obj =>{
    obj.fly = () => console.log("I can fly");
}

addAbilityToFly(builderObject);
builderObject.fly();
