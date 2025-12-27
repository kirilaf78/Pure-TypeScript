abstract class Shape {
    abstract calculateArea(): number;
    displayShapeType(shapeType: string): void {
         console.log(`This is a ${shapeType}`);
    }
}

interface ICircle {
    radius: number;
}

interface IRectangle {
    width: number;
    height: number;
}

class Circle extends Shape implements ICircle {
    radius: number;

    constructor(radius: number) {
        super();
        this.radius = radius;
    }
    calculateArea(): number {
        return Math.PI * this.radius * this.radius;
    }
}

class Rectangle extends Shape implements IRectangle {
    width: number;
    height: number;

    constructor(width: number, height: number) {
        super();
        this.width = width;
        this.height = height;
    }

    calculateArea(): number {
        return this.width * this.height;
    }
}

const circle = new Circle(5);
circle.displayShapeType("Circle");
console.log(`Area of Circle: ${circle.calculateArea()}`);

const rectangle = new Rectangle(4, 6);
rectangle.displayShapeType("Rectangle");
console.log(`Area of Rectangle: ${rectangle.calculateArea()}`);