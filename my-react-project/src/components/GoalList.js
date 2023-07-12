import GoalItem from "./GoalItem";

const goals = [
  {
    id: 1,
    title: "Teach React in a highly-understandable way",
    description:
      "I want to ensure that you get the most out of this book and you learn all about React!",
  },
  {
    id: 2,
    title: "Allow you to practice what you learned",
    description:
      "Reading and learning is fun and helpful but you only master a topic, if you really work with it! Thatis why I want to prepare many exercies that allow you to practice what you learned.",
  },
  {
    id: 3,
    title: "Motivate you to continue learning",
    description:
      "As a developer, learning never ends. I want to ensure that you enjoy learning and you're motivated to dive into advanced (React) resources after finishing this book. Maybe my compelete React video course?",
  },
];

function GoalList() {
  return goals.map((goal) => (
    <ul key={goal.id}>
      <li>
        <GoalItem title={goal.title} description={goal.description}></GoalItem>
      </li>
    </ul>
  ));
}

export default GoalList;
