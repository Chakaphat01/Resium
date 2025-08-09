import { Entity, Viewer } from 'resium';
import './App.css';
import { Cartesian3 } from 'cesium';
import { useState } from 'react';

function App() {
  const position = Cartesian3.fromDegrees(-74.0707383, 40.7117244, 100);
  const pointGraphics = { pixelSize: 20 };
  const [showEntity, setShowEntity] = useState(true);

  function handleToggle() {
    setShowEntity(!showEntity);
  }

  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      <div style={{ width: '100px', backgroundColor: '#f0f0f0', padding: '10px' }}>
        <button onClick={handleToggle}>Toggle Entity</button>
      </div>
      <Viewer style={{ flexGrow: 1 }}>
        {showEntity && <Entity position={position} point={pointGraphics} />}
      </Viewer>
    </div>
  );
}

export default App;