import GoalItem from "./GoalItem";

function GoalList() {
  return (
    <ul>
      <li>
        <GoalItem header="Teach React in a highly-understandable way">
          I want to ensure that you get the most out of this book and you learn
          all about React!
        </GoalItem>
      </li>
      <li>
        <GoalItem header="Allow you to practice what you learned">
          Reading and learning is fun and helpful but you only master a topic,
          if you really work with it! Thatis why I want to prepare many exercies
          that allow you to practice what you learned.
        </GoalItem>
      </li>
      <li>
        <GoalItem header="Motivate you to continue learning">
          As a developer, learning never ends. I want to ensure that you enjoy
          learning and you're motivated to dive into advanced (React) resources
          after finishing this book. Maybe my compelete React video course?
        </GoalItem>
      </li>
    </ul>
  );
}

export default GoalList;
