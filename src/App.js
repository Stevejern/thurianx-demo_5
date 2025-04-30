
import React, { useState } from 'react';

function App() {
  const [image, setImage] = useState(null);
  const [audio, setAudio] = useState(null);
  const [result, setResult] = useState(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
        randomPredict();
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAudioUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setAudio(url);
      randomPredict();
    }
  };

  const randomPredict = () => {
    const options = ['ดิบ', 'พร้อมตัด', 'สุก'];
    const choice = options[Math.floor(Math.random() * options.length)];
    setResult(choice);
  };

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#f2fbf2',
      fontFamily: 'Arial, sans-serif',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '2rem'
    }}>
      <h1 style={{
        color: '#2e7d32',
        fontSize: '2.5rem',
        marginBottom: '1rem'
      }}>ThurianX App</h1>
      <p style={{ color: '#4caf50', marginBottom: '2rem' }}>
        ตรวจสอบความสุกของทุเรียนด้วย AI (Image + Sound)
      </p>

      <div style={{
        backgroundColor: 'white',
        borderRadius: '12px',
        padding: '1.5rem',
        boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
        width: '100%',
        maxWidth: '400px'
      }}>
        <label style={{ display: 'block', marginBottom: '1rem', fontWeight: 'bold' }}>
          📷 Upload Image
        </label>
        <input type="file" accept="image/*" onChange={handleImageUpload} style={{ marginBottom: '1.5rem' }} />

        <label style={{ display: 'block', marginBottom: '1rem', fontWeight: 'bold' }}>
          🎵 Upload Sound
        </label>
        <input type="file" accept="audio/*" onChange={handleAudioUpload} />

        {image && (
          <div style={{ marginTop: '1.5rem' }}>
            <img src={image} alt="durian" style={{ width: '100%', borderRadius: '8px' }} />
          </div>
        )}

        {audio && (
          <div style={{ marginTop: '1rem' }}>
            <audio controls src={audio} style={{ width: '100%' }} />
          </div>
        )}

        {result && (
          <div style={{
            marginTop: '2rem',
            fontSize: '1.5rem',
            fontWeight: 'bold',
            color: '#2e7d32',
            textAlign: 'center'
          }}>
            ผลการวิเคราะห์: {result}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
