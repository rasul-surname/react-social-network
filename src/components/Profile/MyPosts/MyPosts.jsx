import React from 'react';
import Post from "./Post/Post";
import classes from './MyPosts.module.css';
import {addPostActionCreator, updateNewPostTextChangeActionCreator} from "../../../redux/profile-reducer";

const MyPosts = (props) => {
    let newPostElement = React.createRef();

    function addPost() {
        props.addPost();
    }
    function changeNewPostText() {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }
    return (
        <div className={classes.postsBlock}>
            <h3>My posts</h3>
            <div className={classes.postsForm}>
                <div>
                    <textarea ref={newPostElement} onChange={changeNewPostText} value={props.newPostText} />
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={classes.postsList}>
                {props.state.map(data => {
                    return <Post message={data.message} likesCount={data.likesCount} />
                })}
            </div>
        </div>
    )
}

export default MyPosts;