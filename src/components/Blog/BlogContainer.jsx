import React from 'react';
import {connect} from "react-redux";
import Blog from "./Blog";

let mapStateToProps = (state) => {
    return {
        state: state.blogPage.data
    }
}

let mapDispatchToProps = (dispatch) => {
    return {

    }
}

const BlogContainer = connect(mapStateToProps, mapDispatchToProps)(Blog)


export default BlogContainer;