interface IUser {
  name: string;
  age: number;
  address: string;
}

type PartialUser = {
  [P in keyof IUser]?: IUser[P];
};

const partialUser: PartialUser = { age: 33 };

type ReadOnlyUser<T> = {
  readonly [P in keyof T]: T[P];
};

const readOnlyUser: ReadOnlyUser<IUser> = {
  name: "Klara",
  age: 44,
  address: "Homiktoveis",
};

// readOnlyUser.age = 43

type StringifiedUser <T> = {
  [P in keyof T]: string;
};

const stringifiedUser: StringifiedUser <IUser> = {
  name: "Klara",
  age: "44",
  address: "Homiktoveis",
};
