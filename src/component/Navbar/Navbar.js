import React from 'react';
import Link from '../Link/Link';

const Navbar = () => {
    const routes = [
        {id: 1, name: 'Home', link:'/home'},
        {id: 2, name: ' Shop', link:'/Shop'},
        {id: 3, name: 'Copuns', link:'/Coupns'},
        {id: 4, name: ' Contact', link:'/Contact'}
    ]
    return (
        <div>
            <ul>
                {
                     routes.map(route => <Link route={route} key={route.id}></Link>)
                }
            </ul>
        </div>
    );
};

export default Navbar;