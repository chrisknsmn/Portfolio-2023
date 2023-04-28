import React, { useEffect, useState } from 'react';
import data from "./json/featured.json"

const Featured: React.FC = () => {

    type Website = {
        title: string;
        desc: string;
        link: string;
        img: string;
    };

    const website: Website[] = data;

    return <section className='mar-t-oct'>
        <div className='section-inner'>
            <h2 id="work">Work</h2>
            <h3 className='h3'>Featured projects</h3>
            <div className='featured-cards'>
                {website.map((data,index) => (
                    <div id={`featured-card-${index}`} className='featured-card' key={index}>
                        <div className='grid-wpr'>
                            <div className='grid-half mobile-only'>
                                <div className='featured-img-cont' style={{ backgroundImage: `url(${data.img})` }}></div>
                            </div>
                            <div className='grid-half'>
                                <div className='featured-text-cont'>
                                    <h3 className='featured-text-title'>
                                        {data.title}
                                    </h3>
                                    <div className='divider'></div>
                                    <p className='body-text'>
                                        {data.desc}
                                    </p>
                                    <p className='featured-text-link'>
                                        <a href={data.link} target="_blank" className='external-link'>Link</a>
                                    </p>
                                </div>
                            </div>
                            <div className='grid-half desktop-only'>
                                <div className='featured-img-cont' style={{ backgroundImage: `url(${data.img})` }}></div>
                            </div>
                        </div>
                        
                    </div>
                ))}
            </div>
            
        </div>
    </section>;
};

export default Featured;