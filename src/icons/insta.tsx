import React from 'react';

const InstaIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}><g fill="currentColor"><path fillRule="evenodd" d="M12 7a5 5 0 1 0 0 10a5 5 0 0 0 0-10Zm-3 5a3 3 0 1 0 6 0a3 3 0 0 0-6 0Z" clipRule="evenodd"></path><path d="M18 5a1 1 0 1 0 0 2a1 1 0 0 0 0-2Z"></path><path fillRule="evenodd" d="M5 1a4 4 0 0 0-4 4v14a4 4 0 0 0 4 4h14a4 4 0 0 0 4-4V5a4 4 0 0 0-4-4H5Zm14 2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2Z" clipRule="evenodd"></path></g></svg>
    )
};

export default InstaIcon;