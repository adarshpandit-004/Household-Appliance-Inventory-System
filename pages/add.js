import { useState } from 'react';

export default function AddAppliance() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    address: '',
    mobile: '',
    email: '',
    eircode: '',
    applianceType: '',
    brand: '',
    modelNumber: '',
    serialNumber: '',
    purchaseDate: '',
    warrantyDate: '',
    cost: '',
  });

  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const errs = {};

    if (!formData.firstName.match(/^[A-Za-z]+$/)) errs.firstName = 'Only letters allowed';
    if (!formData.lastName.match(/^[A-Za-z]+$/)) errs.lastName = 'Only letters allowed';
    if (!formData.mobile.match(/^\d{10}$/)) errs.mobile = 'Must be 10 digits';
    if (!formData.email.match(/^\S+@\S+\.\S+$/)) errs.email = 'Invalid email';
    if (!formData.eircode.match(/^[A-Za-z0-9]{7}$/)) errs.eircode = 'Must be 7 characters';
    if (!formData.modelNumber.match(/^[A-Za-z0-9\-]+$/)) errs.modelNumber = 'Invalid model number';
    if (!formData.serialNumber.match(/^[A-Za-z0-9\-]+$/)) errs.serialNumber = 'Invalid serial number';
    if (!formData.purchaseDate) errs.purchaseDate = 'Required';
    if (!formData.warrantyDate || new Date(formData.warrantyDate) < new Date(formData.purchaseDate)) {
      errs.warrantyDate = 'Warranty cannot be before purchase';
    }

    return errs;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      const response = await fetch('/api/add-appliance', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.text();
      setMessage(data);
      setErrors({});
    } catch (err) {
      setMessage('Submission failed.');
    }
  };

  return (
    <div className="container p-4 max-w-xl mx-auto">
      <h2 className="text-xl font-bold mb-4">Add Appliance</h2>
      <form onSubmit={handleSubmit} className="space-y-3">
        <h3 className="font-semibold">User Details</h3>
        <input name="firstName" placeholder="First Name" onChange={handleChange} className="input" />
        {errors.firstName && <p className="text-red-500">{errors.firstName}</p>}

        <input name="lastName" placeholder="Last Name" onChange={handleChange} className="input" />
        {errors.lastName && <p className="text-red-500">{errors.lastName}</p>}

        <input name="address" placeholder="Address" onChange={handleChange} className="input" />

        <input name="mobile" placeholder="Mobile (10 digits)" onChange={handleChange} className="input" />
        {errors.mobile && <p className="text-red-500">{errors.mobile}</p>}

        <input name="email" placeholder="Email" onChange={handleChange} className="input" />
        {errors.email && <p className="text-red-500">{errors.email}</p>}

        <input name="eircode" placeholder="Eircode" onChange={handleChange} className="input" />
        {errors.eircode && <p className="text-red-500">{errors.eircode}</p>}

        <h3 className="font-semibold">Appliance Details</h3>

        <select name="applianceType" onChange={handleChange} className="input">
          <option value="">--Select Appliance Type--</option>
          <option value="Fridge">Fridge</option>
          <option value="Washer">Washer</option>
          <option value="Microwave">Microwave</option>
          <option value="Washing Machine">Washing Machine</option>
          <option value="Laptop">Laptop</option>
        </select>

        <input name="brand" placeholder="Brand" onChange={handleChange} className="input" />

        <input name="modelNumber" placeholder="Model Number" onChange={handleChange} className="input" />
        {errors.modelNumber && <p className="text-red-500">{errors.modelNumber}</p>}

        <input name="serialNumber" placeholder="Serial Number" onChange={handleChange} className="input" />
        {errors.serialNumber && <p className="text-red-500">{errors.serialNumber}</p>}

        <input type="date" name="purchaseDate" onChange={handleChange} className="input" />
        {errors.purchaseDate && <p className="text-red-500">{errors.purchaseDate}</p>}

        <input type="date" name="warrantyDate" onChange={handleChange} className="input" />
        {errors.warrantyDate && <p className="text-red-500">{errors.warrantyDate}</p>}

        <input type="number" step="0.01" name="cost" placeholder="Cost" onChange={handleChange} className="input" />

        <button type="submit" className="btn bg-green-600 text-white px-4 py-2">Add Appliance</button>
      </form>

      {message && <div className="mt-4 text-blue-700">{message}</div>}
    </div>
  );
}
