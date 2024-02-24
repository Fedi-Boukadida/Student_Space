import "./App.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Log from "./components/log.jsx";
import StudentSection from "./components/Student.jsx";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route element={<Log />} /> {/* This route will be the default */}
          <Route path="/login" element={<Log />} />
          <Route path="/student" element={<StudentSection />} />
          {/* Add more routes as needed */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
