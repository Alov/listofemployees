import {useDispatch, useSelector} from "react-redux";
import {RootState} from "@reduxjs/toolkit/dist/query/core/apiState";
import React from "react";
import Employee from "../Storage/Model/Employee";


function EmployeerData(props: Employee) {
    let data = props

    return (
        <div>
            <p>id: {data.id}</p>
            <p>Department: {data.department}</p>
            <p>First name: {data.firstName}</p>
            <p>Last name: {data.lastName}</p>
        </div>

    )
}
export default EmployeerData;