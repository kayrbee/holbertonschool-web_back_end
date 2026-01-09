import Building from './5-building.js';

const b = new Building(100);
console.log(b);

class TestBuilding extends Building {
    // evacuationWarningMessage() {
    //     return "not default";
    // }
}

try {
    let testBld = new TestBuilding(200)
    // console.log(testBld, testBld.evacuationWarningMessage());
}
catch(err) {
    console.log(err);
}
