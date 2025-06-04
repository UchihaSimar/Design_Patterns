// Implementor: Device
class Device {
    turnOn() {}
    turnOff() {}
}

class TV extends Device {
    turnOn() {
        console.log("TV is now ON");
    }
    turnOff() {
        console.log("TV is now OFF");
    }
}

class Radio extends Device {
    turnOn() {
        console.log("Radio is now ON");
    }
    turnOff() {
        console.log("Radio is now OFF");
    }
}

// Abstraction: RemoteControl
class RemoteControl {
    constructor(device) {
        this.device = device;
    }

    togglePower() {
        console.log("Default implementation of togglePower");
    }
}

class BasicRemote extends RemoteControl {
    togglePower() {
        console.log("Using Basic Remote to toggle power");
        // Delegate the operation to the device
        this.device.turnOn();
    }
}

class AdvancedRemote extends RemoteControl {
    togglePower() {
        console.log("Using Advanced Remote to toggle power with additional features");
        // Delegate the operation to the device
        this.device.turnOff();
    }
}

// Usage
const tv = new TV();
const radio = new Radio();

const basicTVRemote = new BasicRemote(tv);
basicTVRemote.togglePower(); // Using Basic Remote to toggle power. TV is now ON

const advancedRadioRemote = new AdvancedRemote(radio);
advancedRadioRemote.togglePower(); // Using Advanced Remote to toggle power with additional features. Radio is now OFF