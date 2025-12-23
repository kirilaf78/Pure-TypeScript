interface IName{
    name: string
}

interface IAge{
    age: number
} 

type Person = IName & IAge

const person1: Person = {
    name: 'Lucia',
    age: 32
}

console.log(person1);

//====================================

interface IAddress {
    address: string
}

const user = {
    id: 4,
    userName: 'Vova'
}

type UserWithAddress = typeof user & IAddress

const userWithAddress: UserWithAddress = {
    ...user,
    address: '5th Avenue'
}

console.log(userWithAddress);

//==============================

type Status =  "ok" | "failed" | "pending"

type Result = 1 | 2 | 3

const _status: Status = "pending"

const _result: Result = 3

console.log(_status, _result);
