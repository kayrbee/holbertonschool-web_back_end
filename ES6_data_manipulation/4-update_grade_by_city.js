export default function updateStudentGradeByCity(studentList, city, newGrades) {
    if (Array.isArray(studentList)) {
        function filterByLocation(studentList) {
            if (studentList.location === city) {
                return true;
            }
            return false;
        }

        const students = studentList.filter(filterByLocation);
        // console.log(students);

        function addGrades(students) {
            for (let element of newGrades) {
                let { studentId, grade } = element;
                // console.log(students.id);
                if (students.id === studentId) {
                    // console.log('Match!')
                    const studentGrade = {
                        ...students,
                        grade: grade
                    }
                    // console.log(studentGrade);
                    return studentGrade;
                }
                // console.log('No match this time :(');
                continue;
            }
            const studentGrade = {
                ...students,
                grade: 'N/A'
            }
            // console.log(studentGrade);
            return studentGrade;
            // console.log(element, studentId, grade);
        }
        const studentsWithGrade = students.map(addGrades);
        // console.log(studentsWithGrade);
        return studentsWithGrade;

        // let locationFilter = studentList.filter(filterByLocation);
    }

    return [];
}
