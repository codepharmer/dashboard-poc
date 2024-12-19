// src/app/mock-data.ts

export const MOCK_USER_PROGRESS = {
  username: "TestUser",
  quizzesTaken: 5,
  quizzesPassed: 4,
  achievements: ["LLM Basics Badge", "100% on Transformer Quiz"],
  recommendedNextSteps: ["Take the Advanced LLM Quiz", "Try a Prompt Challenge"]
};

export const MOCK_QUIZZES = [
  {
    question: "What does LLM stand for?",
    options: ["Large Language Model", "Long Latent Memory", "Linear Logic Machine"],
    answer: 0
  },
  {
    question: "Which of the following is an example of a Transformer-based LLM?",
    options: ["BERT", "RNN", "LSTM"],
    answer: 0
  }
];

export const MOCK_PROMPT_CHALLENGES = [
  {
    id: 1,
    title: "Summarize a Text",
    description: "Submit a prompt that summarizes the following text: 'In recent years, LLMs have revolutionized natural language processing...'"
  }
];

export const MOCK_JAILBREAKS = [
  {
    challenge: "Try to get the model to reveal a disallowed topic.",
    hint: "The model should refuse certain topics if properly aligned."
  }
];

export const MOCK_LEADERBOARD = [
  { username: "Alice", score: 1200 },
  { username: "Bob", score: 1150 },
  { username: "Charlie", score: 1000 }
];
