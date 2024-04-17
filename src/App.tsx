import { createContext, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "./components/Homepage";
import AllScore from "./components/AllScore";
import Navbar from "./components/Navbar";
import "./App.css";

interface ThemeContextType {
  // Define your context properties here
  theme: string;
  setTheme: React.Dispatch<React.SetStateAction<string>>;
}

export const ThemeContext = createContext<ThemeContextType | null>(null);

function App() {
  const [theme, setTheme] = useState("light");
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className="h-dvh ">
        <Navbar />
        <div className="h-full flex justify-center items-center">
          <Routes>
            <Route path="/">
              <Route index element={<Homepage />} />
              <Route path="dashboard" element={<AllScore />} />
              {/* <Route path="about" element={<About />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="*" element={<NoMatch />} /> */}
            </Route>
          </Routes>
        </div>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
