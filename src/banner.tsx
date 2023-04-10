import React from 'react';
import './index.css'

const Banner: React.FC = () => {
    return <section>
        <div className='section-inner'>
            <h1>Christopher Kinsmsn</h1>
            <p className='banner-text'>
                Developing <a href="#" className='bold'>dynamic</a> and <a href="#" className='bold'>accessible</a> experiences for the web.
            </p>
            <div className='flex'>
                <a href="#contact" className='btn'>Connect</a>
            </div>
            
        </div>
    </section>;
};

export default Banner;