import React, { useEffect, useState } from 'react'
import { fetchUserPosts } from '../api/fetch';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

export const UserPosts = () => {
  const [posts, setPosts] = useState([]);
  const params = useParams();
  const id = params.userId.slice(1);

  useEffect(() => {
    fetchUserPosts(id).then(data => setPosts(data))
  }, [])

  return (
    <div>
      {posts.map((post, index) => (
        <div key={post.id} className='post'>
          <div className='post-no'>{index + 1}</div>
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