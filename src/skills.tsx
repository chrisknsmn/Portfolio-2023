import React from 'react';

const Skills: React.FC = () => {
    const skills = [
        { title: 'Home', value: ['Javascript','Typescript','HTML','CSS'] },
        { title: 'Frameworks', value: ['Node.js','React','Vue','jQuery'] },
        { title: 'Tools', value: ['Git','Docker','Wordpress'] },
        { title: 'Design', value: ['Adobe','Figma','Sketch'] },
    ];
    return <section>
        <div className='section-inner'>
            <h2 className='h3'>Featured Skills</h2>
            
            <div className='grid-wpr skill-card-cont'>
                {skills.map((skill, index) => (
                    <div className='grid-one-fourth' key={index}>
                        <div className='skill-card'>
                            <h3>
                                {skill.title}    
                            </h3>
                            <ul>
                                {skill.value.map((val, index) => (
                                    <li key={index}>{val}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    </section>;
};

export default Skills;