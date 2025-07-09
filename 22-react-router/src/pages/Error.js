import MainNavigation from "../components/MainNavigation";

export default function ErrorPage() {
  return (
    <div>
      <MainNavigation />
      <main>
        <h1>An error occurred!</h1>
        <p>Something went wrong!</p>
      </main>
    </div>
  );
}
