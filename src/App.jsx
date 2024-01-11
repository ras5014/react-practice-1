import { useState } from "react";

import CoreConcepts from "./components/CoreConcepts";
import Header from "./components/Header";
import TabButton from "./components/TabButton";
import { CORE_CONCEPTS, EXAMPLES } from "./data";

function App() {
  const [tabContent, setTabContent] = useState("components");
  const handleSelect = (selectedValue) => {
    setTabContent(selectedValue);
    console.log(selectedValue);
  };
  return (
    <div>
      <Header />

      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcepts {...CORE_CONCEPTS[0]} />
            <CoreConcepts {...CORE_CONCEPTS[1]} />
            <CoreConcepts {...CORE_CONCEPTS[2]} />
            <CoreConcepts {...CORE_CONCEPTS[3]} />
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton
              handleClick={() => handleSelect("components")}
              label="Components"
            />
            <TabButton handleClick={() => handleSelect("jsx")} label="JSX" />
            <TabButton
              handleClick={() => handleSelect("props")}
              label="Props"
            />
            <TabButton
              handleClick={() => handleSelect("state")}
              label="States"
            />
          </menu>
          <div id="tab-content">
            <h3>{EXAMPLES[tabContent].title}</h3>
            <p>{EXAMPLES[tabContent].description}</p>
            <pre>
              <code>{EXAMPLES[tabContent].code}</code>
            </pre>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
