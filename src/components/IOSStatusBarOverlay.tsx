import React from 'react';

const IOSStatusBarOverlay: React.FC = () => {
  // Check if device is iOS
  const isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);
  
  if (!isIOS) {
    return null;
  }

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: 'env(safe-area-inset-top, 44px)',
        background: 'rgba(18, 18, 32, 0.64)',
        WebkitBackdropFilter: 'blur(12px)',
        zIndex: 9999,
      }}
    />
  );
};

export default IOSStatusBarOverlay; 