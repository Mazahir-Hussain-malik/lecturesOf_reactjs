import Home from "./Pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Counter from "./Pages/Counter";
import ExpansePage from "./Pages/ExpansePage";
import Apipage from "./Pages/Apipage";

const App = () => {
  return (
    <BrowserRouter>
      <div className="bg-blue-900 text-[#fff]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/counterapp" element={<Counter />} />
          <Route path="/expanse" element={<ExpansePage />} />
          <Route path="/api" element={<Apipage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
