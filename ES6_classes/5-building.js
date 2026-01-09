export default class Building {
    constructor(sqft) {
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
}

