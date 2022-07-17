import "./App.css";
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import IsTriangle from "./Pages/IsTriangle";
import Quiz from "./Pages/Quiz";
import Hypotenuse from "./Pages/Hypotenuse";
import Area from "./Pages/Area";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<IsTriangle />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/hypotenuse" element={<Hypotenuse />} />
          <Route path="/area" element={<Area />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
