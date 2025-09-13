import "./ourPartners.css";
export default function Partners() {
   return (
  <section className="our-partners-section">
  <fieldset className="partners-box">
    <legend className="partners-title">OUR PARTNERS</legend>

    {/* Title Partner */}
    <div className="title-partner box"></div>

    {/* Powered By (two boxes side by side) */}
    <div className="powered-row">
      <div className="powered box"></div>
      <div className="powered box"></div>
    </div>

    {/* Regular Partners (four boxes in a row) */}
    <div className="partners-row">
      <div className="partner box"></div>
      <div className="partner box"></div>
      <div className="partner box"></div>
      <div className="partner box"></div>
    </div>
  </fieldset>
</section>

);
}