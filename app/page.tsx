import React from "react";
import Link from "next/link";

const Home: React.FC = () => {
  return (
    <div className="flex flex-col gap-y-3 m-4 underline">
      <Link href="/multiple-choice">Game 1: which year (multiple choice)</Link>
      <Link href="/slider">Game 2: which year (slider)</Link>
      <Link href="/which-event">Game 3: which event on this year</Link>
      <Link href="/sort-events">Game 4: sort events</Link>
    </div>
  );
};

export default Home;
