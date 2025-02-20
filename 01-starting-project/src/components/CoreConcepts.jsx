import { CORE_CONCEPTS } from "../data";
import CoreConcept from "./CoreConcept.jsx";

export default function CoreConcepts(props) {
  return (
    <section id="core-concepts">
      <h2>Core Concepts</h2>
      <ul>
        {CORE_CONCEPTS.map((concept) => (
          <CoreConcept key={concept.title} {...concept} />
        ))}
      </ul>
    </section>
  );
}
