import React from 'react';
import Dropdown from './Dropdown/Dropdown';
import './App.scss';

export default function App() {
  const handleSelect = () => {
    console.log('selected');
  };
  return (
    <div className="App">
      <Dropdown id="module" options={['Banner', 'Grid']} handleSelect={handleSelect} />
    </div>
  );
}
