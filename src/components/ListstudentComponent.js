import React, { useEffect, useState } from 'react';
import studentServices from '../services/studentServices';
import { Link } from 'react-router-dom';

const ListstudentComponent = () => {
    const [student, setStudent] = useState([]);

    useEffect(() => {
        studentServices.getAllStudent().then((response) => {
            setStudent(response.data);
            console.log(response.data);
        }).catch((error) => {
            console.log(error);
        });
    }, []); // Chạy một lần khi component được mount

    return (
        <div className="container">
            <h2 className="text-center">List student</h2>
            <Link to="/add-student" className="btn btn-primary mb-2"> Add Student</Link>
            <table className="table table-bordered table-striped">
                <thead>
                    <tr>
                        <th>ID Student</th>
                        <th>Name</th>
                        <th>Address</th>
                    </tr>
                </thead>
                <tbody>
                    {student.map((student) => (
                        <tr key={student.id}>
                            <td>{student.id}</td>
                            <td>{student.name}</td>
                            <td>{student.address}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ListstudentComponent;
