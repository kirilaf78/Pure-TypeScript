type Mapper<T, U> = (value: T) => U;

function mapArray<T, U>(arr: T[], mapper: Mapper<T, U>): U[] {
    return arr.map(mapper);
}

const numbers = [1, 2, 3, 4];
const numbersToStrings: Mapper<number, string> = (num) => num.toString();
const stringArray = mapArray(numbers, numbersToStrings);
console.log(stringArray); // Output: ['1', '2', '3', '4']

interface IProduct{
    id: number;
    name: string;
    price: number;
}

const products: IProduct[] = [
    { id: 1, name: "Laptop", price: 1000 },
    { id: 2, name: "Phone", price: 500 },
    { id: 3, name: "Tablet", price: 300 },
];
const productNames: Mapper<IProduct, string> = (product) => product.name;
const namesArray = mapArray(products, productNames);
console.log(namesArray);

const extractIds: Mapper<IProduct, number> = (product) => product.id;
const idsArray = mapArray(products, extractIds);
console.log(idsArray); // Output: ['Laptop', 'Phone', 'Tablet'] // Output: [1, 2, 3] // Output: [1, 2, 3]
