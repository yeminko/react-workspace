import { Suspense } from "react";
import EventsList from "../components/EventsList";
import { useLoaderData, Await } from "react-router-dom";

function EventsPage() {
  const { events } = useLoaderData();

  return (
    <Suspense fallback={<p style={{ textAlign: "center" }}>Loading...</p>}>
      <Await resolve={events}>
        {(loadedEvents) => <EventsList events={loadedEvents} />}
      </Await>
    </Suspense>
  );
}

export default EventsPage;

async function loadEvents() {
  const response = await fetch("http://localhost:8080/events");

  if (!response.ok) {
    // return { isError: true, message: "Failed to fetch events." };
    throw new Response(JSON.stringify({ message: "Failed to fetch events." }), {
      status: 500,
    });

    // Only for react-router v6
    // return json({ message: "Failed to fetch events." }, { status: 500 });
  } else {
    const resData = await response.json();
    return resData.events;
  }
}

export function loader() {
  return {
    events: loadEvents(),
  };
}
