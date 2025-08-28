import './WaveDividerLayout.css';

const WaveDividerLayout = ({ position, hideWave = false, hideBoat = false, boatPosition }) => {
    return (
        <div className={`wave-divider ${position} ${hideWave ? 'hide-wave' : ''} ${hideBoat ? 'hide-svg' : ''} ${boatPosition ? boatPosition : 'left-boat'}`}>
            <svg
                viewBox="0 0 1440 320"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
            >
                <path
                    fill="white"
                    fillOpacity="1"
                    d="
                        M0,160 
                        C 120,80 240,240 360,160
                        C 480,80 600,240 720,160
                        C 840,80 960,240 1080,160
                        C 1200,80 1320,240 1440,160
                        L1440,320 L0,320 Z"
                ></path>
            </svg>
        </div>
    );
}

export default WaveDividerLayout;