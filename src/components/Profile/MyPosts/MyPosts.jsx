import React from 'react';
import Post from "./Post/Post";
import classes from './MyPosts.module.css';

const MyPosts = (props) => {
    let newPostElement = React.createRef();

    function addPost() {
        props.addPost();
        props.updateNewPostText('');
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
                    <textarea ref={newPostElement} onChange={changeNewPostText} value={props.state.newPostText} />
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={classes.postsList}>
                {props.state.postsData.map(data => {
                    return <Post message={data.message} likesCount={data.likesCount} />
                })}
            </div>
        </div>
    )
}

export default MyPosts;