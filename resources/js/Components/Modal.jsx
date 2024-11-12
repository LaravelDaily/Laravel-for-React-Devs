import React, {useEffect, useState} from 'react';
import {Button} from './Common';
import Footer from "@/Layouts/Footer.jsx";

export const CreateModal = ({show, handleCreateModal, createEmployee}) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        createEmployee(name, email, address);
        setName('');
        setEmail('');
        setAddress('');
        handleCreateModal();
    }

    return (
        <>
            {show &&
                <div className="employee-modal-overlay">
                    <a className="modal-outside-close" onClick={handleCreateModal}></a>
                    <div className="employee-modal">
                        <Button text="Close Modal" onClick={handleCreateModal} icon="remove" iconOnly={true}
                                customClass="employee-modal__close"/>
                        <h3 className="heading heading--default">Create New Employee</h3>
                        <form onSubmit={handleSubmit} className="form">
                            <div className="form-field">
                                <label className="form-label">Full name:</label>
                                <input placeholder="Name" className="form-input"
                                       onChange={(e) => setName(e.target.value)}/>
                            </div>
                            <div className="form-field">
                                <label className="form-label">Email:</label>
                                <input placeholder="Email" className="form-input"
                                       onChange={(e) => setEmail(e.target.value)}/>
                            </div>
                            <div className="form-field">
                                <label className="form-label">Address:</label>
                                <textarea placeholder="123 Jon Doe Rd ..." className="form-textarea"
                                          onChange={(e) => setAddress(e.target.value)}/>
                            </div>
                            <Button text="Create" type="submit" style="primary" size="default"/>
                        </form>

                    </div>
                </div>
            }
        </>
    )
}

export const UpdateModal = ({show, handleUpdateModal, employee, updateEmployee}) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');

    useEffect(() => {
        if (employee) {
            setName(employee.name);
            setEmail(employee.email);
            setAddress(employee.address);
        }
    }, [employee]);

    const handleSubmit = (e) => {
        e.preventDefault();
        updateEmployee(employee.id, name, email, address);
        handleUpdateModal();
    }

    return (
        <>
            {show &&
                <div className="employee-modal-overlay">
                    <a className="modal-outside-close" onClick={handleUpdateModal}></a>
                    <div className="employee-modal">
                        <Button text="Close Modal" onClick={handleUpdateModal} icon="remove" iconOnly={true}
                                customClass="employee-modal__close"/>
                        <h3 className="heading heading--default">Edit Employee</h3>
                        <form onSubmit={handleSubmit} className="form">
                            <div className="form-field">
                                <label className="form-label">Full name:</label>
                                <input placeholder="Name" className="form-input" value={name}
                                       onChange={(e) => setName(e.target.value)}/>
                            </div>
                            <div className="form-field">
                                <label className="form-label">Email:</label>
                                <input placeholder="Email" className="form-input" value={email}
                                       onChange={(e) => setEmail(e.target.value)}/>
                            </div>
                            <div className="form-field">
                                <label className="form-label">Address</label>
                                <textarea placeholder="123 Jon Doe Rd ..." className="form-textarea" value={address}
                                          onChange={(e) => setAddress(e.target.value)}/>
                            </div>
                            <Button text="Update" type="submit" style="primary" size="default"/>
                        </form>
                    </div>
                </div>
            }
        </>
    )
}

export default { CreateModal, UpdateModal };

