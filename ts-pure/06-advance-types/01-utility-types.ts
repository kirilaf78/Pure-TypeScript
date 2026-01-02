interface IUser{
    id: number,
    name: string, 
    age: number
}

const partialUser: Partial<IUser> = {}
const partialUser1: Partial<IUser> = {age: 33}

const user: Readonly<IUser> = {
    id : 1,
    name: "Geny",
    age: 32
}

// user.age = 44
// user.id = 4

type UserPreview = Pick <IUser, 'id' | 'name'>

const userPreview1: UserPreview = {
    id: 4,
    name: 'Soso'
}
// or:
//interface IUserPreview extends Pick <IUser, 'id' | 'name'>{}


// const userPreview1: IUserPreview = {
//     id: 4,
//     name: 'Soso'
// }


type UserWithoutAge = Omit<IUser, 'age'>

const userWithoutAge: UserWithoutAge = {
    id: 5,
    name: 'Lucia'
}

type Role = 'admin' | 'user' | 'guest'

const rolePermissions: Record <Role, string[]> = 
{
    admin: ['read', 'write', 'delete'],
    user: ['read', 'write'],
    guest: ['read'],

}

console.log(rolePermissions.admin);
