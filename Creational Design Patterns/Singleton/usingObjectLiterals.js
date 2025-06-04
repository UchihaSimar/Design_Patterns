const config = {
    start: () => console.log("App has started"),
    update:() => console.log("App has updated")
}

Object.freeze(config); // we freeze the config

config.start();
config.update();

config.newProperty = "name" // try adding a new property

console.log(config) // verify the config, won't have the new property