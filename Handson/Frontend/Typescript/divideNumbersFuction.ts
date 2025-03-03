function divideNumbers(numerator: number, denominator: number): number {
    if (denominator === 0) {
        throw new Error("Cannot divide by zero");
    }
    return numerator / denominator;
}


try {
    console.log(divideNumbers(10, 2)); 
    console.log(divideNumbers(5, 0));  
} catch (error) {
    if (error instanceof Error) {
        console.error(error.message);
    } else {
        console.error("Unknown error occurred");
    }
}
