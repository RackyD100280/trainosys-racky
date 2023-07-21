import React from 'react';

function ProductCard() {
  const productCardProps: ProductCard = {
    imageUrl: "Desktop/Basic Tee.JPG",
    title: "Basic Tee",
    price: 99,
    buttonText: "Buy Now"
  };

  return (
    <div>
      <ProductCard {...productCardProps} />
    </div>
  );
}

export default App;