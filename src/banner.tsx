import React from 'react';
import './index.css'

const Banner: React.FC = () => {

    const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
        event.preventDefault();

        const target = event.currentTarget.getAttribute("href");
        const section = target ? document.querySelector(target) : null;
        const height = section as HTMLElement;
        console.log(height.offsetTop);
        if (section) {
          window.scrollTo({
            top: height.offsetTop - 80,
            behavior: "smooth",
          });
        }
    };

    return <section id='home'>
        <div className='section-inner'>
            <h1 className='pad-t'>Christopher Kinsman</h1>
            <p className='banner-text'>
                Developing <a href="#featured-card-0" className='bold' onClick={handleClick}>dynamic</a> and <a href="#featured-card-1" className='bold' onClick={handleClick}>optimized</a> experiences for the web.
            </p>
            <div className='flex'>
                <a href="#contact" className='btn' onClick={handleClick}>Connect</a>
            </div>
            
        </div>
    </section>;
};

export default Banner;