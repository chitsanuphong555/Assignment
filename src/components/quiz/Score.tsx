import { useContext, useEffect } from "react";
import { QuizContext } from "./MainQuiz";
import QuestionsData from "./data/QuestionsData";
import { useCookies } from "react-cookie";

const Score = () => {
  const quizContext = useContext(QuizContext);

  if (!quizContext) {
    throw new Error("ThemeContext not found!");
  }
  const [, setCookie] = useCookies(["all_score"]);
  const { score, setAppState, setScore } = quizContext;

  const restartApp = () => {
    setScore(0);
    setAppState("menu");
  };

  useEffect(() => {
    setCookie("all_score", score);
  }, [score]);

  return (
    <div className="flex flex-col justify-center items-center">
      <h1>สรุปผลคะแนนสอบ</h1>
      <h2>
        {score} / {QuestionsData.length}
      </h2>
      <button onClick={restartApp}>ทำแบบทดสอบอีกครั้ง</button>
    </div>
  );
};

export default Score;
