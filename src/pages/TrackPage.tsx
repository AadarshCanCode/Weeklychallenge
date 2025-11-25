import { RegisteredChallenges } from "@/components/RegisteredChallenges";
import { ProgressTracker } from "@/components/ProgressTracker";


const Track = () => {
  return <div className="min-h-screen">
      <ProgressTracker />
      <RegisteredChallenges />
    </div>;
};

export default Track;