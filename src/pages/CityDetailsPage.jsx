export default function CityDetails() {
  return (
    <div style={{ backgroundColor: "#f0f0ff", padding: "20px" }}>
      {/* Section 1 */}
      <section className="intro">
        <h1>City Details Page</h1>
        <p>This is an introduction to the city.</p>
      </section>

      {/* Section 2 */}
      <section style={{ marginBottom: "20px" }}>
        <h2>History</h2>
        <p>Details about the city's history go here...</p>
      </section>

      {/* Section 3 */}
      <section style={{ marginBottom: "20px" }}>
        <h2>Attractions</h2>
        <ul>
          <li>Famous Park</li>
          <li>Museum</li>
          <li>Downtown Area</li>
        </ul>
      </section>

      {/* Section 4 */}
      <section>
        <h2>Contact Info</h2>
        <p>Email: info@city.com</p>
      </section>
    </div>
  );
}
