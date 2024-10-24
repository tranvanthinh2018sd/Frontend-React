import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ListCourseComponent = () => {

    const [course, setCourse] = useState([]);

    // Gọi API trực tiếp trong useEffect
    useEffect(() => {
        const COURSE_BASE_REST_API_URL = 'http://localhost:8080/api/course';

        axios.get(COURSE_BASE_REST_API_URL).then((response) => {
            setCourse(response.data);
            console.log(response.data);
        }).catch((error) => {
            console.log(error);
        });
    }, []); // Chạy một lần khi component được mount

    return (
        <div className="container">
            <h2 className="text-center">List Course</h2>
            <Link to="/add-course" className="btn btn-primary mb-2"> Add Course</Link>
            <table className="table table-bordered table-striped">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Course Code</th>
                        <th>Course Name</th>
                        <th>Start Date</th>
                        <th>End Date</th>
                        <th>Total Student</th>
                        <th>Session</th>
                        <th>Topic</th>
                    </tr>
                </thead>
                <tbody>
                    {course.map((course) => (
                        <tr key={course.id}>
                            <td>{course.id}</td>
                            <td>{course.courseCode}</td>
                            <td>{course.courseName}</td>
                            <td>{course.startDate}</td>
                            <td>{course.endDate}</td>
                            <td>{course.totalStudent}</td>
                            <td>{course.session ? course.session.sessionName : 'N/A'}</td>
                            <td>{course.topics ? course.topics.topicsName : 'N/A'}</td>
                        </tr>
                    ))}

                </tbody>
            </table>
        </div>
    );
};

export default ListCourseComponent;
