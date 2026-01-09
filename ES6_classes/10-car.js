export default class Car {
    constructor(brand, motor, color) {
        this.brand = brand;
        this.motor = motor;
        this.color = color;
    }

    get brand() {
        this._brand;
    }

    set brand(brand) {
        this._brand = brand;
    }

    get motor() {
        this._motor;
    }

    set motor(motor) {
        this._motor = motor;
    }

    get color() {
        this._color;
    }

    set color(color) {
        this._color = color;
    }

    cloneCar() {
        return new Car();
    }
}