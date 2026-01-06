export default function getListStudents() {
    const arr = [];
    const guillaume = {
        id: 1, 
        firstName: 'Guillaume', 
        location: 'San Francisco'
    };
    
    const james = {
        id: 2,
        firstName: 'James',
        location: 'Columbia'
    }

    const serena = {
        id: 5,
        firstName: 'Serena',
        location: 'San Francisco'
    }

    arr[0] = guillaume;
    arr[1] = james;
    arr[2] = serena;

    return arr;
}