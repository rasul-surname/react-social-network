import React from 'react';
import classes from './Post.module.css';

const Post = (props) => {

    return (
        <div className={classes.post}>
            <img src="https://whatsism.com/uploads/posts/2018-07/1530546770_rmk_vdjbx10.jpg" alt=""/>

            <div className={classes.desc}>
                {props.message}
                <span>{props.likesCount}</span>
            </div>
        </div>
    )
}

export default Post;