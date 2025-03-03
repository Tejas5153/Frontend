function identity<T>(value: T): T {
    return value;
}


console.log(identity<string>("Hello, TypeScript!"));  
console.log(identity<number>(42));                    
console.log(identity<boolean>(true));                
