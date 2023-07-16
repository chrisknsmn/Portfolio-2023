import React from 'react';

const About: React.FC = () => {

    const profileImageSrc = "./images/profile.png";

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

    return <section id="about" className='mar-t-oct'>
        <div className='section-inner'>

            <h2 className='mar-t-quad'>About</h2>
            <div className='grid-wpr'>

                <div className='grid-half mobile-only'>
                    <div className='profile-card mar-b-dbl'>
                        <img src={profileImageSrc} alt="Profile image" />
                    </div>
                </div>

                <div className='grid-half'>
                    <p className='body-text pad-r'>
                        I am a web developer, specializing in front end web development. Currently building web applications at <a href="https://www.interadcorp.com/" target='_blank' className='link'>Interad</a>.
                    </p>
                    <p className='mar-t-dbl'>
                        <a href="#work" className='external-link' onClick={handleClick}>Work</a>
                    </p>
                    <p>
                        <a href="https://github.com/chrisknsmn" className='external-link' target='_blank'>Github</a>
                    </p>
                </div>

                <div className='grid-half desktop-only'>
                    <div className='profile-card'>
                        <img src={profileImageSrc} alt="Profile image" />
                    </div>
                </div>

            </div>
        </div>
    </section>;

};

export default About;
