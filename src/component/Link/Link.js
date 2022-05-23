import React from 'react';

const Link = (props) => {
    const {name}= props.route;
    return (
      
        <div>
            <li>{name}</li>
        </div>
    );
};

export default Link;