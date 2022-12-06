import React from 'react';
import $ from 'jquery'
import 'jstree'
import Store from '../../Storage/Store'
import Employee from '../../Storage/Model/Employee';

class JsTree extends React.Component<{ store: Store }> {
    private data: any;

    groupEmployee() {
        let allEmployeers = this.props.store.getAllEmpoyeers();
        let departmentsNames: Array<string> = [];
        let globalArray: Array<Array<Employee>> = [];
        let result = [];

        /*Ищем названия отделов*/
        for (let i = 0; i < allEmployeers.length; i++) {
            let name = allEmployeers[i].department
            let exist = departmentsNames.find((e) => {
                return e === name
            })
            if (!exist) {
                departmentsNames.push(name)
            }
        }
        /*Ищем  людей по названию отдела*/
        for (let i = 0; i < departmentsNames.length; i++) {
            let departmentPeoples = allEmployeers.filter(emp => emp.department === departmentsNames[i])
            globalArray.push(departmentPeoples)
        }
        // собираем объект для jstree
        for (let i = 0; i < globalArray.length; i++) {
            let department = globalArray[i];
            let obj = {
                text: department[0].department,
                children: department.map((emp) => {
                    return {
                        text: emp.firstName + ' ' + emp.lastName + ' ' + emp.middleName
                    }

                })
            };
            result.push(obj);
        }
        console.log(result)
    } //конец функции

    componentDidMount() {
        $('#jsTree').jstree({
            'core': {
                'data': this.data,
                /*'datatype': 'json'*/
            }
        })

    }

    render() {
        this.groupEmployee()
        return (
            <div>
                <div id="jsTree"></div>
                <p>{this.props.store.getEmployeeById(1)?.firstName}</p>
            </div>


        )
    }

}

export default JsTree;