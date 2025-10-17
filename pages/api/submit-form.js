export default async function handler(req, res) {
    if (req.method === 'POST') {
      const { eircode, applianceType, brand, modelNumber, serialNumber, purchaseDate, warrantyDate } = req.body;
  
      // Validating data type using regex
      let errors = {};
      if (!eircode.match(/^[A-Za-z0-9]{3,4}\s?[A-Za-z0-9]{3}$/)) {
        errors.eircode = 'Invalid Eircode format.';
      }
      if (!applianceType.match(/^[A-Za-z\s]+$/)) {
        errors.applianceType = 'Appliance type is required.';
      }
      if (!brand.match(/^[A-Za-z\s]+$/)) {
        errors.brand = 'Brand is required.';
      }
      if (!modelNumber.match(/^[A-Za-z0-9\-]+$/))  {
        errors.modelNumber = 'Model number is required.';
      }
      if (!serialNumber.match(/^[A-Za-z0-9\-]+$/)) {
        errors.serialNumber = 'Serial number is required.';
      }
      if (!purchaseDate || new Date(purchaseDate) > new Date()) {
        errors.purchaseDate = 'Invalid purchase date.';
      }
      if (!warrantyDate || new Date(warrantyDate) < new Date(purchaseDate)) {
        errors.warrantyDate = 'Warranty date cannot be earlier than the purchase date.';
      }
  
      // If errors exist, return them along with the form data
      if (Object.keys(errors).length > 0) {
        return res.status(400).json({ errors });
      }
  
      // Process data (e.g., saving to a database)
      console.log('Form Data:', { eircode, applianceType, brand, modelNumber, serialNumber, purchaseDate, warrantyDate });
  
      // Returns success message
      return res.status(200).json({ message: 'Form submitted successfully!' });
    } else {
      res.status(405).json({ message: 'Method Not Allowed' });
    }
  }
  