function greet(name:string): string {
    return(`Hi ${name}`)
}
console.log(greet('Kiryl'));

function makeGreeting(name1: string, greeting: string = 'Hello' ) {
    return (`${greeting} ${name1}`)
    
}

console.log(makeGreeting(`Kiryl`, `Здарова`));

function sumAll(...numbers: number[]) {
    return numbers.reduce((total, num) => total + num, 0)
}

console.log(sumAll(1,2,3,4));

const multiply = (a:number, b:number): number => a * b
console.log(multiply(4, 3));

 

// const findMax = (...numbers: number[]): number => {
//   // Твой код здесь
//   return Math.max(...numbers)
// }
