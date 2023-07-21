import React, { useEffect } from 'react';

const Exercise1 = () => {
  const fruits = ['apple', 'banana', 'orange'];

  useEffect(() => {
    fruits.push('mango');

    console.log(`Number of fruits: ${fruits.length}`);

    fruits.forEach(fruit => {
      console.log(fruit);
    });

    fruits.push('grape', 'kiwi');

    fruits.sort();

    console.log(fruits);
  }, []);

  return (
    <div>
      <h1>Exercise 1</h1>
    </div>
  );
};

export default Exercise1;