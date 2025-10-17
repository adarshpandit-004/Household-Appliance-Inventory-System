import { useEffect, useState } from 'react';

export default function ViewAppliances() {
  const [appliances, setAppliances] = useState([]);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('/api/view-appliances');
      if (res.ok) {
        const data = await res.json();
        setAppliances(data);
      } else {
        const text = await res.text();
        setMessage(text);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="container p-4 max-w-3xl mx-auto">
      <h2 className="text-xl font-bold mb-4">All Appliances</h2>

      {message && <p className="text-red-600">{message}</p>}

      {appliances.length > 0 ? (
        <div className="grid gap-4">
          {appliances.map((appliance, i) => (
            <div key={i} className="border p-4 rounded bg-gray-50">
              <p><strong>User:</strong> {appliance.FirstName} {appliance.LastName}</p>
              <p><strong>Type:</strong> {appliance.ApplianceType}</p>
              <p><strong>Brand:</strong> {appliance.Brand}</p>
              <p><strong>Serial:</strong> {appliance.SerialNumber}</p>
              <p><strong>Cost:</strong> €{appliance.Cost}</p>
              <p><strong>Email:</strong> {appliance.Email}</p>
            </div>
          ))}
        </div>
      ) : (
        !message && <p>No appliances found.</p>
      )}
    </div>
  );
}
