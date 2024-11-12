import React from "react";
import Layout from './../../Layouts/AuthenticatedLayout.jsx'
export default function EmployeeDetails({employee}) {
    return (
        <Layout>
            <div>
                <h1>{employee.name}'s Profile</h1>
                {/* <input type="text" value={employee.name} /> */}
                <img src={employee.profilepicture}/>
                <p>{employee.name}</p>
            </div>
        </Layout>
    )
}
