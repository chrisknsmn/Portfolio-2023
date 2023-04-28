import React, { useEffect, useState } from 'react';
import data from "./json/work.json"

type Website = {
    title: string;
    desc: string;
    link: string;
    git: string;
};

const website: Website[] = data;

const Work: React.FC = () => {

    const [currentIndex, setCurrentIndex] = useState(0);
    const [slideDirection, setSlideDirection] = useState<'slide-start' | 'slide-null'>('slide-null');

    const nextSlide = () => {
        setSlideDirection('slide-start');
        setCurrentIndex((prevIndex) => (prevIndex + 1) % website.length);

        setTimeout(() => {
            setSlideDirection('slide-null');
        }, 500);

    };

    const prevSlide = () => {
        setSlideDirection('slide-start');
        setCurrentIndex((prevIndex) => (prevIndex - 1 + website.length) % website.length);

        setTimeout(() => {
            setSlideDirection('slide-null');
        }, 500);
    };

    const getCardMax = (index: number) => {
        var out = index;
        if(out == website.length) {
            out = 0;
        }
        return out;
    };

    const hasGit = (index: string) => {
        if(index == '') {
            return 'display-none';
        } else {
            return '';
        }
    };

    return (
        <section>
            <div className='section-inner pad-t-0'>
                <h3>
                    More projects
                </h3>
                <div className="carousel">
                    <div className="carousel-inner">

                        <div className={`carousel-card ${slideDirection}`}>
                            <div className='carousel-card-inner'>
                                <h4>
                                    {website[getCardMax(currentIndex)].title}
                                </h4>
                                <p>
                                    {website[getCardMax(currentIndex)].desc}
                                </p>
                                <p className='carousel-card-inner-link'>
                                    <a href={website[getCardMax(currentIndex)].link} target="_blank" className='external-link mar-r'>Link</a>
                                    <a href={website[getCardMax(currentIndex)].git} target="_blank" className={`external-link ${hasGit(website[getCardMax(currentIndex)].git)}`}>Github</a>
                                </p>
                            </div>
                        </div>
                        <div className='carousel-divider'></div>
                        <div className={`mob-mar-t-dbl desktop-only carousel-card ${slideDirection}`}>
                            <div className='carousel-card-inner'>
                                <h4>
                                    {website[getCardMax(currentIndex+1)].title}
                                </h4>
                                <p>
                                    {website[getCardMax(currentIndex+1)].desc}
                                </p>
                                <p className='carousel-card-inner-link'>
                                    <a href={website[getCardMax(currentIndex+1)].link} target="_blank" className='external-link mar-r'>Link</a>
                                    <a href={website[getCardMax(currentIndex+1)].git} target="_blank" className={`external-link ${hasGit(website[getCardMax(currentIndex+1)].git)}`}>Github</a>
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className='carousel-buttons'>
                        <button onClick={prevSlide}> &#60; </button>
                        <button onClick={nextSlide}> &#62; </button>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Work;