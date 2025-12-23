const anyValue: any = 'this is a string'
const strLengh: number = (<string> anyValue).length;
console.log(strLengh);

const anyValue1: any = 'this is a string'
const strLengh1: number = (anyValue as string).length;
console.log(strLengh1);


const myElement: HTMLElement | null = document.getElementById('myElement')
myElement!.style.color = 'red';

//myElement && (myElement.style.color = 'red')