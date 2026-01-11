export default function IPDForm() {
  return (
    <div className="form-card">
      <h2>IPD Patient Entry</h2>

      <div className="form-grid">
        <input type="date" required />
        <input placeholder="Name" required />

        <select required>
          <option>0-3</option>
          <option>4-6</option>
          <option>7-9</option>
          <option>10-12</option>
        </select>

        <input placeholder="Auto ID: 0001" disabled />

        <select required>
          <option>Room-101</option>
          <option>Room-102</option>
          <option>Room-103</option>
          <option>Room-104</option>
          <option>Room-105</option>
          <option>Room-106</option>
          <option>Room-107</option>
          <option>Room-108</option>
        </select>

        <select required>
          <option>Deluxe</option>
          <option>Semi-Deluxe</option>
        </select>

        <input placeholder="Room Charges" required />
        <input placeholder="Medicine Charges" required />
        <input placeholder="Sickness" required />

        <select required>
          <option>In Progress</option>
          <option>Completed</option>
        </select>

        <input type="date" required />
      </div>

      <div className="form-actions">
        <button className="b3">POST</button>
        <button className="b2">UPDATE</button>
        <button className="b1">GET</button>
      </div>
    </div>
  );
}
