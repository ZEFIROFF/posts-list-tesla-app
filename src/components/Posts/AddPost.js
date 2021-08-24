import React, {useState} from 'react';

const AddPost = ({create}) => {
    const [post, setPost] = useState({author: '', title: '', description: ''});

    const addNewPost = (e) => {
        let date = new Date();
        e.preventDefault();
        const newPost = {
            ...post, id: Date.now(), publishedAt: date.toString().substr(0, 25),
        }
        create(newPost)
        setPost({author: '', title: '', description: ''})
    }

    return (
        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel"
             aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <div className="about-post text-primary w-100"><h2>Here you can create posts in our
                            application.</h2>
                        </div>
                        <button type="button" className="btn-close" data-bs-dismiss="modal"
                                aria-label="Close"></button>
                    </div>
                    <div className="modal-body add-post">
                        <div className="input-group form-add-post">
                            <span className="input-group-text btn btn-outline-primary" id="addon-wrapping">@</span>
                            <input value={post.author} onChange={e => setPost({...post, author: e.target.value})}
                                   type="text" className="form-control " placeholder="Author"
                                   aria-label="Author" aria-describedby="addon-wrapping"/>
                        </div>
                        <div className="input-group my-3">
                            <input value={post.title} onChange={e => setPost({...post, title: e.target.value})}
                                   type="text"
                                   className="form-control" placeholder="Title"
                                   aria-label="Title" aria-describedby="addon-wrapping"/>
                        </div>
                        <div className="input-group">
                            <span className="input-group-text btn btn-outline-primary">Description</span>
                            <textarea value={post.description} rows="2"
                                      onChange={e => setPost({...post, description: e.target.value})}
                                      className="form-control" aria-label="Description"></textarea>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <input className="btn btn-outline-primary d-block my-2 w-100" onClick={addNewPost} type="submit"
                               value="Add post"/>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default AddPost;
