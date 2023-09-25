import React, { useEffect, useState } from 'react'
import { fetchPosts } from '../../api/fetch';
import './PostsList.scss'
import { Link } from 'react-router-dom';

export const PostsList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPosts().then(data => setPosts(data))
  }, [])

  return (
    <div className='posts-container'>
      {posts && posts.map((post, index) => (
        <div key={post.id} className='post'>
          <div className='post-no'>{index + 1}.</div>
          <Link
            to={`/posts/:${post.id}`}
            state={{ postId: post.id }}
            className='post-title'
          >
            {post.title}
          </Link>
        </div>
      ))
      }
    </div >
  )
}