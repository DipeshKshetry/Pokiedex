import React from 'react';

const products = [
  { id: 1, name: 'Cool T-shirt', price: 20, img: 'https://via.placeholder.com/150?text=T-shirt' },
  { id: 2, name: 'Stylish Jacket', price: 50, img: 'https://via.placeholder.com/150?text=Jacket' },
  { id: 3, name: 'Comfy Hoodie', price: 35, img: 'https://via.placeholder.com/150?text=Hoodie' },
];

export default function Clothing() {
  return (
    <div>
      <h2>Clothing Store</h2>
      <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap' }}>
        {products.map(p => (
          <div key={p.id} style={{ width: 150, padding: 10, border: '1px solid #ccc', borderRadius: 6, transition: 'transform 0.3s', cursor: 'pointer' }}
            onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'}
            onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
          >
            <img src={p.img} alt={p.name} width="150" height="150" />
            <h4>{p.name}</h4>
            <p>${p.price}</p>
            <button style={{ width: '100%', backgroundColor: '#28a745' }}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}
