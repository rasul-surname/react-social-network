import React from 'react';
import PostItem from "./PostItem/PostItem";
import classes from "../../Navbar/Navbar.module.css";
import {NavLink} from "react-router-dom";

const Posts = (props) => {

    return (
        <div>
            {props.state.map(elem => {
                return (
                    <NavLink to={'item' + elem.id} activeClassName={classes.active}>
                        <PostItem title={elem.title} subtitle={elem.subtitle} />
                    </NavLink>
                )
            })}
            {/*<NavLink to='/item1' activeClassName={classes.active}>*/}
            {/*    <PostItem title={state[0].title} subtitle={state[0].subtitle} />*/}
            {/*</NavLink>*/}
            {/*<NavLink to='/item2' activeClassName={classes.active}>*/}
            {/*    <PostItem title={state[0].title} subtitle={state[0].subtitle} />*/}
            {/*</NavLink>*/}
        </div>
    );
}

export default Posts;