import React, { useEffect, useState } from 'react';
import data from "./json/work.json"

const Work: React.FC = () => {

    type Work = {
        title: string;
        desc: string;
        link: string;
        img: string;
    };

    const work: Work[] = data;

    return <section className=''>
        <div className='section-inner'>
            acdc
            <div className='featured-cards'>
                {work.map((data,index) => (
                    <div className='featured-card' key={index}>
                        
                    </div>
                ))}
            </div>
            
        </div>
    </section>;
};

export default Work;