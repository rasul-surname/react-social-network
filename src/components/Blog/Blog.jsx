import React from 'react';
import BlogInfo from "./BlogInfo/BlogInfo";
import Posts from "./Posts/Posts";
import {BrowserRouter, NavLink, Route} from "react-router-dom";
import PostOne from "./Posts/PostItem/PostOne/PostOne";


const Blog = (props) => {
    return (
        <BrowserRouter>
        <div>
            <NavLink to={'/blog'}>
                <button>delete</button>
            </NavLink>
            <BlogInfo />

            <Route exact path='/blog' render={() => <Posts state={props.state} /> } />
            {props.state.map(elem => {
                return (
                    <Route path={'/blog/item' + elem.id} render={() => <PostOne state={props.state[elem.id - 1]} /> } />
                )
            })}

        </div>
        </BrowserRouter>
    );
}

export default Blog;