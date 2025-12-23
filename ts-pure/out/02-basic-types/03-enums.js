var Directions;
(function (Directions) {
    Directions[Directions["UP"] = 0] = "UP";
    Directions[Directions["Down"] = 1] = "Down";
    Directions[Directions["Left"] = 2] = "Left";
    Directions[Directions["Right"] = 3] = "Right";
})(Directions || (Directions = {}));
const move = Directions.UP;
console.log(move);
var Color;
(function (Color) {
    Color["RED"] = "Red";
    Color["GREEN"] = "Green";
    Color["BLUE"] = "Blue";
})(Color || (Color = {}));
const favColor = Color.BLUE;
console.log(favColor);
var ResponseCode;
(function (ResponseCode) {
    ResponseCode[ResponseCode["ok"] = 200] = "ok";
    ResponseCode[ResponseCode["notFound"] = 404] = "notFound";
    ResponseCode[ResponseCode["serverError"] = 500] = "serverError";
})(ResponseCode || (ResponseCode = {}));
const respCode = ResponseCode.ok;
console.log(respCode);
console.log(Directions[1]);
export {};
//# sourceMappingURL=03-enums.js.map