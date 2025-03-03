function parseJson(jsonString: string): any | null {
    try {
        return JSON.parse(jsonString);
    } catch (error) {
        console.error("Error: Invalid JSON format", error);
        return null;
    }
}


console.log(parseJson('{"name": "Tejas", "age": 25}')); 
console.log(parseJson("{invalidJson}")); 
