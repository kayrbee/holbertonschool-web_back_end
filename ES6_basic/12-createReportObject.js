export default function createReportObject(employeesList) {
    const allEmployeesObject = {
        allEmployees: {...employeesList},
        getNumberOfDepartments(employeesList) {
            const count = Object.keys(employeesList).length;
            return count;
        }
    };
    return allEmployeesObject;
}
