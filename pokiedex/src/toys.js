import React from 'react';

const toys = [
  { id: 1, name: 'Action Figure', price: 15, img: 'https://via.placeholder.com/150?text=Action+Figure' },
  { id: 2, name: 'Building Blocks', price: 25, img: 'https://via.placeholder.com/150?text=Blocks' },
  { id: 3, name: 'Plush Toy', price: 12, img: 'https://via.placeholder.com/150?text=Plush+Toy' },
];

export default function Toys() {
  return (
    <div>
      <h2>Toys Store</h2>
      <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap' }}>
        {toys.map(t => (
          <div key={t.id} style={{ width: 150, padding: 10, border: '1px solid #ccc', borderRadius: 6, transition: 'transform 0.3s', cursor: 'pointer' }}
            onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'}
            onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
          >
            <img src={t.img} alt={t.name} width="150" height="150" />
            <h4>{t.name}</h4>
            <p>${t.price}</p>
            <button style={{ width: '100%', backgroundColor: '#28a745' }}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}
