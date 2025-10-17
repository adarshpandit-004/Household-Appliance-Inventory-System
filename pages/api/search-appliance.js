import db from '../../lib/db';
import sanitizeHtml from 'sanitize-html';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { serialNumber } = req.body;

    if (!serialNumber) {
      return res.status(400).send('Serial number is required');
    }

    const cleanSerial = sanitizeHtml(serialNumber.trim());

    try {
      const [results] = await db.execute(
        `SELECT Appliance.*, User.Address, User.Mobile, User.Email 
         FROM Appliance 
         JOIN User ON Appliance.UserID = User.UserID 
         WHERE SerialNumber = ?`, [cleanSerial]
      );

      if (results.length === 0) {
        return res.status(404).send('Appliance not found');
      }

      const appliance = results[0];

      // Return cleaned object
      res.status(200).json({
        applianceType: appliance.ApplianceType,
        brand: appliance.Brand,
        modelNumber: appliance.ModelNumber,
        serialNumber: appliance.SerialNumber,
        purchaseDate: appliance.PurchaseDate.toISOString().split('T')[0],
        warrantyDate: appliance.WarrantyExpirationDate.toISOString().split('T')[0],
        cost: appliance.Cost,
        address: appliance.Address,
        mobile: appliance.Mobile,
        email: appliance.Email
      });

    } catch (err) {
      console.error('Search error:', err.message);
      return res.status(500).send('Server error');
    }
  } else {
    res.status(405).send('Method Not Allowed');
  }
}
