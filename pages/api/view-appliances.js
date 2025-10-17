import db from '../../lib/db';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const [results] = await db.execute(`
        SELECT Appliance.*, User.FirstName, User.LastName, User.Email 
        FROM Appliance
        JOIN User ON Appliance.UserID = User.UserID
        ORDER BY Appliance.PurchaseDate DESC
      `);

      if (results.length === 0) {
        return res.status(200).json([]);
      }

      res.status(200).json(results);
    } catch (err) {
      console.error('View error:', err.message);
      res.status(500).send('Failed to load appliances.');
    }
  } else {
    res.status(405).send('Method Not Allowed');
  }
}