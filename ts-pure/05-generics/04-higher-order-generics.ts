type Mapper<T, U> = (value: T) => U;

function mapArray<T, U>(arr: T[], mapper: Mapper<T, U>): U[] {
    return arr.map(mapper);
}

const numbers = [1, 2, 3, 4];
const numbersToStrings: Mapper<number, string> = (num) => num.toString();
const stringArray = mapArray(numbers, numbersToStrings);
console.log(stringArray); // Output: ['1', '2', '3', '4']

interface <T, U> {