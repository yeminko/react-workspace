export default function MealDetailsPage({ params }) {
  const { mealSlug } = params;

  return <h1>Meal Detail Page for {mealSlug}</h1>;
}
