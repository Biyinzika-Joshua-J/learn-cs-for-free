
import { Routes, Route } from "react-router";
import { Navbar, Footer } from "./components";
import { Home, CourseDetails } from "./pages";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun } from "@fortawesome/free-regular-svg-icons";
import { useDispatch, useSelector } from "react-redux";


function App() {
  const mode = useSelector(state => state.theme.mode)
 
  return (
    <div className={`${mode} flex flex-col min-h-screen`}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course" element={<CourseDetails />} />
        <Route path="/about" element={<div><FontAwesomeIcon icon={faSun} size="lg" style={{color:'yellow'}}/></div>} />
        <Route path="/courses" element={<div>Courses</div>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
