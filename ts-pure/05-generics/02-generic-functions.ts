const getFirstElement = <T>(arr: T[]): T => {
    return arr[0];
};

const numberArray: number[] = [1, 2, 3];
const stringArray: string[] = ['a', 'b', 'c'];

const firstNumber = getFirstElement(numberArray); // Inferred as number
const firstString = getFirstElement(stringArray); // Inferred as string

console.log(firstNumber); // Output: 1
console.log(firstString); // Output: 'a'

class Box<T> {
    private content: T;
    constructor(content: T) {
        this.content = content;
    } 
    
    getContent(): T {
        return this.content;
    }   
} 

const numberBox = new Box<number>(123);
const stringBox = new Box<string>('Hello');
console.log(numberBox.getContent()); // Output: 123
console.log(stringBox.getContent()); // Output: 'Hello'