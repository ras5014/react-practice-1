import React, { useState } from "react";
import TabButton from "./TabButton";
import { EXAMPLES } from "../data";
import Section from "./Section";
import Tab from "./Tab";

const Examples = () => {
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
    <>
      <Section title="Examples" id="examples">
        <Tab
          buttons={
            <>
              <TabButton
                isSelected={tabContent === "components"}
                onClick={() => handleSelect("components")}
                label="Components"
              />
              <TabButton
                isSelected={tabContent === "jsx"}
                onClick={() => handleSelect("jsx")}
                label="JSX"
              />
              <TabButton
                isSelected={tabContent === "props"}
                onClick={() => handleSelect("props")}
                label="Props"
              />
              <TabButton
                isSelected={tabContent === "state"}
                onClick={() => handleSelect("state")}
                label="States"
              />
            </>
          }
        >
          {content}
        </Tab>
      </Section>
    </>
  );
};

export default Examples;
