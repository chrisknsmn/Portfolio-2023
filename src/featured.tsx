import React, { useEffect, useState } from 'react';
import data from "./json/data.json"

const Featured: React.FC = () => {

    type Website = {
        title: string;
        desc: string;
        link: string;
        img: string;
    };

    const website: Website[] = data;

    // const processedPeople = website.map((website: Website) => {
    // // Perform any desired operations or transformations on the data
    // return {
    //     ...website,
    //     title: website.title + 1, // Increment age by 1 as an example
    // };
    // });

    return <section className='mar-t-oct'>
        <div className='section-inner'>
            <h2>Work</h2>
            <h3 className='h3'>Featured projects</h3>
            <div className='featured-cards'>
                {website.map((data,index) => (
                    <div className='featured-card' key={index}>

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