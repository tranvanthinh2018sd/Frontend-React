import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddCourseComponent = () => {
    const [courseCode, setCourseCode] = useState('');
    const [courseName, setCourseName] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [totalStudent, setTotalStudent] = useState('');
    const [sessionId, setSessionId] = useState('');
    const [topicId, setTopicId] = useState('');
    const [sessions, setSessions] = useState([]);
    const [topics, setTopics] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        // Fetch sessions
        axios.get('http://localhost:8080/api/session') // Đổi URL cho phù hợp
            .then(response => {
                setSessions(response.data);
            })
            .catch(error => {
                console.error('Error fetching sessions:', error);
            });

        // Fetch topics
        axios.get('http://localhost:8080/api/topics') // Đổi URL cho phù hợp
            .then(response => {
                setTopics(response.data);
            })
            .catch(error => {
                console.error('Error fetching topics:', error);
            });
    }, []);

    const handleSubmit = (event) => {
        event.preventDefault();

        const courseData = {
            courseCode,
            courseName,
            startDate,
            endDate,
            totalStudent,
            session: { id: sessionId }, // Tạo đối tượng session
            topics: { id: topicId } // Tạo đối tượng topics
        };

        axios.post('http://localhost:8080/api/course', courseData)
            .then(response => {
                console.log('Course added:', response.data);
                navigate('/courses'); // Chuyển hướng đến danh sách khóa học
            })
            .catch(error => {
                console.error('Error adding course:', error);
            });
    };

    return (
        <div className="container">
            <h2 className="text-center">Add Course</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Course Code:</label>
                    <input
                        type="text"
                        className="form-control"
                        value={courseCode}
                        onChange={(e) => setCourseCode(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Course Name:</label>
                    <input
                        type="text"
                        className="form-control"
                        value={courseName}
                        onChange={(e) => setCourseName(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Start Date:</label>
                    <input
                        type="date"
                        className="form-control"
                        value={startDate}
                        onChange={(e) => setStartDate(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>End Date:</label>
                    <input
                        type="date"
                        className="form-control"
                        value={endDate}
                        onChange={(e) => setEndDate(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Total Student:</label>
                    <input
                        type="number"
                        className="form-control"
                        value={totalStudent}
                        onChange={(e) => setTotalStudent(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Session:</label>
                    <select
                        className="form-control"
                        value={sessionId}
                        onChange={(e) => setSessionId(e.target.value)}
                        required
                    >
                        <option value="">Select Session</option>
                        {sessions.map((session) => (
                            <option key={session.id} value={session.id}>
                                {session.sessionName}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="form-group">
                    <label>Topic:</label>
                    <select
                        className="form-control"
                        value={topicId}
                        onChange={(e) => setTopicId(e.target.value)}
                        required
                    >
                        <option value="">Select Topic</option>
                        {topics.map((topic) => (
                            <option key={topic.id} value={topic.id}>
                                {topic.topicsName}
                            </option>
                        ))}
                    </select>
                </div>
                <button type="submit" className="btn btn-success">Add Course</button>
            </form>
        </div>
    );
};

export default AddCourseComponent;
