import React, { useEffect, useState } from 'react'
import { fetchUserAlbums, fetchUserPosts } from '../api/fetch';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

export const UserAlbums = () => {
  const [albums, setAlbums] = useState([]);
  const { state } = useLocation();

  useEffect(() => {
    fetchUserAlbums(state.userId).then(data => setAlbums(data))
  }, [])

  return (
    <div>
      {albums.map((album, index) => (
        <div key={album.id} className='album'>
          <div className='album-no'>{index + 1}</div>
          <Link
            to={`/albums/:${album.id}`}
            state={{ albumId: album.id }}
            className='album-title'
          >
            {album.title}
          </Link>
        </div>
      ))
      }
    </div >
  )
}