import { useContext, useEffect, useState } from "react";
import { QuizContext } from "./MainQuiz";
import QuestionsData from "./data/QuestionsData";

const Quiz = () => {
  const [current, setCurrent] = useState(0);
  const [selectChoice, setSelectChoice] = useState("");
  const quizContext = useContext(QuizContext);

  if (!quizContext) {
    throw new Error("ThemeContext not found!");
  }

  const { score, setScore, setAppState } = quizContext;

  useEffect(() => {
    checkAnswer();
  }, [selectChoice]);

  const checkAnswer = () => {
    if (selectChoice !== "") {
      if (selectChoice === QuestionsData[current].answer) {
        setScore(score + 1);
        nextQuestion();
      } else {
        nextQuestion();
      }
    }
  };

  const nextQuestion = () => {
    setSelectChoice("");
    if (current === QuestionsData.length - 1) {
      //0-4
      setAppState("score");
    } else {
      setCurrent(current + 1);
    }
  };
  return (
    <div className="flex flex-col items-center">
      <h1>{QuestionsData[current].question}</h1>
      <div className="flex flex-col">
        <button onClick={() => setSelectChoice("A")}>
          {QuestionsData[current].A}
        </button>
        <button onClick={() => setSelectChoice("B")}>
          {QuestionsData[current].B}
        </button>
        <button onClick={() => setSelectChoice("C")}>
          {QuestionsData[current].C}
        </button>
        <button onClick={() => setSelectChoice("D")}>
          {QuestionsData[current].D}
        </button>
      </div>
      <p>{`${current + 1} / ${QuestionsData.length}`}</p>
    </div>
  );
};

export default Quiz;
