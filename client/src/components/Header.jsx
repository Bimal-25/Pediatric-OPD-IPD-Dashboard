import logo from "../assets/assets/Hospital Logo.png";

export default function Header({ page, setPage }) {
  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="SunnyBear" />
        <h2>SunnyBear Pediatric Hospital</h2>
      </div>

      <nav>
        <button
          className={page === "dashboard" ? "active" : ""}
          onClick={() => setPage("dashboard")}
        >
          Dashboard
        </button>

        <button
          className={page === "ipd" ? "active" : ""}
          onClick={() => setPage("ipd")}
        >
          IPD
        </button>
      </nav>
    </header>
  );
}
