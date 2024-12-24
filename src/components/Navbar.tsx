import { useContext } from "react";
import { Link } from "react-router-dom";
import { Switch } from "antd";
import { ThemeContext } from "../App";
import Logo from "../assets/OGS01.png";

const Navbar = () => {
  const themeContext = useContext(ThemeContext);

  if (!themeContext) {
    throw new Error("ThemeContext not found!");
  }

  const { theme, setTheme } = themeContext;

  const toggleSwitch = () => {
    if (setTheme) {
      setTheme(theme === "light" ? "dark" : "light");
    }
  };
  return (
    <div
      className={
        theme === "dark"
          ? "h-16 bg-orange-400 flex justify-around items-center px-12 lg:px-56 absolute w-full"
          : "h-16 bg-gray-300 flex justify-around items-center px-12 lg:px-56 absolute w-full"
      }
    >
      <div className="logo">
        <Link to="/" className={theme === "dark" ? "text-white" : "text-black"}>
          <img src={Logo} alt="Logo" className="h-full w-28" />
        </Link>
      </div>
      <ul className="flex flex-row justify-around w-full">
        <li>
          <Link
            to="/quiz"
            className={theme === "dark" ? "text-white" : "text-black"}
          >
            Quiz
          </Link>
        </li>
        <li>
          <Link
            to="/dashboard"
            className={theme === "dark" ? "text-white" : "text-black"}
          >
            Portfolio
          </Link>
        </li>
        <li>
          <Link
            to="/dashboard"
            className={theme === "dark" ? "text-white" : "text-black"}
          >
            Dashboard Score
          </Link>
        </li>
      </ul>
      <div className="box-buttom-change-theme">
        <Switch
          defaultChecked={false}
          onChange={toggleSwitch}
          checked={theme === "dark"}
          className={
            theme === "dark"
              ? "!bg-orange-400 !outline-white !outline !outline-2 "
              : "!bg-white !outline-orange-400 !outline !outline-2"
          }
        />
        <span className={theme === "dark" ? "text-white" : "text-black"}>
          {theme === "dark" ? "light" : "dark"}
        </span>
      </div>
    </div>
  );
};

export default Navbar;
