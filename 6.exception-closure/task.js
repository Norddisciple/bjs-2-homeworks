function parseCount(num) {
    let parseResult = Number.parseFloat(num);
    if (Number.isNaN(parseResult)) {
        throw new Error("Невалидное значение");
    } return parseResult;
}

// function validateCount(value) {
//     try {
//         return parseCount(value);
//     } catch (Error) {
//         return Error;
//     }
// }

// class Triangle {
//     constructor(side1, side2, side3) {
//         this.side1 = side1;
//         this.side2 = side2;
//         this.side3 = side3;
//         if (side1 > side2 + side3 || side2 > side1 + side3 || side3 > side1 + side2) {
//             throw new Error("Треугольник с такими сторонами не существует")
//         }
//     }

//     get perimeter() {
//         return this._perimeter = this.side1 + this.side2 + this.side3;
//     }

//     get area() {
//         let halfPerimeter = this._perimeter / 2;
//         return this._area = Number(Math.sqrt((halfPerimeter) * (halfPerimeter - this.side1) * (halfPerimeter - this.side2) * (halfPerimeter - this.side3)).toFixed(3));
//     }
// }

// function getTriangle(side1, side2, side3) {
//     try {
//         return new Triangle(side1, side2, side3);
//     } catch {
//         return {
//             get area() {
//                 return "Ошибка! Треугольник не существует" },
//             get perimeter() {
//                 return "Ошибка! Треугольник не существует"},
//         }
//     }
// }


