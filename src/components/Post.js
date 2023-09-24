import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { fetchPost, fetchPostComments } from '../api/fetch';

export const Post = () => {
  const [post, setPost] = useState(null);
  const [comments, setComments] = useState([]);
  const params = useParams();
  const id = params.postId.slice(1);

  useEffect(() => {
    fetchPost(id).then(data => setPost(data));
    fetchPostComments(id).then(data => setComments(data));
  }, [])

  return (
    <div className='post-container'>
      {post && (
        <div className='post-info'>
          <div className="post-body">
            <h1>Title</h1>
            <div className="post-body-title">
              {post.title}
            </div>
            <h2>Content</h2>
            <div className="post-body-text">
              {post.body}
            </div>
          </div>
          <h3>Comments</h3>
          {comments.map((comment) => (
            <div className="post-comment" key={comment.id}>
              <div className="post-comment-name">{comment.name}</div>
              <div className="post-comment-email">{comment.email}</div>
              <div className="post-comment-body">{comment.body}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}