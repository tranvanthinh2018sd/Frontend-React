import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FooterComponents from './components/FooterComponents';
import HeaderComponents from './components/HeaderComponents';
import ListCourseComponent from './components/CourseComponents/ListCourseComponent';
import AddCourseComponent from './components/CourseComponents//AddCourseComponent';

function App() {
  return (
    <div>
      <Router>
        <HeaderComponents />
        <div className="container">
          <Routes>
            <Route path="/course" element={<ListCourseComponent />} />
            <Route path="/add-course" element={<AddCourseComponent />} />
          </Routes>
        </div>
        <FooterComponents />
      </Router>
    </div>
  );
}

export default App;
