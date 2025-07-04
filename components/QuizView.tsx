
import React, { useState, useEffect, useCallback } from 'react';
import { getQuizData } from '../services/geminiService.ts';
import { Quiz, Question } from '../types.ts';
import Spinner from './Spinner.tsx';

interface QuizViewProps {
  quizId: string;
  onFinish: () => void;
}

const QuizView: React.FC<QuizViewProps> = ({ quizId, onFinish }) => {
  const [quizData, setQuizData] = useState<Quiz | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  const fetchQuiz = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const data = await getQuizData(quizId);
      setQuizData(data);
    } catch (err) {
      setError((err as Error).message || 'Gagal memuat kuis.');
    } finally {
      setIsLoading(false);
    }
  }, [quizId]);

  useEffect(() => {
    fetchQuiz();
  }, [fetchQuiz]);

  const handleAnswerSelect = (index: number) => {
    if (isAnswered) return;
    setSelectedAnswer(index);
    setIsAnswered(true);
    if (index === quizData?.questions[currentQuestionIndex].correctAnswerIndex) {
      setScore(s => s + 1);
    }
  };

  const handleNext = () => {
    if (currentQuestionIndex < (quizData?.questions.length ?? 0) - 1) {
      setCurrentQuestionIndex(i => i + 1);
      setIsAnswered(false);
      setSelectedAnswer(null);
    } else {
      setIsFinished(true);
    }
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-[calc(100vh-10rem)]">
        <Spinner />
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full max-w-2xl mx-auto p-4 md:p-6 text-center text-red-500">
        <p>{error}</p>
        <button onClick={fetchQuiz} className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">Coba Lagi</button>
      </div>
    );
  }

  if (!quizData) {
    return <div className="text-center p-8">Kuis tidak ditemukan.</div>;
  }
  
  const currentQuestion = quizData.questions[currentQuestionIndex];
  
  if (isFinished) {
    const totalQuestions = quizData.questions.length;
    const percentage = Math.round((score / totalQuestions) * 100);
    return (
       <div className="w-full max-w-2xl mx-auto p-4 md:p-8 animate-fade-in text-center">
            <div className="bg-white rounded-xl shadow-2xl p-8">
                <h2 className="text-2xl font-bold text-slate-800 mb-2">Kuis Selesai!</h2>
                <p className="text-slate-600 mb-6">Anda telah menyelesaikan kuis tentang "{quizData.title}".</p>
                <div className="mb-6">
                    <p className="text-lg text-slate-700">Skor Anda:</p>
                    <p className="text-5xl font-extrabold text-blue-600 my-2">{percentage}%</p>
                    <p className="text-slate-600">Anda menjawab dengan benar {score} dari {totalQuestions} pertanyaan.</p>
                </div>
                <button 
                    onClick={onFinish}
                    className="w-full bg-blue-600 text-white font-semibold py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors"
                >
                    Kembali ke Modul
                </button>
            </div>
        </div>
    )
  }

  return (
    <div className="w-full max-w-2xl mx-auto p-4 md:p-6 animate-fade-in">
        <div className="bg-white rounded-xl shadow-lg">
            <header className="p-6 border-b border-slate-200">
                <h1 className="text-xl md:text-2xl font-bold text-slate-800">{quizData.title}</h1>
                <p className="text-slate-500 text-sm mt-1">Pertanyaan {currentQuestionIndex + 1} dari {quizData.questions.length}</p>
                <div className="w-full bg-slate-200 rounded-full h-2.5 mt-4">
                    <div 
                        className="bg-blue-600 h-2.5 rounded-full transition-all duration-500" 
                        style={{ width: `${((currentQuestionIndex + 1) / quizData.questions.length) * 100}%` }}>
                    </div>
                </div>
            </header>
            <main className="p-6">
                <h2 className="text-lg font-semibold text-slate-700 leading-relaxed mb-6">{currentQuestion.question}</h2>
                <div className="flex flex-col gap-3">
                    {currentQuestion.options.map((option, index) => {
                        const isCorrect = index === currentQuestion.correctAnswerIndex;
                        let buttonClass = 'border-slate-300 bg-white hover:bg-slate-50';

                        if(isAnswered) {
                            if (isCorrect) {
                                buttonClass = 'border-green-500 bg-green-100 text-green-800 font-semibold';
                            } else if (selectedAnswer === index) {
                                buttonClass = 'border-red-500 bg-red-100 text-red-800 font-semibold';
                            } else {
                                buttonClass = 'border-slate-200 bg-slate-50 text-slate-500';
                            }
                        }

                        return (
                             <button
                                key={index}
                                onClick={() => handleAnswerSelect(index)}
                                disabled={isAnswered}
                                className={`w-full text-left p-4 rounded-lg border-2 transition-all duration-200 text-slate-800 ${buttonClass} disabled:cursor-not-allowed`}
                            >
                                {option}
                            </button>
                        )
                    })}
                </div>

                {isAnswered && (
                     <div className="mt-6 p-4 rounded-lg bg-slate-100 animate-fade-in-fast">
                        <p className="text-sm text-slate-700">{currentQuestion.explanation}</p>
                    </div>
                )}
            </main>
            <footer className="p-6">
                 {isAnswered && (
                    <button 
                        onClick={handleNext}
                        className="w-full bg-blue-600 text-white font-semibold py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors animate-fade-in"
                    >
                        {currentQuestionIndex < quizData.questions.length - 1 ? 'Lanjut' : 'Lihat Hasil'}
                    </button>
                 )}
            </footer>
        </div>
    </div>
  );
};

export default QuizView;
