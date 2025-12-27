class User {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  greet(): void {
    console.log(`Hello, my name is ${this.name}`);
  }
  isAdult(): boolean {
    return this.age >= 18;
  }
}
const user1 = new User("Alice", 30);
user1.greet();
console.log(`Is adult: ${user1.isAdult()}`);
