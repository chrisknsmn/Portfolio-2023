import React, { useState } from 'react';

interface DropdownMenuProps {
  items: { label: string; value: string }[];
  onSelect: (value: string) => void;
}

export const Dropdown: React.FC<DropdownMenuProps> = ({ items, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleItemClick = (value: string) => {
    onSelect(value);
    setIsOpen(false);
  };

  return (
    <div className={`dropdown-menu${isOpen ? ' open' : ''}`}>
      <button onClick={() => setIsOpen(!isOpen)} className={`dropdown-btn${isOpen ? ' open' : ''}`}>
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="white" viewBox="0 0 1024 1024"><path d="M340.864 149.312a30.592 30.592 0 0 0 0 42.752L652.736 512L340.864 831.872a30.592 30.592 0 0 0 0 42.752a29.12 29.12 0 0 0 41.728 0L714.24 534.336a32 32 0 0 0 0-44.672L382.592 149.376a29.12 29.12 0 0 0-41.728 0z"/></svg>
      </button>
      <ul>
        {items.map((item, index) => (
          <li key={index} onClick={() => handleItemClick(item.value)}>
            <a href={item.value}>{item.label}</a>
          </li>
        ))}
      </ul>
    </div>
  );

};




