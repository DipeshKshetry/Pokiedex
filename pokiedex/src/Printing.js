import React, { useState } from 'react';

export default function Printing() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    phone: '',
    designFile: null,
  });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e) {
    const { name, value, files } = e.target;
    if (name === 'designFile') {
      setFormData(prev => ({ ...prev, designFile: files[0] }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!formData.designFile) {
      alert('Please upload your design file');
      return;
    }
    // Here you would normally send form data and file to backend
    // For now, just mock success

    alert(`Thanks ${formData.name}! Your design has been received.\n
      We will send the preview and order confirmation to ${formData.email}.\n
      Phone: ${formData.phone}\n
      Address: ${formData.address}`);

    setSubmitted(true);
  }

  return (
    <div>
      <h2>Printing Orders</h2>
      <p>Upload your custom design and enter your details below. We will email you after payment confirmation with your order preview.</p>
      {!submitted ? (
        <form onSubmit={handleSubmit} style={{ maxWidth: 400 }}>
          <label>
            Name:<br />
            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              style={{ width: '100%', marginBottom: 12 }}
            />
          </label><br />
          <label>
            Email:<br />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              style={{ width: '100%', marginBottom: 12 }}
            />
          </label><br />
          <label>
            Phone:<br />
            <input
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              style={{ width: '100%', marginBottom: 12 }}
            />
          </label><br />
          <label>
            Address:<br />
            <textarea
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
              rows={3}
              style={{ width: '100%', marginBottom: 12 }}
            />
          </label><br />
          <label>
            Upload Design:<br />
            <input
              type="file"
              name="designFile"
              accept="image/*"
              onChange={handleChange}
              required
              style={{ marginBottom: 12 }}
            />
          </label><br />
          <button type="submit">Submit Order</button>
        </form>
      ) : (
        <p>Order submitted. We will contact you soon.</p>
      )}
    </div>
  );
}
