import React, { useState, useEffect } from 'react';
import { BarChart3, Target, Trophy, TrendingUp, CheckCircle2, XCircle, Circle, BarChart2 } from 'lucide-react';

interface Question {
  id: number;
  question: string;
  yourAnswer: string;
  correctAnswer: string;
  isCorrect: boolean;
}

interface Round {
  id: number;
  name: string;
  correct: number;
  wrong: number;
  unattempted: number;
  total: number;
  questions: Question[];
}

interface FeedbackData {
  userName: string;
  userEmail: string;
  contestName: string;
  week: number;
  date: string;
  timeRange: string;
  totalTime: string;
  score: number;
  maxScore: number;
  accuracy: number;
  rank: number;
  maxRank: number;
  percentile: number;
  rounds: Round[];
}

const dummyData: FeedbackData = {
  userName: "Rahul Sharma",
  userEmail: "rahul.sharma@example.com",
  contestName: "Weekly DSA Contest",
  week: 12,
  date: "December 5, 2025",
  timeRange: "10:00 AM - 12:30 AM",
  totalTime: "1h 28m",
  score: 285,
  maxScore: 500,
  accuracy: 92,
  rank: 42,
  maxRank: 1500,
  percentile: 96.6,
  rounds: [
    {
      id: 1,
      name: "Round 1",
      correct: 17,
      wrong: 1,
      unattempted: 0,
      total: 20,
      questions: [
        {
          id: 1,
          question: "Q1. What is the time complexity of binary search in a sorted array?",
          yourAnswer: "O(log n)",
          correctAnswer: "O(log n)",
          isCorrect: true
        },
        {
          id: 2,
          question: "Q2. Which data structure uses LIFO (Last In First Out) principle?",
          yourAnswer: "Stack",
          correctAnswer: "Stack",
          isCorrect: true
        },
        {
          id: 3,
          question: "Q3. What is the worst-case time complexity of QuickSort?",
          yourAnswer: "O(n log n)",
          correctAnswer: "O(n²)",
          isCorrect: false
        },
        {
          id: 4,
          question: "Q4. In a binary tree, what is the maximum number of nodes at level L?",
          yourAnswer: "2^L",
          correctAnswer: "2^L",
          isCorrect: true
        },
        {
          id: 5,
          question: "Q5. What is the space complexity of depth-first search (DFS) in a graph?",
          yourAnswer: "O(V)",
          correctAnswer: "O(V)",
          isCorrect: true
        },
        {
          id: 6,
          question: "Q6. Which sorting algorithm has the best average-case time complexity?",
          yourAnswer: "Bubble Sort",
          correctAnswer: "Merge Sort",
          isCorrect: false
        },
        {
          id: 7,
          question: "Q7. What is the time complexity of accessing an element in an array?",
          yourAnswer: "O(1)",
          correctAnswer: "O(1)",
          isCorrect: true
        },
        {
          id: 8,
          question: "Q8. In a hash table, what happens when two keys hash to the same index?",
          yourAnswer: "Collision",
          correctAnswer: "Collision",
          isCorrect: true
        },
        {
          id: 9,
          question: "Q9. What is the minimum number of nodes in a complete binary tree of height h?",
          yourAnswer: "2^h",
          correctAnswer: "2^h",
          isCorrect: true
        },
        {
          id: 10,
          question: "Q10. Which data structure is used to implement recursion?",
          yourAnswer: "Queue",
          correctAnswer: "Stack",
          isCorrect: false
        }
      ]
    },
    {
      id: 2,
      name: "Round 2",
      correct: 12,
      wrong: 3,
      unattempted: 2,
      total: 20,
      questions: [
        {
          id: 1,
          question: "Q1. What is the space complexity of merge sort?",
          yourAnswer: "O(n)",
          correctAnswer: "O(n)",
          isCorrect: true
        },
        {
          id: 2,
          question: "Q2. Which algorithm is used for finding shortest path in weighted graphs?",
          yourAnswer: "BFS",
          correctAnswer: "Dijkstra's Algorithm",
          isCorrect: false
        },
        {
          id: 3,
          question: "Q3. What is the time complexity of inserting an element in a hash table?",
          yourAnswer: "O(1)",
          correctAnswer: "O(1)",
          isCorrect: true
        }
      ]
    }
  ]
};

export default function FeedbackComp() {
  const [selectedRound, setSelectedRound] = useState(0);
  const [questionPage, setQuestionPage] = useState(0);
  const QUESTIONS_PER_PAGE = 5;
  const data = dummyData;
  const currentRound = data.rounds[selectedRound];

  useEffect(() => {
    setQuestionPage(0);
  }, [selectedRound]);

  return (
    <div className="min-h-screen transition-colors duration-300 ">

      <div className="container mx-auto max-w-6xl px-4 py-12">
        {/* Header Card */}
        <div className="rounded-2xl p-8 mb-8 transition-colors bg-white shadow-lg dark:bg-gray-800">
          <div className="flex items-start justify-between mb-6">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full flex items-center justify-center text-xl font-bold bg-blue-500 dark:bg-blue-600 text-white">
                {data.userName.split(' ').map(n => n[0]).join('')}
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {data.userName}
                </h1>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {data.userEmail}
                </p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {data.date}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {data.timeRange}
              </p>
              <p className="text-sm font-medium text-blue-600 dark:text-blue-400">
                Total Time: {data.totalTime}
              </p>
            </div>
          </div>
          
          <div className="text-lg font-semibold mb-2 text-gray-700 dark:text-gray-300">
            {data.contestName} - Week {data.week}
          </div>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          {/* Score */}
          <div className="rounded-xl p-6 transition-all hover:scale-105 bg-white shadow-md dark:bg-gray-800">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                Score
              </span>
              <Trophy className="w-5 h-5 text-blue-500 dark:text-blue-400" />
            </div>
            <div className="text-3xl font-bold text-gray-900 dark:text-white">
              {data.score}
              <span className="text-lg text-gray-400 dark:text-gray-500">
                /{data.maxScore}
              </span>
            </div>
          </div>

          {/* Accuracy */}
          <div className="rounded-xl p-6 transition-all hover:scale-105 bg-white shadow-md dark:bg-gray-800">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                Accuracy
              </span>
              <Target className="w-5 h-5 text-blue-500 dark:text-blue-400" />
            </div>
            <div className="text-3xl font-bold text-gray-900 dark:text-white">
              {data.accuracy}%
            </div>
          </div>

          {/* Rank */}
          <div className="rounded-xl p-6 transition-all hover:scale-105 bg-white shadow-md dark:bg-gray-800">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                Rank
              </span>
              <BarChart3 className="w-5 h-5 text-blue-500 dark:text-blue-400" />
            </div>
            <div className="text-3xl font-bold text-gray-900 dark:text-white">
              {data.rank}
              <span className="text-lg text-gray-400 dark:text-gray-500">
                /{data.maxRank}
              </span>
            </div>
          </div>

          {/* Percentile */}
          <div className="rounded-xl p-6 transition-all hover:scale-105 bg-white shadow-md dark:bg-gray-800">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                Percentile
              </span>
              <TrendingUp className="w-5 h-5 text-blue-500 dark:text-blue-400" />
            </div>
            <div className="text-3xl font-bold text-gray-900 dark:text-white">
              {data.percentile}
              <span className="text-lg text-gray-400 dark:text-gray-500">
                th
              </span>
            </div>
          </div>
        </div>

        {/* Result Analysis */}
        <div className="rounded-2xl p-8 mb-8 bg-white shadow-lg dark:bg-gray-800">
          <div className="flex items-center gap-3 mb-6">
            <BarChart2 className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              Result Analysis
            </h2>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Review your answers from each round
          </p>

          {/* Round Tabs */}
          <div className="flex gap-2 mt-6 mb-8 flex-wrap">
            {data.rounds.map((round, idx) => (
              <button
                key={round.id}
                onClick={() => setSelectedRound(idx)}
                className={`px-6 py-2.5 rounded-full font-medium transition-all ${selectedRound === idx ? 'bg-blue-500 dark:bg-blue-600 text-white shadow-lg' : 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600'}`}
              >
                {round.name}
              </button>
            ))}
          </div>

          {/* Round Stats */}
          <div className="grid grid-cols-4 gap-4 mb-8">
            <div className="rounded-xl p-4 bg-green-50 dark:bg-green-900/30">
              <div className="flex items-center gap-2 mb-2">
                <CheckCircle2 className="w-5 h-5 text-green-600" />
                <span className="text-sm font-medium text-green-700 dark:text-green-400">
                  Correct
                </span>
              </div>
              <div className="text-2xl font-bold text-green-700 dark:text-green-400">
                {currentRound.correct}
              </div>
            </div>
            <div className="rounded-xl p-4 bg-red-50 dark:bg-red-900/30">
              <div className="flex items-center gap-2 mb-2">
                <XCircle className="w-5 h-5 text-red-600" />
                <span className="text-sm font-medium text-red-700 dark:text-red-400">
                  Wrong
                </span>
              </div>
              <div className="text-2xl font-bold text-red-700 dark:text-red-400">
                {currentRound.wrong}
              </div>
            </div>
            <div className="rounded-xl p-4 bg-gray-100 dark:bg-gray-700">
              <div className="flex items-center gap-2 mb-2">
                <Circle className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
                  Unattempted
                </span>
              </div>
              <div className="text-2xl font-bold text-gray-700 dark:text-gray-300">
                {currentRound.unattempted}
              </div>
            </div>
            <div className="rounded-xl p-4 bg-blue-50 dark:bg-blue-900/30">
              <div className="flex items-center gap-2 mb-2">
                <BarChart2 className="w-5 h-5 text-blue-600" />
                <span className="text-sm font-medium text-blue-700 dark:text-blue-400">
                  Total Questions
                </span>
              </div>
              <div className="text-2xl font-bold text-blue-700 dark:text-blue-400">
                {currentRound.total}
              </div>
            </div>
          </div>
        </div>

        {/* Detailed Analysis */}
        <div className="rounded-2xl p-8 bg-white shadow-lg dark:bg-gray-800">
          <div className="flex items-center gap-3 mb-6">
            <BarChart2 className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              Detailed Analysis
            </h2>
          </div>
          <p className="text-sm mb-8 text-gray-600 dark:text-gray-400">
            Review your answers from each round
          </p>

          {/* Questions (paginated) */}
          <div className="space-y-4">
            {(() => {
              const start = questionPage * QUESTIONS_PER_PAGE;
              const paged = currentRound.questions.slice(start, start + QUESTIONS_PER_PAGE);
              return paged.map((q) => (
                <div
                  key={q.id}
                  className={`rounded-xl p-6 border-l-4 transition-all ${q.isCorrect ? 'bg-green-50 border-green-500 dark:bg-green-900/20' : 'bg-red-50 border-red-500 dark:bg-red-900/20'}`}
                >
                  <div className="flex items-start gap-3">
                    <div className={`mt-1 ${q.isCorrect ? 'text-green-600' : 'text-red-600'}`}>
                      {q.isCorrect ? (
                        <CheckCircle2 className="w-6 h-6" />
                      ) : (
                        <XCircle className="w-6 h-6" />
                      )}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold mb-4 text-gray-900 dark:text-white">
                        {q.question}
                      </h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <p className="text-xs font-medium mb-2 text-gray-500 dark:text-gray-400">
                            Your Answer
                          </p>
                          <p className="font-medium text-gray-800 dark:text-gray-200">
                            {q.yourAnswer}
                          </p>
                        </div>
                        <div>
                          <p className="text-xs font-medium mb-2 text-gray-500 dark:text-gray-400">
                            Correct Answer
                          </p>
                          <p className="font-medium text-gray-800 dark:text-gray-200">
                            {q.correctAnswer}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ));
            })()}
          </div>

          {/* Pagination Controls */}
          <div className="flex items-center justify-between mt-4">
            <div className="text-sm text-gray-600 dark:text-gray-400">
              Showing {Math.min(currentRound.questions.length, questionPage * QUESTIONS_PER_PAGE + 1)} - {Math.min(currentRound.questions.length, (questionPage + 1) * QUESTIONS_PER_PAGE)} of {currentRound.questions.length}
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => setQuestionPage((p) => Math.max(0, p - 1))}
                disabled={questionPage === 0}
                className={`px-4 py-2 rounded-md font-medium transition ${questionPage === 0 ? 'bg-gray-100 text-gray-400 dark:bg-gray-800 dark:text-gray-500 cursor-not-allowed' : 'bg-white text-gray-700 shadow-sm dark:bg-gray-700 dark:text-gray-200'}`}
              >
                Prev
              </button>
              <button
                onClick={() => {
                  const totalPages = Math.ceil(currentRound.questions.length / QUESTIONS_PER_PAGE);
                  setQuestionPage((p) => Math.min(totalPages - 1, p + 1));
                }}
                disabled={(questionPage + 1) * QUESTIONS_PER_PAGE >= currentRound.questions.length}
                className={`px-4 py-2 rounded-md font-medium transition ${((questionPage + 1) * QUESTIONS_PER_PAGE >= currentRound.questions.length) ? 'bg-gray-100 text-gray-400 dark:bg-gray-800 dark:text-gray-500 cursor-not-allowed' : 'bg-blue-500 text-white shadow-sm dark:bg-blue-600'}`}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}