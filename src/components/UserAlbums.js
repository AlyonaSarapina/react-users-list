import React, { useEffect, useState } from 'react'
import { fetchUserAlbums, fetchUserPosts } from '../api/fetch';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

export const UserAlbums = () => {
  const [albums, setAlbums] = useState([]);
  const params = useParams();
  const id = params.userId.slice(1);

  useEffect(() => {
    fetchUserAlbums(id).then(data => setAlbums(data))
  }, [])

  return (
    <div>
      {albums.map((album, index) => (
        <div key={album.id} className='album'>
          <div className='album-no'>{index + 1}</div>
          <Link
            to={`/albums/:${album.id}`}
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