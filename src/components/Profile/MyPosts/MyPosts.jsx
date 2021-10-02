import React from 'react';
import Post from "./Post/Post";
import classes from './MyPosts.module.css';

const MyPosts = (props) => {


    return (
        <div className={classes.postsBlock}>
            <h3>My posts</h3>
            <div className={classes.postsForm}>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={classes.postsList}>
                {props.postsData.map(data => {
                    return <Post message={data.message} likesCount={data.likesCount} />
                })}
            </div>
        </div>
    )
}

export default MyPosts;