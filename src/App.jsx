import { useState } from "react";

import CoreConcepts from "./components/CoreConcepts";
import Header from "./components/Header";
import TabButton from "./components/TabButton";
import { CORE_CONCEPTS, EXAMPLES } from "./data";

function App() {
  const [tabContent, setTabContent] = useState();
  const handleSelect = (selectedValue) => {
    setTabContent(selectedValue);
    console.log(selectedValue);
  };

  let content = <p>Please a select a topic!</p>;
  if (tabContent) {
    content = (
      <div id="tab-content">
        <h3>{EXAMPLES[tabContent].title}</h3>
        <p>{EXAMPLES[tabContent].description}</p>
        <pre>
          <code>{EXAMPLES[tabContent].code}</code>
        </pre>
      </div>
    );
  }
  return (
    <div>
      <Header />

      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((item) => (
              <CoreConcepts key={item.title} {...item} />
            ))}
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton
              isSelected={tabContent === "components"}
              handleClick={() => handleSelect("components")}
              label="Components"
            />
            <TabButton
              isSelected={tabContent === "jsx"}
              handleClick={() => handleSelect("jsx")}
              label="JSX"
            />
            <TabButton
              isSelected={tabContent === "props"}
              handleClick={() => handleSelect("props")}
              label="Props"
            />
            <TabButton
              isSelected={tabContent === "state"}
              handleClick={() => handleSelect("state")}
              label="States"
            />
          </menu>
          {content}
        </section>
      </main>
    </div>
  );
}

export default App;
