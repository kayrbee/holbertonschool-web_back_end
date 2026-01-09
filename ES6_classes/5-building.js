export default class Building {
    #value = "foo";
    constructor(sqft) {
        console.log(new.target.name);
        if (new.target.name !== "Building" && this.evacuationWarningMessage() == "default") {
            throw new Error("Class extending Building must override evacuationWarningMessage");
        }

        this._sqft = sqft;
    }

    get sqft() {
        return this.sqft;
    }

    evacuationWarningMessage() {
        return "default";
    }

    static [Symbol.hasInstance](x) {
        return this !== Building && #value in x;
    }
}

