function greet(name: string, message?: string): string {
    if(message){
        return(`Hello ${name}. ${message}`)
    }
    return (`Hello ${name}`)
}

console.log(greet('Kiryl', 'How are you doing?'));
console.log(greet('Larisa'));

