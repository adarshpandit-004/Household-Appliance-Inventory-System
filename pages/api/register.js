import sanitizeHtml from 'sanitize-html';

let inventory = []; // Creating an array that can hold the appliance data

export default function handler(req, res) {
  if (req.method === 'POST') {
    try {
      let {
        eircode,
        applianceType,
        brand,
        model,
        serial,
        purchaseDate,
        warrantyDate
      } = req.body;

      // Simple input validation
      if (
        !eircode || !applianceType || !brand || !model || !serial ||
        !purchaseDate || !warrantyDate ||
        new Date(warrantyDate) < new Date(purchaseDate)
      ) {
        return res.status(400).json({ message: 'Invalid input. Please check your fields.' });
      }

      // Sanitize all inputs to prevent XSS
      eircode = sanitizeHtml(eircode);
      applianceType = sanitizeHtml(applianceType);
      brand = sanitizeHtml(brand);
      model = sanitizeHtml(model);
      serial = sanitizeHtml(serial);
      purchaseDate = sanitizeHtml(purchaseDate);
      warrantyDate = sanitizeHtml(warrantyDate);

      // Log formatted output to console (VSS vertical format)
      console.log(`New appliance registered:
  Appliance Type : ${applianceType}
  Brand          : ${brand}
  Model Number   : ${model}
  Serial Number  : ${serial}
`);

      // Add to in-memory inventory
      inventory.push({ eircode, applianceType, brand, model, serial, purchaseDate, warrantyDate });

      // Return success response
      return res.status(200).json({
        message: `Appliance ${applianceType} ${brand} ${model} successfully added to inventory.`
      });

    } catch (err) {
      console.error("Server error:", err); // Internal logging
      return res.status(500).json({ message: 'Something went wrong. Please try again later.' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    return res.status(405).json({ message: `Method ${req.method} Not Allowed` });
  }
}
