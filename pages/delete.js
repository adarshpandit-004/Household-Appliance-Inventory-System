import { useState } from 'react';
import Link from 'next/link';

export default function DeleteAppliance() {
  const [serialNumber, setSerialNumber] = useState('');
  const [appliance, setAppliance] = useState(null);
  const [message, setMessage] = useState('');
  const [deleted, setDeleted] = useState(false);

  const handleFetch = async (e) => {
    e.preventDefault();
    setMessage('');
    setDeleted(false);

    const res = await fetch('/api/search-appliance', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ serialNumber }),
    });

    if (res.ok) {
      const data = await res.json();
      setAppliance(data);
    } else {
      const error = await res.text();
      setMessage(error);
      setAppliance(null);
    }
  };

  const handleDelete = async () => {
    const res = await fetch('/api/delete-appliance', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ serialNumber }),
    });

    const text = await res.text();
    setMessage(text);
    setDeleted(true);
    setAppliance(null);
  };

  return (
    <div className="container p-4 max-w-xl mx-auto">
      <h2 className="text-xl font-bold mb-4">Delete Appliance</h2>

      {!deleted && (
        <form onSubmit={handleFetch} className="space-y-3">
          <input
            type="text"
            value={serialNumber}
            onChange={(e) => setSerialNumber(e.target.value)}
            placeholder="Enter Serial Number"
            className="input"
            required
          />
          <button type="submit" className="btn bg-blue-600 text-white px-4 py-2">
            Find Appliance
          </button>
        </form>
      )}

      {appliance && (
        <div className="mt-4 p-3 border rounded bg-gray-50">
          <h3 className="font-semibold mb-2">Confirm Deletion</h3>
          <p><strong>Type:</strong> {appliance.applianceType}</p>
          <p><strong>Brand:</strong> {appliance.brand}</p>
          <p><strong>Serial:</strong> {appliance.serialNumber}</p>
          <button onClick={handleDelete} className="mt-3 btn bg-red-600 text-white px-4 py-2">
            Confirm Delete
          </button>
        </div>
      )}

      {message && (
        <div className="mt-4 text-blue-700">
          <p>{message}</p>
          <Link href="/" className="underline text-green-700">Return Home</Link>
        </div>
      )}
    </div>
  );
}
