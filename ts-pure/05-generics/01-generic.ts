interface IBox<T> {
    value: T;
}

const numberBox: IBox<number> = { value: 42 };
const stringBox: IBox<string> = { value: "Hello, Generics!" };

type Pair<T, U> = {
    first: T;
    second: U;
};  
const numberStringPair: Pair<number, string> = { first: 1, second: "One" };