import React from "react";
import CoreConcept from "./CoreConcept";
import { CORE_CONCEPTS } from "../data";

const CoreConcepts = () => {
  return (
    <div>
      <section id="core-concepts">
        <h2>Core Concepts</h2>
        <ul>
          {CORE_CONCEPTS.map((item) => (
            <CoreConcept key={item.title} {...item} />
          ))}
        </ul>
      </section>
    </div>
  );
};

export default CoreConcepts;
