function GoalItem({ header, children }) {
  return (
    <>
      <h3>{header}</h3>
      <p>{children}</p>
    </>
  );
}

export default GoalItem;
