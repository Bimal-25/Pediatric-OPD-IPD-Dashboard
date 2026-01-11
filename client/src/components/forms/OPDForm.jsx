export default function OPDForm() {
  return (
    <div className="form-card">
      <h2>OPD Patient Entry</h2>

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
          <option>First</option>
          <option>Second</option>
        </select>

        <input placeholder="Charges (Rs)" required />
        <input placeholder="Sickness" required />
        <input placeholder="Medicine" required />

        <select required>
          <option>In Progress</option>
          <option>Completed</option>
        </select>
      </div>

      <div className="form-actions">
        <button className="b3">POST</button>
        <button className="b2">UPDATE</button>
        <button className="b1">GET</button>
      </div>
    </div>
  );
}
