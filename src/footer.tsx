import React from 'react';

const footer: React.FC = () => {

    const date  = new Date().getFullYear()

    return <footer className=''>
        <div className='section-inner'>
            
            <p className='body-text'>
                Chris Kinsman - {date}
            </p>
            
        </div>
    </footer>;
};

export default footer;