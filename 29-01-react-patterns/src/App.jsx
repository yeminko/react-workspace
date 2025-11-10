import Accordion from "./components/Accordion/Accordion";
import SearchableList from "./components/SearchableList/SearchableList";
import { PLACES } from "./data/places";
import Place from "./Place";

function App() {
  return (
    <main>
      <section>
        <h2>Why work with us?</h2>
        <Accordion className="accordion">
          <Accordion.Item id="item-1" className="accordion-item">
            <Accordion.Title className="accordion-item- title">
              We got 20 years of experience
            </Accordion.Title>
            <Accordion.Content className="accordion-item-content">
              <article>
                <p>
                  Our team has been delivering quality products for over two
                  decades.
                </p>
              </article>
            </Accordion.Content>
          </Accordion.Item>
          <Accordion.Item id="item-2" className="accordion-item">
            <Accordion.Title className="accordion-item-title">
              We value customer satisfaction
            </Accordion.Title>
            <Accordion.Content className="accordion-item-content">
              <article>
                <p>
                  Our clients are our top priority, and we strive to exceed
                  their expectations.
                </p>
              </article>
            </Accordion.Content>
          </Accordion.Item>
        </Accordion>
      </section>
      <section>
        <SearchableList items={PLACES}>
          {(item) => <Place item={item} />}
        </SearchableList>
        <SearchableList items={["item 1", "item 2"]}>
          {(item) => item}
        </SearchableList>
      </section>
    </main>
  );
}

export default App;
