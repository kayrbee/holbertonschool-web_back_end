export default class HolbertonCourse {
    constructor(name, length, students) {
        this.name = name;
        this.length = length;
        this._students = students;
    }

    get name() {
        return this._name;
    }

    set name(name) {
        if (name === undefined || typeof name !== "string") {
            throw new TypeError("Name must be a string");
        }
        this._name = name;
    }

    get length() {
        return this._length;
    }

    set length(length) {
        if (length === undefined || typeof length !== "number") {
            throw new TypeError("Length must be a number");
        }
        this._length = length;
    }

    get students() {
        return this._students;
    }

    set students(students) {
        if (students === undefined || !(Array.isArray(students))) {
            throw new TypeError("Students must be an array");
        }
        this._students = students;
    }
}