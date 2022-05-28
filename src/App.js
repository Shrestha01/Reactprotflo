import { Route, Router, Routes } from "react-router-dom";

import Home from "./Home";
import About from "./About";
import Services from "./Services";
const App = () => {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
      </Routes>
    </div>
  );
};

export default App;
