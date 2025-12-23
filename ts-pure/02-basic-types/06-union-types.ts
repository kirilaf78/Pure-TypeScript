let result: number | string

result = 10
result = 'myName'

function printResult(value: string | number){
    console.log(`The value is ${value}`);
    
}

printResult(4)