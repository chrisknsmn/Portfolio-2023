import React from 'react';
import './index.css'
// import logo from '/images/logo-w.png';
import { Dropdown } from './dropdown';

const Header: React.FC = () => {

    const logo = "./images/logo-w.png";

    const items = [
      { label: 'Home', value: '#home' },
      { label: 'About', value: '#about' },
      { label: 'Contact', value: '#contact' },
      { label: 'Resume', value: '/pdf/kinsman_resume.pdf' },
    ];

    const handleSelect = (value: string) => {
      console.log('Selected:', value);
    };

    return <header id='home'>
        <div className='header-inner'>
            
            <div className='header-links-desktop'>
                {items.map((item, index) => (
                    <a href={item.value} key={index}>{item.label}</a>
                ))}
            </div>

            <div className='header-icon-mob'>
              <Dropdown items={items} onSelect={handleSelect} />
            </div>

            <div className='header-logo'>
                <a href="#home">
                    <img src={logo} alt="logo" />
                </a>
            </div>
            
        </div>
    </header>;
};

export default Header;