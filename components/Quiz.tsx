"use client";
import React, { useState } from "react";
import Button from "./Button";
import { useSession } from "next-auth/react";

const Quiz = () => {
  const [questions, setQuestions] = useState([
    {
      id: 1,
      question: "What is the capital of France?",
      options: ["Paris", "London", "Berlin", "Madrid"],
      answer: "Paris",
      difficulty: "easy",
      category: "General",
    },
    {
      id: 2,
      question: "What is the square root of 144?",
      options: ["11", "12", "13", "14"],
      answer: "12",
      difficulty: "medium",
      category: "General",
    },
    {
      id: 3,
      question: "Who wrote 'Hamlet'?",
      options: [
        "William Shakespeare",
        "Charles Dickens",
        "Jane Austen",
        "Leo Tolstoy",
      ],
      answer: "William Shakespeare",
      difficulty: "hard",
      category: "General",
    },
    {
      id: 4,
      question: "What is the chemical symbol for gold?",
      options: ["Au", "Ag", "Fe", "Hg"],
      answer: "Au",
      difficulty: "easy",
      category: "General",
    },
    {
      id: 5,
      question: "Which planet is known as the Red Planet?",
      options: ["Mars", "Venus", "Jupiter", "Saturn"],
      answer: "Mars",
      difficulty: "medium",
      category: "General",
    },
    {
      id: 6,
      question: "What is the boiling point of water in Celsius?",
      options: ["100", "0", "50", "200"],
      answer: "100",
      difficulty: "easy",
      category: "General",
    },
    {
      id: 7,
      question: "What is the currency of Japan?",
      options: ["Yuan", "Yen", "Dollar", "Euro"],
      answer: "Yen",
      difficulty: "medium",
      category: "General",
    },
    {
      id: 8,
      question: "Who painted the Mona Lisa?",
      options: [
        "Leonardo da Vinci",
        "Vincent van Gogh",
        "Pablo Picasso",
        "Claude Monet",
      ],
      answer: "Leonardo da Vinci",
      difficulty: "hard",
      category: "General",
    },
    {
      id: 9,
      question: "What is the chemical formula for water?",
      options: ["H2O", "CO2", "NaCl", "C6H12O6"],
      answer: "H2O",
      difficulty: "easy",
      category: "General",
    },
    {
      id: 10,
      question: "What is the largest ocean on Earth?",
      options: [
        "Atlantic Ocean",
        "Arctic Ocean",
        "Indian Ocean",
        "Pacific Ocean",
      ],
      answer: "Pacific Ocean",
      difficulty: "medium",
      category: "General",
    },
    {
      id: 11,
      question: "Who is the founder of Pakistan?",
      options: [
        "Muhammad Ali Jinnah",
        "Allama Iqbal",
        "Liaquat Ali Khan",
        "Ayub Khan",
      ],
      answer: "Muhammad Ali Jinnah",
      difficulty: "easy",
      category: "Pakistan History",
    },
    {
      id: 12,
      question: "When did Pakistan gain independence?",
      options: ["1945", "1947", "1950", "1955"],
      answer: "1947",
      difficulty: "medium",
      category: "Pakistan History",
    },
    {
      id: 13,
      question: "Who is known as the Father of the Nation of Pakistan?",
      options: [
        "Allama Iqbal",
        "Muhammad Ali Jinnah",
        "Liaquat Ali Khan",
        "Zulfikar Ali Bhutto",
      ],
      answer: "Muhammad Ali Jinnah",
      difficulty: "easy",
      category: "Pakistan History",
    },
    {
      id: 14,
      question: "What is the national sport of Pakistan?",
      options: ["Cricket", "Hockey", "Football", "Squash"],
      answer: "Hockey",
      difficulty: "medium",
      category: "Pakistan History",
    },
    {
      id: 15,
      question: "Who is the current Prime Minister of Pakistan?",
      options: [
        "Imran Khan",
        "Nawaz Sharif",
        "Asif Ali Zardari",
        "Benazir Bhutto",
      ],
      answer: "Imran Khan",
      difficulty: "easy",
      category: "Pakistan History",
    },
    {
      id: 16,
      question: "What is the formula for photosynthesis?",
      options: [
        "CO2 + H2O + light energy → C6H12O6 + O2",
        "C6H12O6 + O2 → CO2 + H2O + ATP",
        "H2O + O2 + light energy → CO2 + ATP",
        "CO2 + O2 + light energy → C6H12O6 + H2O",
      ],
      answer: "CO2 + H2O + light energy → C6H12O6 + O2",
      difficulty: "easy",
      category: "Biology",
    },
    {
      id: 17,
      question: "What is the powerhouse of the cell?",
      options: ["Mitochondria", "Nucleus", "Ribosome", "Golgi Apparatus"],
      answer: "Mitochondria",
      difficulty: "medium",
      category: "Biology",
    },
    {
      id: 18,
      question: "Which gas is responsible for the greenhouse effect?",
      options: ["Oxygen", "Carbon dioxide", "Nitrogen", "Hydrogen"],
      answer: "Carbon dioxide",
      difficulty: "easy",
      category: "Biology",
    },
    {
      id: 19,
      question: "What is the largest organ in the human body?",
      options: ["Heart", "Brain", "Liver", "Skin"],
      answer: "Skin",
      difficulty: "medium",
      category: "Biology",
    },
    {
      id: 20,
      question: "What is the chemical formula of glucose?",
      options: ["C6H12O6", "H2O", "CO2", "NaCl"],
      answer: "C6H12O6",
      difficulty: "easy",
      category: "Biology",
    },
  ]);

  const handlesubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("You will recieve result to your gmail account");
  };

  const handleNotSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("Please sign In");
  };

  const session = useSession();

  return (
    <>
      <section className="w-full px-5 mt-16">
        {/* <h1 className="font-bold lg:text-5xl text-2xl uppercase text-center py-4">
          Test yourself
        </h1>
        <h2 className="text-md lg:text-xl text-center text-gray-500 mb-20">
          Do not worry its easy if you focus. You have 20 questions and you will pass if you know only 15 questions
        </h2> */}
        <form onSubmit={session.data === null ? handleNotSubmit : handlesubmit}>
          {questions.slice(0, 10).map((data, id) => {
            return (
              <>
                <div
                  key={id}
                  className="border border-gray-300 w-full mt-5 rounded-lg p-4"
                >
                  <h1 className="lg:text-2xl text-lg font-semibold">
                    {data?.question}
                  </h1>
                  <div className="mt-2">
                    {data.options.map((ans) => {
                      return (
                        <>
                          <h2 className="lg:text-xl text-md mt-2 lowercase">
                            {ans}
                          </h2>
                        </>
                      );
                    })}
                  </div>
                  <input
                    required
                    autoComplete="off"
                    type="text"
                    placeholder="Enter the answer"
                    className="w-full mt-5 rounded-md py-3 pl-3 outline-none bg-gray-100"
                  />
                </div>
              </>
            );
          })}
          <Button
            buttonType="submit"
            text="submit"
            buttonStyles="bg-violet-500 text-white rounded-md hover:opacity-80 transition-all px-4 py-2 mt-10 self-end"
          />
        </form>
      </section>
    </>
  );
};

export default Quiz;
