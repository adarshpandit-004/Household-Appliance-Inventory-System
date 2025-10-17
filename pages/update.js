import { useState } from 'react';

export default function UpdateAppliance() {
  const [serialNumber, setSerialNumber] = useState('');
  const [formData, setFormData] = useState(null);
  const [message, setMessage] = useState('');

  const fetchAppliance = async (e) => {
    e.preventDefault();
    const res = await fetch('/api/search-appliance', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ serialNumber }),
    });    
    const data = await res.json();
    if (res.ok) {
      setFormData(data);
      setMessage('');
    } else {
      console.log('Fetch failed:', data);
      setFormData(null);
      setMessage(data.message || 'Appliance not found');
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    const res = await fetch('/api/update-appliance', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });
    const text = await res.text();
    setMessage(text);
  };

  return (
    <div className="container p-4 max-w-xl mx-auto">
      <h2 className="text-xl font-bold mb-4">Update Appliance</h2>
      <form onSubmit={fetchAppliance} className="space-y-3">
        <input
          type="text"
          placeholder="Enter Serial Number"
          value={serialNumber}
          onChange={(e) => setSerialNumber(e.target.value)}
          className="input"
          required
        />
        <button type="submit" className="btn bg-blue-600 text-white px-4 py-2">Fetch Appliance</button>
      </form>

      {formData && (
        <form onSubmit={handleUpdate} className="space-y-3 mt-6">
          <input name="applianceType" value={formData.applianceType} onChange={handleChange} className="input" placeholder="Appliance Type" />
          <input name="brand" value={formData.brand} onChange={handleChange} className="input" placeholder="Brand" />
          <input name="modelNumber" value={formData.modelNumber} onChange={handleChange} className="input" placeholder="Model Number" />
          <input name="purchaseDate" type="date" value={formData.purchaseDate} onChange={handleChange} className="input" />
          <input name="warrantyDate" type="date" value={formData.warrantyDate} onChange={handleChange} className="input" />
          <input name="cost" type="number" value={formData.cost} onChange={handleChange} className="input" placeholder="Cost" />
          <input name="address" value={formData.address} onChange={handleChange} className="input" placeholder="Address" />
          <input name="mobile" value={formData.mobile} onChange={handleChange} className="input" placeholder="Mobile" />
          <input name="email" value={formData.email} onChange={handleChange} className="input" placeholder="Email" />
          <button type="submit" className="btn bg-green-600 text-white px-4 py-2">Update Appliance</button>
        </form>
      )}

      {message && <div className="mt-4 text-blue-700">{message}</div>}
    </div>
  );
}
