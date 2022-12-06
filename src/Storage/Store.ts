import Employee from "./Model/Employee";
import Data from "./Data.json"

export default class Store  {
    private employeeData: Array<Employee> = [];

    init() {
        Data.data.forEach((item) => {
            let currentEmployee: Employee = {
                id: parseInt(item.id),
                firstName: item.FirstName,
                lastName: item.LastName,
                department: item.Department,
                avatarURL: item.avatarURL,
                middleName: item.SecondName,
                position: item.position
            }
            this.employeeData.push(currentEmployee)
        });
        console.log(this.employeeData);
    }

    getEmployeeById(id: number): Employee | null {
        let result: Employee | null = null;
        this.employeeData.forEach((emp) => {
            if (emp.id === id) {
                result = emp;
            }
        })
        return result;
    }

    getAllEmpoyeers(): Array<Employee> {
        return this.employeeData

    }
    
}