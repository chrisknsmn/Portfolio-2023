import React, { useEffect, useState } from 'react';
import data from "./json/work.json"

import Linkedin from './icons/linkedin';
import Github from './icons/github';

const Contact: React.FC = () => {

    return <section id="contact" className='contact'>
        <div className='section-inner'>
            
            <div className='contact-text'>
                <h2>Contact</h2>
                <p className='body-text'>
                    View my <a href="./pdf/kinsman_resume.pdf" target='_blank' className='link'>Resume</a> for more information about my work experience. If you have any questions don't hesitate to contact me.
                </p>
            </div>
            <div className='mar-tb-dbl'>

                <a href="https://www.linkedin.com/in/chrisknsmn/" className="contact-link" target='_blank'>
                    <Linkedin />
                    <span>Chrisknsmn</span>
                </a>

                <a href="https://github.com/chrisknsmn" className="contact-link mar-t" target='_blank'>
                    <Github />
                    <span>Chrisknsmn</span>
                </a>

            </div>
            
        </div>
    </section>;
};

export default Contact;