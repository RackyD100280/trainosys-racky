import React from "react";

const ChildComponent = () => {
  return (
    <div>
      <p>Child Component</p>
    </div>
  );
};

const ParentComponent = () => {
  return (
    <div>
      <h1>Parent Component</h1>
      <ChildComponent />
    </div>
  );
};

const NestedComponents = () => {
  return (
    <div>
      <h1>Nested Components Example</h1>
      <ParentComponent />
    </div>
  );
};

export default NestedComponents;