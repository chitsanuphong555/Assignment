import { Routes, Route } from "react-router-dom";
import Homepage from "./components/Homepage";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="h-dvh bg-indigo-950 ">
      <Navbar />
      <div className="h-[100%-44px] flex justify-center items-center">
        <Routes>
          <Route path="/">
            <Route index element={<Homepage />} />
            {/* <Route path="about" element={<About />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="*" element={<NoMatch />} /> */}
          </Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
