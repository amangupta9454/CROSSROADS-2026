// Attendance.jsx (or rename file to Attendance.jsx)
import React from 'react';

const Attendance = () => {
  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        margin: 0,
        padding: 0,
        overflow: 'hidden',
        position: 'fixed',
        inset: 0,           // top/right/bottom/left = 0
      }}
    >
      <iframe
        src="https://crossroads-attendence.netlify.app/scan"
        title="Attendance Scanner"
        style={{
          width: '100%',
          height: '100%',
          border: 'none',
          display: 'block',
        }}
        allow="camera; microphone; fullscreen; geolocation"
        allowFullScreen
      />
    </div>
  );
};

export default Attendance;