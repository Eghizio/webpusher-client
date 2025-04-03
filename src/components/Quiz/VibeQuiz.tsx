import React, { useState } from "react";
// import reactQuestions from "./questions/react.json";
import webpushQuestions from "./questions/webpush.json";

const questions = webpushQuestions; // Todo: Do not upload questions yet. Upload them before the event.

interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
}

interface QuizResults {
  success: boolean;
  score?: number;
  total?: number;
  message?: string;
}

interface QuestionProps {
  questionNumber: number;
  questionData: Question;
  selectedAnswer: number | null;
  onSelectAnswer: (answerIndex: number) => void;
}

interface ResultScreenProps {
  result: QuizResults;
  onReset: () => void;
}

export const VibeQuiz = () => {
  const [userAnswers, setUserAnswers] = useState<(number | null)[]>(
    Array(questions.length).fill(null)
  );
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitResult, setSubmitResult] = useState<QuizResults | null>(null);

  // Handle answer selection
  const handleAnswerSelect = (
    questionIndex: number,
    answerIndex: number
  ): void => {
    const newAnswers = [...userAnswers];
    newAnswers[questionIndex] = answerIndex;
    setUserAnswers(newAnswers);
  };

  // Calculate score
  const calculateScore = (): number => {
    return userAnswers.reduce<number>((score, answer, index) => {
      return answer === questions[index].correctAnswer ? score + 1 : score;
    }, 0);
  };

  // Submit answers to server
  const submitAnswers = async (): Promise<void> => {
    setIsSubmitting(true);

    try {
      // Mock API call - replace with actual API endpoint
      const response: QuizResults = await new Promise((resolve) => {
        setTimeout(() => {
          resolve({
            success: true,
            score: calculateScore(),
            total: questions.length,
          });
        }, 1_000);
      });

      setSubmitResult(response);
    } catch (error) {
      setSubmitResult({
        success: false,
        message: "Failed to submit quiz. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Reset quiz
  const resetQuiz = (): void => {
    setUserAnswers(Array(questions.length).fill(null));
    setSubmitResult(null);
  };

  // Check if all questions are answered
  const allQuestionsAnswered: boolean = userAnswers.every(
    (answer) => answer !== null
  );

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {/* <header className="bg-blue-600 text-white p-4 text-center sticky top-0 z-10">
        <h1 className="text-xl font-bold">React Quiz App</h1>
      </header> */}

      <main className="flex-1 p-4">
        {!submitResult ? (
          <>
            <div className="space-y-6 mb-6">
              {questions.map((questionData, questionIndex) => (
                <Question
                  key={questionData.id}
                  questionNumber={questionIndex + 1}
                  questionData={questionData}
                  selectedAnswer={userAnswers[questionIndex]}
                  onSelectAnswer={(answerIndex) =>
                    handleAnswerSelect(questionIndex, answerIndex)
                  }
                />
              ))}
            </div>

            <div className="sticky bottom-0 bg-white p-4 border-t">
              <button
                onClick={submitAnswers}
                disabled={isSubmitting || !allQuestionsAnswered}
                className="w-full py-3 bg-blue-600 text-white rounded-lg font-medium disabled:bg-blue-300"
              >
                {isSubmitting ? "Submitting..." : "Submit Answers"}
              </button>

              {!allQuestionsAnswered && (
                <p className="text-amber-600 text-center mt-2 text-sm">
                  Please answer all questions before submitting
                </p>
              )}
            </div>
          </>
        ) : (
          <ResultScreen result={submitResult} onReset={resetQuiz} />
        )}
      </main>
    </div>
  );
};

const mark = ["A.", "B.", "C.", "D."];
// Question Component
const Question: React.FC<QuestionProps> = ({
  questionNumber,
  questionData,
  selectedAnswer,
  onSelectAnswer,
}) => {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-lg font-semibold mb-4">
        <span className="bg-blue-600 text-white rounded-full w-6 h-6 inline-flex items-center justify-center mr-2">
          {questionNumber}
        </span>
        {questionData.question}
      </h2>
      <div className="space-y-3">
        {questionData.options.map((option, index) => (
          <div
            key={index}
            onClick={() => onSelectAnswer(index)}
            className={`p-3 border rounded-lg cursor-pointer transition-colors ${
              selectedAnswer === index
                ? "bg-blue-100 border-blue-500"
                : "hover:bg-gray-50"
            }`}
          >
            {mark[index]} {option}
          </div>
        ))}
      </div>
    </div>
  );
};

// Results Screen Component
const ResultScreen: React.FC<ResultScreenProps> = ({ result, onReset }) => {
  return (
    <div className="bg-white rounded-lg shadow p-6 text-center">
      <h2 className="text-xl font-bold mb-4">Quiz Results</h2>

      {result.success ? (
        <div>
          <div className="text-4xl font-bold mb-2">
            {result.score} / {result.total}
          </div>
          <p className="mb-4">
            You scored{" "}
            {Math.round(((result.score || 0) / (result.total || 1)) * 100)}%
          </p>
        </div>
      ) : (
        <div className="text-red-500 mb-4">{result.message}</div>
      )}

      <button
        onClick={onReset}
        className="px-4 py-2 bg-blue-600 text-white rounded-lg font-medium"
      >
        Take Quiz Again
      </button>
    </div>
  );
};
