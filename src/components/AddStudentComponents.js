import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Cập nhật import ở đây
import studentServices from '../services/studentServices';

const AddStudentComponents = () => {
    const [Name, setName] = useState('');
    const [Address, setAddress] = useState('');
    const navigate = useNavigate(); // Sử dụng useNavigate

    const saveStudent = (e) => {
        e.preventDefault();

        const student = { Name, Address };
        studentServices.createStudent(student).then((response) => {
            console.log(response.data);
            navigate("/"); // Sử dụng navigate để chuyển hướng
        }).catch(error => {
            console.log(error);
        });
    }

    return (
        <div>
            <br />
            <br />
            <div className="container">
                <div className="row">
                    <div className="cart col-md-6 offset-md-3 offset-md-3">
                        <h2 className="text-center">Add Student</h2>
                        <div className="card-body">
                            <form>
                                <div className="form-group mb-2">
                                    <label className="form-label">Name</label>
                                    <input type="text"
                                        placeholder="Enter Name"
                                        name="Name"
                                        className="form-control"
                                        value={Name}
                                        onChange={(e) => setName(e.target.value)} />
                                </div>
                                <div className="form-group mb-2">
                                    <label className="form-label">Address</label>
                                    <input type="text"
                                        placeholder="Enter Address"
                                        name="Address"
                                        className="form-control"
                                        value={Address} // Chỉnh sửa value ở đây
                                        onChange={(e) => setAddress(e.target.value)} />
                                </div>
                                <button className="btn btn-success" onClick={(e) => saveStudent(e)}>Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddStudentComponents;
