import React from 'react';
import { Html, useProgress } from "@react-three/drei";

const Loader = () => {
  const { progress } = useProgress(); // Correctly call useProgress to get the loading progress

  return (
    <Html center>
      <div className="canvas-load">
        <p style={{ fontSize: '22px', color: '#f1f1f1', fontWeight: '800', marginTop: '40px' }}>
          {progress.toFixed(2)}%
        </p>
      </div>
    </Html>
  );
};

export default Loader;
