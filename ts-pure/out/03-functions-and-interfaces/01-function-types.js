function greet(name) {
    return (`Hi ${name}`);
}
console.log(greet('Kiryl'));
function makeGreeting(name1, greeting = 'Hello') {
    return (`${greeting} ${name1}`);
}
console.log(makeGreeting(`Kiryl`, `Здарова`));
function sumAll(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}
console.log(sumAll(1, 2, 3, 4));
const multiply = (a, b) => a * b;
console.log(multiply(4, 3));
export {};
// const findMax = (...numbers: number[]): number => {
//   // Твой код здесь
//   return Math.max(...numbers)
// }
//# sourceMappingURL=01-function-types.js.map