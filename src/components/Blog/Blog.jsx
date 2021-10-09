import React from 'react';
import BlogInfo from "./BlogInfo/BlogInfo";
import Posts from "./Posts/Posts";
import {BrowserRouter, Route} from "react-router-dom";
import PostOne from "./Posts/PostItem/PostOne/PostOne";


const Blog = (props) => {
    return (
        <BrowserRouter>
        <div>
            <BlogInfo />

            <Route path='/blog' render={() => <Posts state={props.state} /> } />
            {props.state.map(elem => {
                return (
                    <Route path={'/item' + elem.id} render={() => <PostOne state={props.state[elem.id - 1]} /> } />
                )
            })}

        </div>
        </BrowserRouter>
    );
}

export default Blog;