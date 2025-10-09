import UsePromiseDemo from "@/components/UsePromisesDemo";
import { Suspense } from "react";
import fs from "node:fs/promises";
import { ErrorBoundary } from "next/dist/client/components/error-boundary";

export default async function Home() {
  const fetchUsersPromise = new Promise((resolve, reject) => {
    setTimeout(async () => {
      const data = await fs.readFile("dummy-db.json", "utf-8");
      const users = JSON.parse(data);
      // resolve(users);
      reject(new Error("Failed to fetch users"));
    }, 2000);
  });

  return (
    <main>
      <ErrorBoundary fallback={<p>Could not fetch users.</p>}>
        <Suspense fallback={<p>Loading...</p>}>
          <UsePromiseDemo usersPromise={fetchUsersPromise} />
        </Suspense>
      </ErrorBoundary>
    </main>
  );
}
