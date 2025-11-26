import React, { useState } from "react";
import { RegisteredChallengesCard, Challenge } from "./RegisteredChallengesCard";

const challenges: Challenge[] = [
  {
    id: "1",
    title: "Algorithm Mastery",
    description: "Solve 5 advanced algorithm problems focusing on dynamic programming and graph theory.",
    difficulty: "Hard",
    points: 500,
    participants: 234,
    deadline: "3 days",
    category: "Algorithms",
    isActive: true,
    featured: true,
  },
  {
    id: "2",
    title: "React Component Sprint",
    description: "Build 3 reusable React components with TypeScript and comprehensive tests.",
    difficulty: "Medium",
    points: 300,
    participants: 456,
    deadline: "5 days",
    category: "Frontend",
    isActive: true,
  },
  {
    id: "3",
    title: "Code Review Master",
    description: "Review and improve 10 code submissions from other participants.",
    difficulty: "Easy",
    points: 150,
    participants: 678,
    deadline: "2 days",
    category: "Collaboration",
    isActive: true,
  },
  {
    id: "4",
    title: "API Design Challenge",
    description: "Design and implement a RESTful API with authentication and rate limiting.",
    difficulty: "Hard",
    points: 450,
    participants: 189,
    deadline: "7 days",
    category: "Backend",
    isActive: true,
  },
  {
    id: "5",
    title: "CSS Animation Wizard",
    description: "Create 5 stunning CSS animations without using JavaScript.",
    difficulty: "Medium",
    points: 250,
    participants: 523,
    deadline: "4 days",
    category: "Frontend",
    isActive: true,
  },
  {
    id: "6",
    title: "Database Optimization",
    description: "Optimize slow queries and improve database performance by 50%.",
    difficulty: "Hard",
    points: 400,
    participants: 145,
    deadline: "6 days",
    category: "Database",
    isActive: true,
    featured: true,
  },
  {
    id: "7",
    title: "Intro to Algorithms",
    description: "Solve 5 basic algorithm problems focusing on sorting and searching.",
    difficulty: "Easy",
    points: 200,
    participants: 890,
    deadline: "3 days",
    category: "Algorithms",
    isActive: false,
  },
];

export function RegisteredChallenges() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const statuses = ["Completed", "Ongoing", "Todo"];
  return (
    <section id="challenges" className="py-20 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center space-y-4 mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold">
            Registered <span className="gradient-text">Challenges</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Choose your challenge and start earning points. New challenges added every week!
          </p>
        </div>
        
        <div className="animate-slide-up overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="text-sm text-muted-foreground border-b border-border">
                <th className="py-3 px-4">C No.</th>
                <th className="py-3 px-4">C Name</th>
                <th className="py-3 px-4">C. Tag Line</th>
                <th className="py-3 px-4">Status</th>
                <th className="py-3 px-4">Points / Score</th>
                <th className="py-3 px-4">Registered At</th>
                <th className="py-3 px-4">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {challenges.map((challenge, idx) => {
                const status = statuses[idx % statuses.length];
                return (
                  <tr key={challenge.id} className="bg-card">
                    <td className="py-3 px-4 align-top text-sm">{idx + 1}</td>
                    <td className="py-3 px-4 align-top">
                      <div className="font-semibold">{challenge.title}</div>
                      <div className="text-xs text-muted-foreground">{challenge.category}</div>
                    </td>
                    <td className="py-3 px-4 align-top text-sm text-muted-foreground">{challenge.description}</td>
                    <td className="py-3 px-4 align-top">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${status === 'Completed' ? 'bg-green-100 text-green-700' : status === 'Ongoing' ? 'bg-yellow-100 text-yellow-700' : 'bg-gray-100 text-gray-700'}`}>
                        {status}
                      </span>
                    </td>
                    <td className="py-3 px-4 align-top text-sm">{challenge.points}</td>
                    <td className="py-3 px-4 align-top text-sm text-muted-foreground">{challenge.deadline}</td>
                    <td className="py-3 px-4 align-top text-sm">
                      <div className="relative inline-block">
                        <button
                          onClick={() => setOpenMenu(openMenu === challenge.id ? null : challenge.id)}
                          className="px-2 py-1 rounded-md hover:bg-muted transition"
                          aria-expanded={openMenu === challenge.id}
                        >
                          ⋮
                        </button>
                        {openMenu === challenge.id && (
                          <div className="absolute right-0 mt-2 w-48 bg-card border border-border rounded-md shadow-lg z-20">
                            <ul className="py-1">
                              <li>
                                <button className="w-full text-left px-4 py-2 text-sm hover:bg-muted">View Feedback</button>
                              </li>
                              <li>
                                <button className="w-full text-left px-4 py-2 text-sm hover:bg-muted">View Challenge</button>
                              </li>
                              <li>
                                <button className="w-full text-left px-4 py-2 text-sm hover:bg-muted">View Leaderboard</button>
                              </li>
                            </ul>
                          </div>
                        )}
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
