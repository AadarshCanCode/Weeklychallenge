import React, { useState } from "react";
import { Plus } from "lucide-react";

const faqs = [
  {
    question: "What is DSA Sprint?",
    answer: "DSA Sprint is an online coding and placement-style challenge designed to help students practice and experience real-world recruitment rounds - from online assessments to coding tests and AI interviews.",
  },
  {
    question: "What are the event stages?",
    answer: "There are 3 stages in total:\n\nOnline Assessment: Aptitude + Technical MCQs\nCoding Test: 4 problem-solving questions\nAI Interview Simulation: Interactive AI-based mock interview\n\nEach stage replicates real hiring challenges faced by candidates during placement drives.",
  },
  {
    question: "Who can participate?",
    answer: "Any student interested in improving their technical and placement readiness can participate - especially those pursuing B.Tech / B.E. / MCA or related programs.",
  },
  {
    question: "What is the mode of the event?",
    answer: "The entire event is conducted online.",
  },
  {
    question: "How are participants evaluated?",
    answer: "Participants are evaluated based on their performance in each stage, including speed, accuracy, problem-solving approach, and AI interview feedback.",
  },
];

const FAQ1 = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-4 pt-5">
      {faqs.map((faq, idx) => (
        <div
          key={idx}
          className="border-b border-border/50 overflow-hidden rounded-md bg-transparent transition-colors hover:bg-primary/5"
        >
          <button
            onClick={() => toggleFaq(idx)}
            className="w-full flex justify-between items-center py-3 cursor-pointer focus:outline-none px-2"
          >
            <span className="text-foreground font-medium text-[1.1rem] text-left">{faq.question}</span>
            <Plus
              className={`w-5 h-5 text-primary flex-shrink-0 transition-transform duration-300 ${
                openIndex === idx ? "rotate-45" : "rotate-0"
              }`}
            />
          </button>

          <div
            className={`text-muted-foreground text-[1rem] leading-relaxed transition-all duration-300 px-2 ${
              openIndex === idx ? "max-h-96 py-3 opacity-100" : "max-h-0 py-0 opacity-0"
            } whitespace-pre-line overflow-hidden`}
          >
            {faq.answer}
          </div>
        </div>
      ))}
    </div>
  );
};

export default FAQ1;