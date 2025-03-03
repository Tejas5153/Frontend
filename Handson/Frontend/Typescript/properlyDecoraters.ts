// ✅ Updated decorator for TypeScript 5+
function ValidateEmail(target: any, propertyKey: string) {
    let value: string;

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    Object.defineProperty(target, propertyKey, {
        get: () => value,
        set: (newValue: string) => {
            if (!emailRegex.test(newValue)) {
                throw new Error(`Invalid email format: ${newValue}`);
            }
            value = newValue;
        },
        enumerable: true,
        configurable: true
    });
}

class User1 {
    
    email: string = "";

    constructor(email: string) {
        this.email = email;
    }
}

try {
    const user1 = new User1("valid.email@example.com");
    console.log(`User created with email: ${user1.email}`);

    const user2 = new User1("invalid-email");
} catch (error) {
    console.error(error);
}
