import React from 'react';

const PostOne = (props) => {
    return (
        <div>
            <h1>
                {props.state.title}
            </h1>
            <p>
                {props.state.text}
            </p>
        </div>
    );
}


export default PostOne;