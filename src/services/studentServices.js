import axios from 'axios'

const STUDENT_BASE_REST_API_URL = 'http://localhost:8080/api/v1/student'

class studentServices {
    getAllStudent(){
        return axios.get(STUDENT_BASE_REST_API_URL)
    }
    createStudent(student){
        return axios.post(STUDENT_BASE_REST_API_URL, student)
    }
}
export default new studentServices();