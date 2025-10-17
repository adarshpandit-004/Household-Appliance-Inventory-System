export default async function handler(req, res) {
    if (req.method === 'POST') {
      const { movie, showtime, mobile } = req.body;
  
      // Debug log to check if data is received correctly
      console.log('Data received:', { movie, showtime, mobile });
  
      // Backend validation: Check if all required fields are present
      if (!movie || !showtime || !mobile.match(/^\d{10}$/)) {
        console.log('Error: Invalid input data');
        return res.status(400).json({ message: 'Invalid input data.' });
      }
  
      // Log the booking details to the terminal (VSS)
      console.log(`Booking confirmed: ${movie} on ${showtime} for mobile: ${mobile}`);
  
      // Send a simplified confirmation response to the frontend
      return res.status(200).json({
        message: 'Booking successfully confirmed.',
      });
    } else {
      // Handle unsupported request methods (e.g., GET)
      res.status(405).json({ message: 'Method Not Allowed' });
    }
  }
  