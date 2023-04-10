import React from 'react';

const About: React.FC = () => {

    const profileImageSrc = "./images/profile.png";

    return <section id="about" className='mar-t-oct'>
        <div className='section-inner'>

            <h2>About</h2>
            <div className='grid-wpr'>

                <div className='grid-half mobile-only'>
                    <div className='profile-card mar-b-dbl'>
                        <img src={profileImageSrc} />
                    </div>
                </div>

                <div className='grid-half'>
                    <p className='body-text pad-r'>
                        I am a web developer based in Toronto Canada, specializing in front end web development. Currently building web applications at Interad.
                    </p>
                    <p className='mar-t-dbl'>
                        <a href="#" className='external-link'>Work</a>
                    </p>
                    <p>
                        <a href="https://github.com/chrisknsmn" className='external-link'>Github</a>
                    </p>
                </div>

                <div className='grid-half desktop-only'>
                    <div className='profile-card'>
                        <img src={profileImageSrc} />
                    </div>
                </div>

            </div>
        </div>
    </section>;

};

export default About;
