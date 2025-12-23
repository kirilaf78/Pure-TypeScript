enum Directions {
    UP,
    Down, 
    Left, 
    Right
}

const move: Directions = Directions.UP

console.log(move);

enum Color{
    RED = 'Red',
    GREEN = 'Green',
    BLUE = 'Blue'
}

const favColor: Color = Color.BLUE

console.log(favColor);

enum ResponseCode{
    ok = 200,
    notFound = 404, 
    serverError = 500

}

const respCode: ResponseCode = ResponseCode.ok
console.log(respCode);

console.log(Directions[1]);



