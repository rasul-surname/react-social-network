import React from 'react';
import {NavLink} from "react-router-dom";
import classes from './Navbar.module.css'

const Navbar = () => {

    return (
        <nav className={classes.nav}>
            <div className={classes.link}>
                <NavLink to='/profile' activeClassName={classes.active}>Profile</NavLink>
            </div>
            <div className={classes.link}>
                <NavLink to='/dialogs' activeClassName={classes.active}>Messages</NavLink>
            </div>
            <div className={classes.link}>
                <NavLink to='/blog' activeClassName={classes.active}>Blog</NavLink>
            </div>
            <div className={classes.link}>
                <NavLink to='/'>Music</NavLink>
            </div>
            <div className={classes.link}>
                <NavLink to='/'>Settings</NavLink>
            </div>
        </nav>
    )
}

export default Navbar;
