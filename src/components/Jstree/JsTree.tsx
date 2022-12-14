import React from 'react';
import $ from 'jquery'
import 'jstree'
import Store from '../../Storage/Store'
import Employee from '../../Storage/Model/Employee';
import {useDispatch} from "react-redux";

class JsTree extends React.Component<{ store: Store }> {

    private store: Store = this.props.store
    private data: any;

    groupEmployee() {
        let allEmployeers = this.props.store.getAllEmployeers();
        let departmentsNames: Array<string> = [];
        let globalArray: Array<Array<Employee>> = [];
        let result = [];

        /*???? ???????? ???????*/
        for (let i = 0; i < allEmployeers.length; i++) {
            let name = allEmployeers[i].department
            let exist = departmentsNames.find((e) => {
                return e === name
            })
            if (!exist) {
                departmentsNames.push(name)
            }
        }
        /*????  ????? ?? ???????? ??????*/
        for (let i = 0; i < departmentsNames.length; i++) {
            let departmentPeoples = allEmployeers.filter((emp:Employee) => emp.department === departmentsNames[i])
            globalArray.push(departmentPeoples)
        }
        // ???????? ?????? ??? jstree
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
        // console.log(result)
    } //????? ???????

    componentDidMount() {
        this.data = this.groupEmployee()
        $('#jsTree')
            .on('changed.jstree', function (e, data) {

                let emp = data.node.data;
                console.log(emp);
                let dispatch = useDispatch()
                dispatch({
                    type: "SET_CURRENT_EMP",
                    payload: {
                        currentEmployeer: emp
                    }
                })

            })
            .jstree({
            'core': {
                'data': this.data,
                /*'datatype': 'json'*/
            }
        })

    }

    render() {
        return (
            <div>
                <div id="jsTree"></div>
            </div>


        )
    }

}

export default JsTree;