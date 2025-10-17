import db from '../../lib/db';
import sanitizeHtml from 'sanitize-html';
import dotenv from 'dotenv';

dotenv.config();

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const {
      firstName, lastName, address, mobile, email, eircode,
      applianceType, brand, modelNumber, serialNumber,
      purchaseDate, warrantyDate, cost
    } = req.body;

    try {
      // Log form data to terminal
      console.log(`\n--- New Appliance Submitted ---`);
      console.log({
        firstName, lastName, address, mobile, email, eircode,
        applianceType, brand, modelNumber, serialNumber,
        purchaseDate, warrantyDate, cost
      });

      const cleanSerial = sanitizeHtml(serialNumber);

      // 1. Check if user exists
      const [userRows] = await db.execute(
        'SELECT UserID FROM User WHERE Email = ? OR Mobile = ?',
        [email, mobile]
      );

      let userId;
      if (userRows.length === 0) {
        const [result] = await db.execute(
          'INSERT INTO User (FirstName, LastName, Address, Mobile, Email, Eircode) VALUES (?, ?, ?, ?, ?, ?)',
          [firstName, lastName, address, mobile, email, eircode]
        );
        userId = result.insertId;
      } else {
        userId = userRows[0].UserID;
      }

      // 2. Check for duplicate appliance
      const [applianceCheck] = await db.execute(
        'SELECT * FROM Appliance WHERE SerialNumber = ?', [cleanSerial]
      );
      if (applianceCheck.length > 0) {
        return res.status(400).send('Appliance already exists');
      }

      // 3. Insert appliance
      await db.execute(
        'INSERT INTO Appliance (UserID, ApplianceType, Brand, ModelNumber, SerialNumber, PurchaseDate, WarrantyExpirationDate, Cost) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
        [userId, applianceType, brand, modelNumber, cleanSerial, purchaseDate, warrantyDate, cost]
      );

      res.status(200).send('New appliance added successfully');

    } catch (err) {
      console.error('Server Error:', err.message);
      res.status(500).send('Error adding appliance');
    }
  } else {
    res.status(405).send('Method Not Allowed');
  }
}
