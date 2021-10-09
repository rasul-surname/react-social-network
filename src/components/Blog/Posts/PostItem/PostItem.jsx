import React from 'react';
import classes from './PostItem.module.css';

const PostItem = (props) => {
    return (
        <div className={classes.post}>
            <div>
                {props.title}
            </div>
            <div>
                {props.subtitle}
            </div>
        </div>
    );
}


export default PostItem;