import { useState } from 'react';

export default function Home() {
  const [movie, setMovie] = useState('');
  const [showtime, setShowtime] = useState('');
  const [mobile, setMobile] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Frontend validation
    if (!movie || !showtime || !mobile.match(/^\d{10}$/)) {
      setMessage('Please fill in all fields correctly.');
      return;
    }

    // Send data to the backend
    const response = await fetch('/api/book-ticket', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ movie, showtime, mobile }),
    });

    const data = await response.json();
    setMessage(data.message);
  };

  return (
    <div className="wrapper">
      <div className="card">
        <h1 className="heading">Cinema Ticket Booking</h1>
        <form onSubmit={handleSubmit}>
          <div className="formGroup">
            <label className="label">Movie</label>
            <select onChange={(e) => setMovie(e.target.value)} className="input">
              <option value="">Select a movie</option>
              <option value="Top Gun Maverick">Top Gun Maverick</option>
              <option value="Django Unchained">Django Unchained</option>
              <option value="Avatar 2">Avatar 2</option>
            </select>
          </div>
          <div className="formGroup">
            <label className="label">Showtime</label>
            <select onChange={(e) => setShowtime(e.target.value)} className="input">
              <option value="">Select a showtime</option>
              {movie === 'Top Gun Maverick' && (
                <>
                  <option value="1:00 PM">1:00 PM</option>
                  <option value="3:00 PM">3:00 PM</option>
                  <option value="6:00 PM">6:00 PM</option>
                </>
              )}
              {movie === 'Django Unchained' && (
                <>
                  <option value="11:00 AM">11:00 AM</option>
                  <option value="2:00 PM">2:00 PM</option>
                  <option value="9:00 PM">9:00 PM</option>
                </>
              )}
              {movie === 'Avatar 2' && (
                <>
                  <option value="12:00 AM">12:00 AM</option>
                  <option value="4:00 PM">4:00 PM</option>
                  <option value="6:00 PM">6:00 PM</option>
                </>
              )}
            </select>
          </div>
          <div className="formGroup">
            <label className="label">Mobile</label>
            <input
              type="text"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              placeholder="Enter your mobile number"
              className="input"
            />
          </div>
          <button type="submit" className="button">Book Tickets</button>
        </form>
        {message && <div className="success">{message}</div>}
      </div>
    </div>
  ); 
}
