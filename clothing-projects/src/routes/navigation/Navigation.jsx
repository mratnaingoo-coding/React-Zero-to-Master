import { Fragment } from 'react'
import { Outlet, Link } from "react-router";

import './Navigation.scss'; // Assuming you have a Navigation.scss for styles
import { ReactComponent as Logo } from '../../assets/crown.svg';
const Navigation = () => {
  return (
    <Fragment>
        <div className="navigation">
            <Link className='logo-container' to='/'>
                <Logo className='logo' />
            
            </Link>
            <div className='nav-links-container'>
                <Link className='nav-link' to='/shop'>Shop</Link>
                <Link className='nav-link' to='/sign-in'>Sign In</Link>
            </div>
        </div>
        <Outlet />
    
    </Fragment>
  )
}

export default Navigation