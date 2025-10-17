import db from '../../lib/db';
import sanitizeHtml from 'sanitize-html';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const {
      applianceType, brand, modelNumber, purchaseDate,
      warrantyDate, cost, address, mobile, email, serialNumber
    } = req.body;

    const cleanSerial = sanitizeHtml(serialNumber);

    try {
      // Update appliance
      await db.execute(
        'UPDATE Appliance SET ApplianceType=?, Brand=?, ModelNumber=?, PurchaseDate=?, WarrantyExpirationDate=?, Cost=? WHERE SerialNumber=?',
        [applianceType, brand, modelNumber, purchaseDate, warrantyDate, cost, cleanSerial]
      );

      // Update user info
      await db.execute(
        'UPDATE User SET Address=?, Mobile=?, Email=? WHERE UserID = (SELECT UserID FROM Appliance WHERE SerialNumber=?)',
        [address, mobile, email, cleanSerial]
      );

      res.status(200).send('Appliance has been updated.');
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Error updating appliance.');
    }
  } else {
    res.status(405).send('Method Not Allowed');
  }
}
