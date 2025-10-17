import { useState } from 'react';

export default function Inventory() {
  const [eircode, setEircode] = useState('');
  const [applianceType, setApplianceType] = useState('');
  const [brand, setBrand] = useState('');
  const [model, setModel] = useState('');
  const [serial, setSerial] = useState('');
  const [purchaseDate, setPurchaseDate] = useState('');
  const [warrantyDate, setWarrantyDate] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const eircodeRegex = /^[A-Za-z0-9]{7}$/;
    const modelRegex = /^[A-Za-z0-9]+$/;
    const serialRegex = /^[A-Za-z0-9]+$/;

    if (
      !eircode.match(eircodeRegex) ||
      !applianceType ||
      !brand ||
      !model.match(modelRegex) ||
      !serial.match(serialRegex) ||
      !purchaseDate ||
      !warrantyDate ||
      new Date(warrantyDate) < new Date(purchaseDate)
    ) {
      setMessage('Invalid input. Please check all fields.');
      return;
    }

    const response = await fetch('/api/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ eircode, applianceType, brand, model, serial, purchaseDate, warrantyDate }),
    });

    const data = await response.json();
    setMessage(data.message);
  };

  return (
    <div className="inventory-wrapper">
      <div className="inventory-card">
        <h2 className="inventory-title">House Appliance Inventory</h2>
        <form onSubmit={handleSubmit}>
        <div>
            <label>Eircode</label>
            <input
              type="text"
              value={eircode}
              onChange={(e) => setEircode(e.target.value)}
              pattern="[A-Za-z0-9]{7}"
              required
              className="form-control"
            />
          </div>
          <div>
            <label>Appliance Type</label>
            <select
              onChange={(e) => setApplianceType(e.target.value)}
              className="form-control"
              required
            >
              <option value="">Select an appliance</option>
              <option value="Refrigerator">Refrigerator</option>
              <option value="Washing Machine">Washing Machine</option>
              <option value="Microwave">Microwave</option>
              <option value="Dishwasher">Dishwasher</option>
            </select>
          </div>
          <div>
            <label>Brand</label>
            <input
              type="text"
              value={brand}
              onChange={(e) => setBrand(e.target.value)}
              required
              className="form-control"
            />
          </div>
          <div>
            <label>Model Number</label>
            <input
              type="text"
              value={model}
              onChange={(e) => setModel(e.target.value)}
              pattern="^[A-Za-z0-9]+$"
              required
              className="form-control"
            />
          </div>
          <div>
            <label>Serial Number</label>
            <input
              type="text"
              value={serial}
              onChange={(e) => setSerial(e.target.value)}
              pattern="^[A-Za-z0-9]+$"
              required
              className="form-control"
            />
          </div>
          <div>
            <label>Purchase Date</label>
            <input
              type="date"
              value={purchaseDate}
              onChange={(e) => setPurchaseDate(e.target.value)}
              required
              className="form-control"
            />
          </div>
          <div>
            <label>Warranty Expiry Date</label>
            <input
              type="date"
              value={warrantyDate}
              onChange={(e) => setWarrantyDate(e.target.value)}
              required
              className="form-control"
            />
          </div>
          <button type="submit" className="btn btn-success w-100 mt-3">
            Add to Inventory
          </button>
        </form>
        {message && (
          <div className="alert alert-info mt-3 text-center">{message}</div>
        )}
      </div>
    </div>
  );
}