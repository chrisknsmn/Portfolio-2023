import React from 'react';
import './index.css'
// import logo from '/images/logo-w.png';
import { Dropdown } from './dropdown';

const Header: React.FC = () => {

    const logo = "./images/logo-w.png";

    const items = [
      { label: 'Home', value: 'home' },
      { label: 'About', value: 'about' },
      { label: 'Contact', value: 'contact' },
      { label: 'Resume', value: './pdf/kinsman_resume.pdf' },
    ];

    const handleSelect = (value: string) => {
      console.log('Selected:', value);
    };

    const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
        event.preventDefault();
        const target = event.currentTarget.getAttribute("href");
        const section = target ? document.querySelector("#" + target) : null;
        const height = section as HTMLElement;
        console.log(height.offsetTop);
        if (section) {
          window.scrollTo({
            top: height.offsetTop,
            behavior: "smooth",
          });
        }
    };

    const handleClickLogo = (event: React.MouseEvent<HTMLAnchorElement>) => {
      event.preventDefault();
      const target = event.currentTarget.getAttribute("href");
      const section = target ? document.querySelector("#home") : null;
      const height = section as HTMLElement;
      console.log(height.offsetTop);
      if (section) {
        window.scrollTo({
          top: height.offsetTop,
          behavior: "smooth",
        });
      }
    };

    return <header>
        <div className='header-inner'>
            
            <div className='header-links-desktop'>
                
                {items.map((item, index) => {
                  if (item.label == 'Resume') {
                    return (
                      <a href={item.value} key={index} target="_blank">
                        {item.label}
                      </a>
                    );
                  } else {
                    return (
                      <a href={item.value} key={index} onClick={handleClick}>
                        {item.label}
                      </a>
                    );
                  }
                })}

            </div>

            <div className='header-icon-mob'>
              <Dropdown items={items} onSelect={handleSelect} />
            </div>

            <div className='header-logo'>
                <a href="#" onClick={handleClickLogo}>
                    <img src={logo} alt="logo" />
                </a>
            </div>
            
        </div>
    </header>;
};

export default Header;