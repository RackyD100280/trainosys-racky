import { useState } from "react";

const PropsComponent = () => {
  const [counter, setCounter] = useState(0);
  const everyFruit = props.allFruits.map(element => <div>{element.name}</div>);

  console.log(everyFruit);
  
  return (
    <div>
      <p>Child Component</p>
      <p>Fruit Name: {everyFruit}</p>
      <h1>Counter: {counter}:</h1>
      <h1>Terms: {terms}</h1>
    </div>
  );
};

export default PropsComponent;