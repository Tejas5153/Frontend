// Class decorator that logs a message when a class is instantiated
function LogInstance(constructor: Function) {
    console.log(`Class ${constructor.name} has been instantiated.`);
}

@LogInstance  // Applying the decorator to the User class
class User {
    constructor(public name: string) {
        console.log(`User ${this.name} created.`);
    }
}

// Example usage
const user1 = new User("Tejas");
const user2 = new User("Sonawane");
