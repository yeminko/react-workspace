import Image from "next/image";
import classes from "./page.module.css";

export default function MealDetailsPage({ params }) {
  const { mealSlug } = params;

  return (
    <>
      <header className={classes.header}>
        <div className={classes.image}>
          <Image fill />
        </div>
        <div className={classes.headerText}>
          <h1>Meal Title</h1>
          <p className={classes.creator}>
            by <a href={`mailto:${"EMAIL"}`}>Name</a>
          </p>
          <p className={classes.summary}></p>
        </div>
      </header>
      <main className={classes.main}></main>
    </>
  );
}
