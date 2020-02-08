import React from 'react';
import Dropdown from './Dropdown/Dropdown';
import PlainButton from './Buttons/PlainButton/PlainButton';
import './App.scss';

export default function App() {
  const handleSelect = () => {
    console.log('selected');
  };
  const handleClick = () => {
    console.log('selected');
  };
  return (
    <div className="App">
      <Dropdown id="module" options={['Banner', 'Grid']} handleSelect={handleSelect} />
      <PlainButton label="Button" handleClick={handleClick} />
    </div>
  );
}
