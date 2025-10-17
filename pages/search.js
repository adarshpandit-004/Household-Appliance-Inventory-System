import { useState } from 'react';

export default function SearchAppliance() {
  const [serialNumber, setSerialNumber] = useState('');
  const [appliance, setAppliance] = useState(null);
  const [message, setMessage] = useState('');

  const handleSearch = async (e) => {
    e.preventDefault();
    setMessage('');
    setAppliance(null);

    const res = await fetch('/api/search-appliance', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ serialNumber }),
    });

    if (res.ok) {
      const data = await res.json();
      setAppliance(data);
    } else {
      const text = await res.text();
      setMessage(text);
    }
  };

  return (
    <div className="container p-4 max-w-xl mx-auto">
      <h2 className="text-xl font-bold mb-4">Search Appliance</h2>
      <form onSubmit={handleSearch} className="space-y-3">
        <input
          type="text"
          value={serialNumber}
          onChange={(e) => setSerialNumber(e.target.value)}
          placeholder="Enter Serial Number"
          className="input"
          required
        />
        <button type="submit" className="btn bg-purple-600 text-white px-4 py-2">
          Search
        </button>
      </form>

      {message && <p className="mt-4 text-red-600">{message}</p>}

      {appliance && (
        <div className="mt-6 p-4 border rounded bg-gray-50">
          <h3 className="font-semibold text-lg mb-2">Appliance Found</h3>
          <p><strong>Appliance Type:</strong> {appliance.applianceType}</p>
          <p><strong>Brand:</strong> {appliance.brand}</p>
          <p><strong>Model Number:</strong> {appliance.modelNumber}</p>
          <p><strong>Serial Number:</strong> {appliance.serialNumber}</p>
          <p><strong>Purchase Date:</strong> {appliance.purchaseDate}</p>
          <p><strong>Warranty Date:</strong> {appliance.warrantyDate}</p>
          <p><strong>Cost:</strong> €{appliance.cost}</p>
          <p><strong>User Email:</strong> {appliance.email}</p>
        </div>
      )}
    </div>
  );
}
