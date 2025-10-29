import Accordion from "./components/Accordion/Accordion";
import AccordionItem from "./components/Accordion/AccordionItem";

function App() {
  return (
    <main>
      <section>
        <h2>Why work with us?</h2>
        <Accordion className="accordion">
          <AccordionItem
            title="We got 20 years of experience"
            className="accordion-item"
          >
            <article>
              <p>
                Our team has been delivering quality products for over two
                decades.
              </p>
            </article>
          </AccordionItem>
          <AccordionItem
            title="Customer satisfaction is our priority"
            className="accordion-item"
          >
            <article>
              <p>
                We strive to exceed our customers' expectations in every
                project.
              </p>
            </article>
          </AccordionItem>
          <AccordionItem
            title="Innovative solutions for modern problems"
            className="accordion-item"
          >
            <article>
              <p>
                We leverage the latest technologies to provide cutting-edge
                solutions.
              </p>
            </article>
          </AccordionItem>
        </Accordion>
      </section>
    </main>
  );
}

export default App;
