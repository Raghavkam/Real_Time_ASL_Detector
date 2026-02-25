import React, { useState } from 'react';
import Webcam from 'react-webcam';
import './App.css';

function App() {
  const [prediction, setPrediction] = useState('');

  // Webcam options
  const videoConstraints = {
    facingMode: "user"
  };

  const handleCapture = async (imageSrc) => {
    // Send image to backend Flask API for classification
    try {
      const response = await fetch('http://localhost:5000/classify', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ image: imageSrc }),
      });
      const data = await response.json();
      setPrediction(data.prediction);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="App">
      <h1>ASL Gesture Recognition</h1>
      <Webcam
        audio={false}
        height="auto"
        screenshotFormat="image/jpeg"
        width="100%"
        videoConstraints={videoConstraints}
        onUserMedia={() => console.log("Camera is ready")}
        onScreenshot={(imageSrc) => handleCapture(imageSrc)}
      />
      <p>Prediction: {prediction}</p>
    </div>
  );
}

export default App;