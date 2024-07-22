export default function createReportObject(employeesList) {
  const ob = {
    allEmployees: { ...employeesList },
    getNumberOfDepartments(emplst) {
      const keys = Object.keys(emplst);
      return keys.length;
    },
  };
  return ob;
}
