import React from 'react';
import {addPostActionCreator, updateNewPostTextChangeActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import StoreContext from "../../../StoreContext";

const MyPostsContainer = (props) => {

    return (
        <StoreContext.Consumer>
            {(store) => {
                let state = store.getState();

                function addPost() {
                    store.dispatch(addPostActionCreator());
                }
                function changeNewPostText(text) {
                    store.dispatch(updateNewPostTextChangeActionCreator(text));
                }
                return <MyPosts
                    updateNewPostText={changeNewPostText}
                    addPost={addPost}
                    state={state.profilePage.postsData}
                    newPostText={state.profilePage.newPostText}
                />
            }}
        </StoreContext.Consumer>
    )
}

export default MyPostsContainer;