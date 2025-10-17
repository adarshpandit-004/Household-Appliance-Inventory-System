import db from '../../lib/db';
import sanitizeHtml from 'sanitize-html';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { serialNumber } = req.body;

    if (!serialNumber) {
      return res.status(400).send('Serial number is required.');
    }

    const cleanSerial = sanitizeHtml(serialNumber.trim());

    try {
      // Fetch appliance before deleting
      const [check] = await db.execute(
        `SELECT Appliance.*, User.FirstName, User.LastName 
         FROM Appliance 
         JOIN User ON Appliance.UserID = User.UserID 
         WHERE SerialNumber = ?`,
        [cleanSerial]
      );

      if (check.length === 0) {
        return res.status(404).send('No appliance found with that serial number.');
      }

      const appliance = check[0];

      // Delete appliance
      await db.execute(
        'DELETE FROM Appliance WHERE SerialNumber = ?',
        [cleanSerial]
      );

      // ✅ Log full appliance info
      console.log(`🗑️ Appliance deleted:`);
      console.log({
        User: `${appliance.FirstName} ${appliance.LastName}`,
        Type: appliance.ApplianceType,
        Brand: appliance.Brand,
        Serial: appliance.SerialNumber,
        Cost: appliance.Cost,
        PurchaseDate: appliance.PurchaseDate,
      });

      res.status(200).send('Appliance deleted successfully.');
    } catch (err) {
      console.error('Delete error:', err.message);
      res.status(500).send('Error deleting appliance.');
    }
  } else {
    res.status(405).send('Method Not Allowed');
  }
}
