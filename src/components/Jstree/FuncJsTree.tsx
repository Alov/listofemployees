import React, {useEffect} from "react";
import Employee from "../../Storage/Model/Employee";
import $ from "jquery";
import {useDispatch} from "react-redux";
import 'jstree'


function FuncJsTree(props:any) {

    let dispatch = useDispatch();

    let groupEmployee = function () {
        console.log(props)
        let allEmployeers = props.employeeData;
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
            let departmentPeoples = allEmployeers.filter((emp:Employee) => emp.department === departmentsNames[i])
            globalArray.push(departmentPeoples)
        }
        // собираем объект для jstree
        for (let i = 0; i < globalArray.length; i++) {
            let department = globalArray[i];
            let obj = {
                text: department[0].department,
                children: department.map((emp) => {
                    return {
                        id: emp.id,
                        text: emp.firstName + ' ' + emp.lastName + ' ' + emp.middleName,
                        data: emp
                    }

                })
            };
            result.push(obj);
        }
        return result;
    }
    let data:any


    useEffect(() => {
        data = groupEmployee()
        console.log("Component mounted")
        $('#jsTree')
            .on('changed.jstree', function (e, data) {

                let emp = data.node.data;
                console.log(emp);
                dispatch({
                    type: "SET_CURRENT_EMP",
                    payload: {
                        currentEmployeer: emp
                    }
                })

            })
            .jstree({
                'core': {
                    'data': data,
                    /*'datatype': 'json'*/
                }
            })
    })

    return (
        <div>
            <div id="jsTree"></div>
        </div>
    )
}

export default FuncJsTree;