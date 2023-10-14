import React from 'react';
import ColorPicker from './components/ColorPicker';

const App = () => {
  const colors = ['red', 'lime', 'blue'];

  return (
    <div>
      <ColorPicker colors={colors} />
    </div>
  );
}

export default App;
