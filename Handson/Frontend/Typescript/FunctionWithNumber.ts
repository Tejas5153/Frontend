function getUserInfo(age: number, isActive: boolean): string {
    return `User is ${age} years old and is currently ${isActive ? "Active" : "Inactive"}.`;
}

// Example usage
let userAge: number = 30;
let userStatus: boolean = true;

console.log(getUserInfo(userAge, userStatus));
