import React, { useEffect, useState } from 'react';
import Speedometer from './components/Speedometer';

function App() {
  const [speed, setSpeed] = useState(0);

  useEffect(() => {
    const ws = new WebSocket('ws://localhost:8000/ws');
    ws.onmessage = (event) => {
      const data = JSON.parse(event.data);
      setSpeed(data.speed);
    };
    return () => ws.close();
  }, []);

  return (
    <div style={{ textAlign: 'center', marginTop: 40 }}>
      <h1 style={{ fontFamily: 'Montserrat', color: '#263859' }}>Live Speed (km/h)</h1>
      <Speedometer speed={speed} />
    </div>
  );
}

export default App;
