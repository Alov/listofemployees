import Employee from "./Model/Employee";
import { Data } from "./Data.json"

export default class Store {
    private employeeData: Array<Employee> = [];

    init() {
        Data.data.foreach((item) => {
            this.employeeData.push({id:item.id})
        })
    }
}