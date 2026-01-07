export default function updateStudentGradeByCity(studentList, city, newGrades) {
    if (Array.isArray(studentList)) {
        function filterByLocation(studentList) {
            if (studentList.location === city) {
                return true;
            }
            return false;
        }

        const students = studentList.filter(filterByLocation);

        function addGrades(students) {
            for (let element of newGrades) {
                let { studentId, grade } = element;
                if (students.id === studentId) {
                    const studentGrade = {
                        ...students,
                        grade: grade
                    }
                    return studentGrade;
                }
                continue;
            }
            const studentGrade = {
                ...students,
                grade: 'N/A'
            }
            return studentGrade;
        }
        const studentsWithGrade = students.map(addGrades);
        return studentsWithGrade;

    }

    return [];
}
