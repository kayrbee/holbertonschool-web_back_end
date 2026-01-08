import ClassRoom from "./0-classroom";

export default function initializeRooms() {
    let roomSizes = [19, 20, 34];
    let classRooms = [];

    for (let size of roomSizes) {
        let room = new ClassRoom(size);
        classRooms.push(room);
    }

    return classRooms;
}