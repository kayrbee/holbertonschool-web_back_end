export default function getStudentsByLocation(studentsList, city) {
    if (Array.isArray(studentsList)) {
        function filterByLocation(studentsList) {
            if (studentsList.location === city) {
                return true;
            }
            return false;
        }
        return studentsList.filter(filterByLocation);
    }
    return [];
}