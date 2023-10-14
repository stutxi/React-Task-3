import React, { useState } from 'react';

const ColorPicker = ({ colors }) => {
  const [selectedColor, setSelectedColor] = useState(null);
  const [showColors, setShowColors] = useState(false);

  const handleButtonClick = () => {
    setShowColors(!showColors);
  }

  const handleColorClick = (color) => {
    setSelectedColor(color);
    setShowColors(false);
  }

  return (
    <div style={{ 
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh' 
    }}>
      <button
        onClick={handleButtonClick} 
        style={{
          backgroundColor: selectedColor || 'white',
          marginBottom: '20px' 
        }}
      >
        Pick a color
      </button>
      {showColors && (
        <div>
          {colors.map((color, index) => (
            <div
              key={index}
              style={{
                backgroundColor: color,
                width: '30px',
                height: '30px',
                display: 'inline-block',
                margin: '5px',
                cursor: 'pointer'
              }}
              onClick={() => handleColorClick(color)}
            ></div>
          ))}
        </div>
      )}
      {selectedColor && <p>You picked: {selectedColor}</p>}
    </div>
  );
}

export default ColorPicker;
