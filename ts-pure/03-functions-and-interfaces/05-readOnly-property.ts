interface IUserReadOnly {
    readonly id: number,
    name: string,
    readonly birthDay: Date;
}

const user: IUserReadOnly = {
    id: 4,
    name: "Lena", 
    birthDay: new Date('1997-02-03')

}

user.name = 'Sveta'
//user.id = 3

const numbers: readonly number[] = [1, 2, 3, 4, 5];
// numbers.push(2)