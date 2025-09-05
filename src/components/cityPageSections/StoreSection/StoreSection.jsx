import React from "react";
import StoreIndex from '../../sections/storeSection/storeIndex.jsx';
import './StoreSection.css';
import WaveDividerLayout from "../../layout/WaveDividerLayout";
export default function StoreSection(props) {
  return (
    <section className="store-section">
      <WaveDividerLayout position="top" hideWave={false} hideBoat={true}/>
      {StoreIndex()}
       <WaveDividerLayout position="bottom" hideWave={false} hideBoat={true}/>
    </section>
  );
}
