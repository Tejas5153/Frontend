enum Color {
    Red = "RED",
    Green = "GREEN",
    Blue = "BLUE"
}


function getColorName(color: Color): string {
    return `Selected color is: ${color}`;
}

// Example usage
console.log(getColorName(Color.Red));   
console.log(getColorName(Color.Green)); 
console.log(getColorName(Color.Blue));  
