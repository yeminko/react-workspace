import Accordion from "./components/Accordion/Accordion";

function App() {
  return (
    <main>
      <section>
        <h2>Why work with us?</h2>
        <Accordion className="accordion">
          <Accordion.Item
            id="item-1"
            title="We got 20 years of experience"
            className="accordion-item"
          >
            <article>
              <p>
                Our team has been delivering quality products for over two
                decades.
              </p>
            </article>
          </Accordion.Item>
          <Accordion.Item
            id="item-2"
            title="Customer satisfaction is our priority"
            className="accordion-item"
          >
            <article>
              <p>
                We strive to exceed our customers' expectations in every
                project.
              </p>
            </article>
          </Accordion.Item>
          <Accordion.Item
            id="item-3"
            title="Innovative solutions for modern problems"
            className="accordion-item"
          >
            <article>
              <p>
                We leverage the latest technologies to provide cutting-edge
                solutions.
              </p>
            </article>
          </Accordion.Item>
        </Accordion>
      </section>
    </main>
  );
}

export default App;
