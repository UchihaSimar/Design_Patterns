const prototypeObject = {
    fly: () => console.log("I can fly")
}

Object.setPrototypeOf({ name: "simar" }, prototypeObject);
prototypeObject.fly();