import { createContext, useState } from "react";
import Menu from "./Menu";
import Quiz from "./Quiz";
import Score from "./Score";


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
  return (
    <QuizContext.Provider value={{ appState, setAppState, score, setScore }}>
      <div className="bg-blue-400 size-2/4 flex flex-col justify-evenly items-center -mt-20">
        <h1>Web Development Quiz</h1>
        {appState === "menu" && <Menu />}
        {appState === "quiz" && <Quiz />}
        {appState === "score" && <Score />}
      </div>
    </QuizContext.Provider>
  );
};

export default MainQuiz;
