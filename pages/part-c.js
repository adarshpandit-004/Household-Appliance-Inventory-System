import { useState } from 'react';

export default function Home() {
  const [formData, setFormData] = useState({
    eircode: '',
    applianceType: '',
    brand: '',
    modelNumber: '',
    serialNumber: '',
    purchaseDate: '',
    warrantyDate: '',
  });

  const [errorMessages, setErrorMessages] = useState({});
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch('/api/submit-form', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();

    if (response.ok) {
      setMessage(data.message);
      setErrorMessages({});
    } else {
      setErrorMessages(data.errors || {});
    }
  };

  return (
    <div className="inventory-wrapper">
      <div className="inventory-card">
        <h2 className="inventory-title">House Appliance Inventory</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="eircode">Eircode</label>
            <input
              type="text"
              name="eircode"
              value={formData.eircode}
              onChange={handleChange}
              required
            />
            {errorMessages.eircode && <p className="alert-danger">{errorMessages.eircode}</p>}
          </div>

          <div>
            <label htmlFor="applianceType">Appliance Type</label>
            <input
              type="text"
              name="applianceType"
              value={formData.applianceType}
              onChange={handleChange}
              required
            />
            {errorMessages.applianceType && <p className="alert-danger">{errorMessages.applianceType}</p>}
          </div>

          <div>
            <label htmlFor="brand">Brand</label>
            <input
              type="text"
              name="brand"
              value={formData.brand}
              onChange={handleChange}
              required
            />
            {errorMessages.brand && <p className="alert-danger">{errorMessages.brand}</p>}
          </div>

          <div>
            <label htmlFor="modelNumber">Model Number</label>
            <input
              type="text"
              name="modelNumber"
              value={formData.modelNumber}
              onChange={handleChange}
              required
            />
            {errorMessages.modelNumber && <p className="alert-danger">{errorMessages.modelNumber}</p>}
          </div>

          <div>
            <label htmlFor="serialNumber">Serial Number</label>
            <input
              type="text"
              name="serialNumber"
              value={formData.serialNumber}
              onChange={handleChange}
              required
            />
            {errorMessages.serialNumber && <p className="alert-danger">{errorMessages.serialNumber}</p>}
          </div>

          <div>
            <label htmlFor="purchaseDate">Purchase Date</label>
            <input
              type="date"
              name="purchaseDate"
              value={formData.purchaseDate}
              onChange={handleChange}
              required
            />
            {errorMessages.purchaseDate && <p className="alert-danger">{errorMessages.purchaseDate}</p>}
          </div>

          <div>
            <label htmlFor="warrantyDate">Warranty Date</label>
            <input
              type="date"
              name="warrantyDate"
              value={formData.warrantyDate}
              onChange={handleChange}
              required
            />
            {errorMessages.warrantyDate && <p className="alert-danger">{errorMessages.warrantyDate}</p>}
          </div>

          <button type="submit">Submit</button>
        </form>

        {message && <div className="alert alert-success mt-3">{message}</div>}
      </div>
    </div>
  );
}
