function getMessage(message: string): string;
function getMessage(message: number): number;

function getMessage(message: string | number): string | number {
  if (typeof message === "string") {
    return `Hi, ${message}`;
  }
  return message;
}

console.log(getMessage('Vasia'));
console.log(getMessage(67));


