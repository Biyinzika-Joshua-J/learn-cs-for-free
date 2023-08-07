
import { Routes, Route } from "react-router";
import { Navbar, Footer } from "./components";
import { Home, CourseDetails, Learn, Quizes, About, Quize, Courses } from "./pages";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun } from "@fortawesome/free-regular-svg-icons";
import { useDispatch, useSelector } from "react-redux";



function App() {
  const mode = useSelector(state => state.theme.mode)
 
  return (
    <div className={`${mode} flex flex-col min-h-screen relative`}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course/:id" element={<CourseDetails/>} /> {/*will take course id and return details*/}
        <Route path="/learn" element={<Learn/>} /> {/*returns an interface where a user does the actual learning*/}
        <Route path="/about" element={<About/>} />
        <Route path="/quizes" element={<Quizes/>} />
        <Route path="/quizes/:id" element={<Quize/>} />
        <Route path="/courses" element={<Courses/>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
