export default function getStudentIdsSum(studentsList) {
    if (Array.isArray(studentsList)) {
        const sumOfIds =  studentsList.reduce((accumulator, currentValue) => accumulator + currentValue.id, 0,);
        return sumOfIds;
    }
    return [];
}