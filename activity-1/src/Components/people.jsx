import React from 'react';

const people = [
  { name: 'Juan', age: 30 },
  { name: 'Pedro', age: 32 },
  { name: 'Nena', age: 33 },
  { name: 'Jun', age: 24 }
];

const Greetings = () => {
  const greetings = people.map(person => `Hello, ${person.name}! You are ${person.age} years old.`);
  
  return (
    <div>
      {greetings.map((greeting, index) => (
        <p key={index}>{greeting}</p>
      ))}
    </div>
  );
}

export default Greetings;