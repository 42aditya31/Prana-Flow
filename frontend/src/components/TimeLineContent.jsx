import React from "react";
// import Image from "next/image"; 
import { Timeline } from "./ui/timeline";
import { Cover } from './ui/cover';

const data = [
  {
    title: "Input Your Goals",
    content: (
      <div>
        <p className="text-neutral-800 dark:text-neutral-200 text-base md:text-lg font-medium mb-8">
          Everything begins with your vision. Define your goals, routines, and preferences to set the foundation for your habit-building journey. Whether it's adopting healthier eating habits, waking up early, or daily meditation, our AI is designed to understand and adapt to your unique lifestyle.
        </p>
        <div className="grid grid-cols-2 gap-4">
          <img
            src="/images/goals-1.webp"
            alt="Input goals interface"
            width={500}
            height={500}
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-md"
          />
          <img
            src="/images/goals-2.webp"
            alt="Personalized goals"
            width={500}
            height={500}
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-md"
          />
        </div>
      </div>
    ),
  },
  {
    title: "Analyze Your Behavior",
    content: (
      <div>
        <p className="text-neutral-800 dark:text-neutral-200 text-base md:text-lg font-medium mb-8">
          Our advanced AI goes beyond simple tracking—it observes and learns from your daily behavior. By identifying key patterns and gaps, it offers you targeted insights and practical ways to improve your habits and achieve your goals more efficiently.
        </p>
        <div className="grid grid-cols-2 gap-4">
          <img
            src="/images/analyze-1.webp"
            alt="Behavior analysis"
            width={500}
            height={500}
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-md"
          />
          <img
            src="/images/analyze-2.webp"
            alt="Pattern detection"
            width={500}
            height={500}
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-md"
          />
        </div>
      </div>
    ),
  },
  {
    title: "Personalized Predictions",
    content: (
      <div>
        <p className="text-neutral-800 dark:text-neutral-200 text-base md:text-lg font-medium mb-8">
          Unlock the power of personalization! Our AI crafts custom habit recommendations tailored to your lifestyle and goals. Whether it’s morning productivity hacks or fitness routines, every suggestion is designed to keep you on track and thriving.
        </p>
        <div className="grid grid-cols-2 gap-4">
          <img
            src="/images/predictions-1.webp"
            alt="AI predictions"
            width={500}
            height={500}
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-md"
          />
          <img
            src="/images/predictions-2.webp"
            alt="Tailored suggestions"
            width={500}
            height={500}
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-md"
          />
        </div>
      </div>
    ),
  },
  {
    title: "Build Consistency",
    content: (
      <div>
        <p className="text-neutral-800 dark:text-neutral-200 text-base md:text-lg font-medium mb-8">
          Consistency is the cornerstone of success. With habit streak trackers, motivational prompts, and clear visual progress, our platform ensures you stay committed to your goals and make measurable improvements every day.
        </p>
        <div className="grid grid-cols-2 gap-4">
          <img
            src="/images/consistency-1.webp"
            alt="Consistency tracker"
            width={500}
            height={500}
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-md"
          />
          <img
            src="/images/consistency-2.webp"
            alt="Habit streaks"
            width={500}
            height={500}
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-md"
          />
        </div>
      </div>
    ),
  },
  {
    title: "Reflect and Refine",
    content: (
      <div>
        <p className="text-neutral-800 dark:text-neutral-200 text-base md:text-lg font-medium mb-8">
          Growth is a continuous process. By reflecting on your progress and challenges, our AI evolves its suggestions, offering you smarter and more impactful ways to refine your habits and achieve sustainable success over time.
        </p>
        <div className="grid grid-cols-2 gap-4">
          <img
            src="/images/reflect-1.webp"
            alt="Reflection process"
            width={500}
            height={500}
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-md"
          />
          <img
            src="/images/reflect-2.webp"
            alt="Growth refinement"
            width={500}
            height={500}
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-md"
          />
        </div>
      </div>
    ),
  },
];

const TimeLineContent = () => {
  return (
    <div>
      <div>
        <h1 className="text-4xl md:text-4xl lg:text-6xl font-semibold max-w-7xl mx-auto text-center mt-6 relative z-20 py-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white">
          Build better habits, <br /> <Cover>Faster </Cover> and smarter.
        </h1>
      </div>
      <div className="w-full">
        <Timeline data={data} />
      </div>
    </div>
  );
};

export default TimeLineContent;
