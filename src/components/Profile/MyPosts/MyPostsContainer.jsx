import React from 'react';
import {addPostActionCreator, updateNewPostTextChangeActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";

const MyPostsContainer = (props) => {
    let state = props.store.getState();

    function addPost() {
        props.store.dispatch(addPostActionCreator());
    }
    function changeNewPostText(text) {
        props.store.dispatch(updateNewPostTextChangeActionCreator(text));
    }
    return (
        <MyPosts
            updateNewPostText={changeNewPostText}
            addPost={addPost}
            state={state.profilePage.postsData}
            newPostText={state.profilePage.newPostText}
        />
    )
}

export default MyPostsContainer;