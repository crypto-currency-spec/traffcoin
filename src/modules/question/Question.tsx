import React, { useState } from "react";
import cn from "classnames";

interface Props {
  question: string;
  answer: string;
}

export const Question: React.FC<Props> = ({ question, answer }) => {
  const [isAnswerVisible, setIsAnswerVisible] = useState(false);

  const handleClick = () => {
    setIsAnswerVisible(!isAnswerVisible);
  };

  return (
    <div className="option">
      <div className="question" onClick={handleClick}>
        <div
          className={cn("question__arrow", {
            'turned': isAnswerVisible,
          })}
        />

        <p className="question__text">{question}</p>
      </div>

      {isAnswerVisible && <p className="answer">{answer}</p>}
    </div>
  );
};
