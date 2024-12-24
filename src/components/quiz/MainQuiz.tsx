import { createContext, useState, useContext } from "react";
import Menu from "./Menu";
import Quiz from "./Quiz";
import Score from "./Score";
import { ThemeContext } from "../../App";
import "./quiz.css"
interface DataContext {
  // Define your context properties here
  appState: string;
  setAppState: React.Dispatch<React.SetStateAction<string>>;
  score: number;
  setScore: React.Dispatch<React.SetStateAction<number>>;
}

export const QuizContext = createContext<DataContext | null>(null);

const MainQuiz = () => {
  const [appState, setAppState] = useState("menu");
  const [score, setScore] = useState(0);

  const themeContext = useContext(ThemeContext);

  if (!themeContext) {
    throw new Error("ThemeContext not found!");
  }

  const { theme } = themeContext;
  return (
    <QuizContext.Provider value={{ appState, setAppState, score, setScore }}>
      <div
        className={
          theme === "dark"
            ? "bg-light text-white size-3/4 flex flex-col justify-start items-center "
            : "bg-dark text-black size-3/4 flex flex-col justify-start items-center "
        }
      >
        <div className="flex flex-col h-full items-center">
          <span className="text-xl mt-16 mb-10">Web Development Quiz</span>
          {appState === "menu" && <Menu />}
          {appState === "quiz" && <Quiz />}
          {appState === "score" && <Score />}
        </div>
      </div>
    </QuizContext.Provider>
  );
};

export default MainQuiz;
