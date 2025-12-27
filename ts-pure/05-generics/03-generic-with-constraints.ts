function logValue<T extends { value: string }>(obj: T): void {
  console.log(obj.value);
}

logValue({ value: "Hello, World!"}); // Validid


class DataHolder<T = string> {
   data: T;

constructor(data: T) {
    this.data = data;
  }

    getData(): T {
    return this.data;
  }
}
const stringHolder = new DataHolder("Sample String");
console.log(stringHolder.getData()); // Output: Sample String

const numberHolder = new DataHolder(424);
console.log(numberHolder.getData()); // Output: 424