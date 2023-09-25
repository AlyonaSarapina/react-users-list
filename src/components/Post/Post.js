import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import './Post.scss'
import { Link } from 'react-router-dom';
import { fetchPost, fetchPostComments } from '../../api/fetch';

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
            <h1 className="post-body-title">{post.title}</h1>
            <p className="post-body-text">
              {post.body}
            </p>
          </div>
          <div className='post-comments'>
            <h3>Comments</h3>
            {comments.map((comment) => (
              <div className="post-comment" key={comment.id}>
                <div className="post-comment-name">{comment.name}</div>
                <Link to={`mailto: ${comment.email}`} className="post-comment-email">{comment.email}</Link>
                <div className="post-comment-body">{comment.body}</div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}