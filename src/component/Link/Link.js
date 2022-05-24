import React from 'react';

const Link = (props) => {
    const {name, link}= props.route;
    return (
      
        <nav className='mr-10'>
           <a href={link}>{name}</a>
        </nav>
    );
};

export default Link;