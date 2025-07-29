import React from 'react';
import ReactSpeedometer from 'react-d3-speedometer';

function Speedometer({ speed }) {
  return (
    <div style={{ maxWidth: 350, margin: '0 auto' }}>
      <ReactSpeedometer
        value={speed}
        minValue={0}
        maxValue={180}
        needleHeightRatio={0.7}
        startColor="#11998e"
        endColor="#38ef7d"
        textColor="#263859"
        ringWidth={40}
        width={320}
        height={200}
        currentValueText="Speed: ${value} km/h"
        valueFormat="d"
        needleColor="#263859"
        segments={7}
        customSegmentLabels={[
          { text: '0', position: 'INSIDE', color: '#263859' },
          { text: '', position: 'INSIDE', color: '#263859' },
          { text: '60', position: 'INSIDE', color: '#263859' },
          { text: '', position: 'INSIDE', color: '#263859' },
          { text: '120', position: 'INSIDE', color: '#263859' },
          { text: '', position: 'INSIDE', color: '#263859' },
          { text: '180', position: 'INSIDE', color: '#263859' },
        ]}
      />
    </div>
  );
}

export default Speedometer;
