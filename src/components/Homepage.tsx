import { useContext } from "react";
import { ThemeContext } from "../App";
import darkSvg from "../assets/darkSvg.svg";
import lightSvg from "../assets/lightSvg.svg";

const Homepage = () => {
  const themeContext = useContext(ThemeContext);

  if (!themeContext) {
    throw new Error("ThemeContext not found!");
  }

  const { theme } = themeContext;

  return (
    <div className="flex flex-col justify-center items-center">
      <span
        className={
          theme === "dark"
            ? "text-[12rem] text-orange-400 -mt-96 font-Jersey font-normal not-italic"
            : "text-[12rem] text-gray-700 -mt-96 font-Jersey font-normal not-italic"
        }
      >
        W e l c o m e.
      </span>
      <div className="flex justify-end absolute bottom-0 right-0 -z-10 opacity-75">
        <img
          className="w-full h-auto object-contain"
          src={theme === "dark" ? darkSvg : lightSvg}
          alt="Logo"
        />
      </div>
    </div>
  );
};

export default Homepage;
