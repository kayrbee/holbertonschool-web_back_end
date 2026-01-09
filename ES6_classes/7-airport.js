export default class Airport {
    constructor(name, code) {
        this.name = name;
        this.code = code;
    }

    get name() {
        return this._name;
    }

    set name(name) {
        if (name == undefined || typeof name !== "string") {
            throw new Error("Name must be a string");
        }
        this._name = name;
    }

    get code() {
        return this._code;
    }

    set code(code) {
        if (code == undefined || typeof code !== "string") {
            throw new Error("Code must be a string");
        }
        this._code = code;
    }

    toString() {
        return `[${typeof this} ${this.code}]`;
    }
}