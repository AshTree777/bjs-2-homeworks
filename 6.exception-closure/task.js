/* ---Задание №1--- */

function parseCount(elementBeingChecked) {
    let meaning = Number.parseFloat(elementBeingChecked);
    if (Number.isNaN(meaning)) {
        throw new Error("Невалидное значение");
    }
    return meaning;
}

function validateCount(elementBeingChecked) {
    try {
        return parseCount(elementBeingChecked);
    } catch (error) {
        return error;
    }
}

/* ---Задание №2--- */

class Triangle {
    constructor(sideA, sideB, sideC) {
        this.sideA = sideA,
            this.sideB = sideB,
            this.sideC = sideC;

        if ((sideA + sideB) < sideC || (sideA + sideC) < sideB || (sideB + sideC) < sideA) {
            throw new Error("Треугольник с такими сторонами не существует");
        }
    }

    get perimeter() {
        const perimeterValue = this.sideA + this.sideB + this.sideC;
        return perimeterValue;
    }

    get area() {
        const semiPerimeter = this.perimeter / 2;
        const square = Math.sqrt(semiPerimeter * (semiPerimeter - this.sideA) * (semiPerimeter - this.sideB) * (semiPerimeter - this.sideC));
        return Number(square.toFixed(3));
    }
}

function getTriangle(sideA, sideB, sideC) {
    try {
        return new Triangle(sideA, sideB, sideC);
    } catch (error) {
        return {
            get area() {
                return "Ошибка! Треугольник не существует";
            },
            get perimeter() {
                return "Ошибка! Треугольник не существует";
            }
        }
    }
}