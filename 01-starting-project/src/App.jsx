import CoreConcept from "./components/CoreConcept.jsx";
import Header from "./components/Header/Header.jsx";

import { CORE_CONCEPTS } from "./data.js";

function App() {
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcept {...CORE_CONCEPTS[0]} />
            <CoreConcept />
            <CoreConcept />
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu></menu>
        </section>
      </main>
    </div>
  );
}

export default App;
