export default class HolbertonClass {
    constructor(size, location) {
        this.size = size;
        this.location = location;
    }

    get size() {
        return this._size;
    }
    
    set size(size) {
        if (size == undefined || typeof size !== "number") {
            throw new TypeError("Size must be a number");
        }
        this._size = size;
    }

    get location() {
        return this._location;
    }

    set location(location) {
        if (location == undefined || typeof location !== "string") {
            throw new TypeError("Location must be a string");
        }
        this._location = location;
    }

    valueOf() {
        return `${this.size}`;
    }

    toString() {
        return `${this.location}`;
    }
}