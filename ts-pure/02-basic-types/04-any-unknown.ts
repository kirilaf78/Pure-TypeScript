const anyValue: any = 'this is a string'

const strLengh: number = anyValue.length;
console.log(strLengh);


let value:unknown;
value = 10
value = true
value = 'someWords'

if(typeof value === 'string'){
    console.log(value.toUpperCase());
    
}
