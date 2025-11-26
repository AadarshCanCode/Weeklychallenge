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
];

export function RegisteredChallenges() {
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
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-slide-up">
          {challenges.map((challenge) => (
            <RegisteredChallengesCard key={challenge.id} challenge={challenge} />
          ))}
        </div>
      </div>
    </section>
  );
}
