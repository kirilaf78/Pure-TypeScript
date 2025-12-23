interface IUser {
  name: string;
  email: string;
  age: number;
  greet: () => string;
}

const user: IUser = {
  name: "Sasha",
  email: "sfd@gmail.com",
  age: 34,
  greet() {
    return `Hi, I am ${user.name}`;
  },
};

console.log(user.greet());

type User = {
  name: string;
  email: string;
  age: number;
  greet: () => string;
};

const user1: User = {
  name: "Sasha",
  email: "sfd@gmail.com",
  age: 34,
  greet() {
    return `Hi, I am ${user.name}`;
  },
};

console.log(user1.greet());

interface IextendedUser extends IUser{
  role: string
}

const user2: IextendedUser = {
  name: "Marina",
  email: "sfd@gmail.com",
  age: 24,
  greet() { return `Hi, I am ${user.name}`},
  role: 'admin'

}

console.log(user2);
