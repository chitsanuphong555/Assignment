import { useContext } from "react";
import { QuizContext } from "./MainQuiz";

const Menu = () => {
  const dataContext = useContext(QuizContext);

  if (!dataContext) {
    throw new Error("ThemeContext not found!");
  }

  const { setAppState } = dataContext;
  return (
    <div className="flex flex-col justify-center items-center">
      <h1>แบบทดสอบก่อนเรียน</h1>
      <button onClick={() => setAppState("quiz")}>เริ่มทำแบบทดสอบ</button>
    </div>
  );
};

export default Menu;
