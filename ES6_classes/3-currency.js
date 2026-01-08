export default class Currency {
    constructor(code, name) {
        this.code = code;
        this.name = name;
    }

    get code() {
        return this._code;
    }

    set code(code) {
        if (code === undefined || typeof code !== "string") {
            throw new TypeError("Code must be a string");
        }
        this._code = code;
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

    // Method
    displayFullCurrency() {
        return (`${this.name} (${this.code})`);
    }

}