import axios from 'axios';

const COURSE_BASE_REST_API_URL = 'http://localhost:8080/api/course';

class courseServices {
    getAllCourse() {
        return axios.get(COURSE_BASE_REST_API_URL);
    }

    createCourse(course) {
        return axios.post(COURSE_BASE_REST_API_URL, course);
    }
}

export default new courseServices(); // Sửa lại thành 'courseServices'
