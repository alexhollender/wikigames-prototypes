"use client";

import * as React from "react";
import * as Icons from "@/icons";
import {
  DndContext,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  closestCorners,
  DragEndEvent,
} from "@dnd-kit/core";
import {
  SortableContext,
  verticalListSortingStrategy,
  useSortable,
  arrayMove,
  sortableKeyboardCoordinates,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

import questions3, { QuestionType3 } from "@/questions3";

export default function Game4() {
  const [currentQuestionSet, setCurrentQuestionSet] = React.useState<
    QuestionType3[]
  >(questions3[0]);
  const [answerSubmitted, setAnswerSubmitted] = React.useState<boolean>(false);
  const [answerReveal, setAnswerReveal] = React.useState<boolean>(false);
  const [questionNumber, setQuestionNumber] = React.useState<number>(0);
  const [score, setScore] = React.useState<number>(0);

  const updateAnswerOptions = () => {
    setCurrentQuestionSet((prevAnswerOptions) =>
      prevAnswerOptions.sort((a, b) => a.correctPosition - b.correctPosition)
    );
  };

  const handleSubmit = (): void => {
    const correctPositions = currentQuestionSet.filter(
      (option, index) => option.correctPosition === index
    ).length;

    // Assign points
    let points = 0;
    if (correctPositions === 1) points = 5;
    else if (correctPositions === 3) points = 10;

    // Update score
    setScore((prevScore) => prevScore + points);

    setAnswerSubmitted(true);

    setTimeout(() => {
      setAnswerReveal(true);
      updateAnswerOptions();
    }, 1000);
  };

  const advanceQuestion = () => {
    setQuestionNumber((prevQuestionNumber) => {
      const nextQuestionNumber = (prevQuestionNumber + 1) % questions3.length;
      setCurrentQuestionSet(questions3[nextQuestionNumber]);
      setAnswerSubmitted(false);
      setAnswerReveal(false);
      return nextQuestionNumber;
    });
  };

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const getTaskPos = (id: number) =>
    currentQuestionSet.findIndex((answerOption) => answerOption.id === id);

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (!over || active.id === over.id) return;

    setCurrentQuestionSet((tasks) => {
      const originalPos = getTaskPos(Number(active.id));
      const newPos = getTaskPos(Number(over.id));

      return arrayMove(tasks, originalPos, newPos);
    });
  };

  const buttonBaseClasses =
    "cursor-pointer p-2 rounded-full text-center w-full text-white font-bold";

  return (
    <main className="w-[360px] h-[720px] border border-gray-300 p-4">
      <Header />
      <h1 className="font-bold text-xl mb-8">Put these events in order</h1>
      <DndContext
        sensors={sensors}
        onDragEnd={handleDragEnd}
        collisionDetection={closestCorners}
      >
        <div className="flex flex-col gap-y-4 mb-8 h-[460px]">
          <SortableContext
            items={currentQuestionSet}
            strategy={verticalListSortingStrategy}
          >
            {currentQuestionSet.map((answerOption) => {
              const isCorrectPosition =
                answerOption.correctPosition ===
                currentQuestionSet.indexOf(answerOption);

              return (
                <AnswerOption
                  key={answerOption.id}
                  id={answerOption.id}
                  content={answerOption.content}
                  year={answerOption.year}
                  isCorrectPosition={isCorrectPosition}
                  answerSubmitted={answerSubmitted}
                  answerReveal={answerReveal}
                />
              );
            })}
          </SortableContext>
        </div>
      </DndContext>
      {!answerReveal && (
        <button
          className={`
            ${buttonBaseClasses}
            bg-blue-700
            ${answerSubmitted && "opacity-50 pointer-events-none"}
          `}
          onClick={handleSubmit}
        >
          Submit
        </button>
      )}
      {answerReveal && (
        <button
          onClick={advanceQuestion}
          className={`${buttonBaseClasses} bg-gray-700`}
        >
          Next question
        </button>
      )}
      <div className="mt-4 text-center">Score: {score}</div>
    </main>
  );
}

const AnswerOption: React.FC<{
  id: number;
  content: string;
  year: number;
  isCorrectPosition: boolean;
  answerSubmitted: boolean;
  answerReveal: boolean;
}> = ({
  id,
  content,
  year,
  isCorrectPosition,
  answerSubmitted,
  answerReveal,
}) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id });

  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className={`
        border border-gray-300 p-5 cursor-grab touch-none font-serif relative
        ${answerReveal ? "bg-green-200 pointer-events-none" : ""}
        ${!answerSubmitted && !answerReveal ? "bg-white" : ""}
        ${
          answerSubmitted && isCorrectPosition && !answerReveal
            ? "bg-green-400"
            : ""
        }
        ${
          answerSubmitted && !isCorrectPosition && !answerReveal
            ? "bg-red-400"
            : ""
        }
      `}
    >
      {answerReveal && (
        <div className="font-sans text-sm absolute -top-2 bg-green-300 px-1">
          {year}
        </div>
      )}

      <div>{content}</div>
    </div>
  );
};

const Header = () => {
  return (
    <div className="mb-8 flex gap-x-2 items-center">
      <div>
        <Icons.Back />
      </div>
      <div className="flex-1 font-bold">WikiDate Detective</div>
      <div>
        <Icons.More />
      </div>
    </div>
  );
};
