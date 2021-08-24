import React from 'react';
import Post from "./Post";

const PostList = ({posts, title, remove}) => {
    if (posts.length <= 0) {
        return <div className="text-primary mx-auto my-2"><h1 className="text-center">Post not found / is blank
            :c</h1></div>
    }
    return (
        <div className="text-primary">
            <h1 className="text-center">{title}</h1>
            <div className="wrapper-posts d-flex flex-wrap">
                {posts.map((post) => <Post remove={remove} post={post}
                                           key={post.id}/>)}
            </div>
        </div>
    );
};
// данных просто нет7
export default PostList;
