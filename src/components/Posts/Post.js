import React from 'react';

const Post = (props) => {
    return (
        <div className="card post border-0 m-4">
            <div className="card-header"><h5 className="card-title">{props.post.title}</h5></div>
            <div className="card-body">
                <small><b>{props.post.publishedAt}</b> | <i>{props.post.author}</i></small>
                <p className="card-text mt-1">{props.post.description}</p>
            </div>
            <div className="card-more px-3 pb-1 d-flex justify-content-between">
                <p onClick={() => props.remove(props.post.id)} className="card-link text-white ">Delete</p>
                <a href={props.post.href} className="card-link text-white ">More</a>
            </div>
        </div>
    );
};

export default Post;