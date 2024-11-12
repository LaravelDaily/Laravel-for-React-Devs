import Layout from './../../Layouts/AuthenticatedLayout.jsx'
import {Button, InertiaLink} from "../../Components/Common.jsx";
import React, {useState} from 'react'
import {CreateModal, UpdateModal} from "../../Components/Modal.jsx";
import {router} from "@inertiajs/react";

function Index({
                   employees,
                   baseURL
               }) {
    const [createModalOpen, setCreateModal] = useState(false);
    const [updateModalOpen, setUpdateModal] = useState(false);
    // Selected employee state for editing and updating.
    const [selectedEmployee, setSelectedEmployee] = useState(null);

    const createEmployee = (name, email, address) => {
        axios
            .post(baseURL, {
                name,
                email,
                address
            })
            .then((response) => {
                router.visit('/employee', {
                    only: ['employees'],
                })
            })
            .catch(error => {
                console.error('Error posting data:', error);
            });
    }

    const updateEmployee = (id, name, email, address) => {
        axios.put(`${baseURL}/${id}`, {
            name,
            email,
            address
        })
            .then((response) => {

                router.visit('/employee', {
                    only: ['employees'],
                })

                setUpdateModal(false);
            })
            .catch(error => {
                console.error('Error updating data:', error);
            });
    }

    const deleteEmployee = (id) => {
        axios.delete(`${baseURL}/${id}`)
            .then(() => {
                router.visit('/employee', {
                    only: ['employees'],
                })
            })
            .catch(error => {
                console.error('Error deleting data:', error);
            });
    }

    // Handle all the Modal show/hide and set employee when editing.
    const handleCreateModal = () => {
        setCreateModal(!createModalOpen);
    }

    const handleEditEmployee = (employee) => {
        setSelectedEmployee(employee);
        setUpdateModal(true);
    }

    const handleUpdateModal = () => {
        setUpdateModal(!updateModalOpen);
    }

    return (
        <Layout>
            <div className="container">
                <div className="flex-row">
                    <h1 className="heading heading--large heading--flush">Employee List</h1>
                    <Button
                        text="Add New Employee"
                        onClick={handleCreateModal}
                        style="primary"
                        size="large"
                        icon="plus"
                    />
                </div>

                <table className="employee-table">
                    <thead>
                    <tr>
                        <th>ID:</th>
                        <th>Name:</th>
                        <th>Email:</th>
                        <th>Address:</th>
                        <th>Actions:</th>
                    </tr>
                    </thead>
                    <tbody>
                    {Array.from(employees).map(employee => (
                        <tr key={employee.id}>
                            <td>{employee.id}</td>
                            <td>
                                <a
                                    className="employee-table__link"
                                    onClick={() => navigate(`/employee/${employee.id}`, {state: employee})}>
                                    {employee.name}
                                </a>
                            </td>
                            <td>{employee.email}</td>
                            <td>{employee.address}</td>
                            <td className="employee-table__actions">
                                <InertiaLink
                                    href={'employee/' + employee.id}
                                    method="get"
                                    as="button" type="button"
                                    text="View Employee"
                                    style="primary"
                                    size="small"
                                    icon="user"
                                    iconOnly={true}
                                />
                                <Button
                                    text="Edit Employee"
                                    onClick={() => handleEditEmployee(employee)}
                                    style="primary"
                                    size="small"
                                    icon="pencil"
                                    iconOnly={true}
                                />
                                <Button
                                    text="Delete this employee"
                                    onClick={() => deleteEmployee(employee.id)}
                                    style="primary"
                                    size="small"
                                    icon="trash"
                                    iconOnly={true}
                                />
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>

            <CreateModal
                show={createModalOpen}
                handleCreateModal={handleCreateModal}
                createEmployee={createEmployee}
            />

            <UpdateModal
                show={updateModalOpen}
                handleUpdateModal={handleUpdateModal}
                employee={selectedEmployee}
                updateEmployee={updateEmployee}
            />
        </Layout>
    );
}

export default Index;
