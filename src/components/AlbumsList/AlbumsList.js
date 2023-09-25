import React, { useEffect, useState } from 'react'
import { fetchAlbums } from '../../api/fetch';
import './AlbumsList.scss'
import { Link } from 'react-router-dom';

export const AlbumsList = () => {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    fetchAlbums().then(data => setAlbums(data))
  }, [])

  return (
    <div className='albums-container'>
      {albums && albums.map((album, index) => (
        <div key={album.id} className='album'>
          <div className='album-no'>{index + 1}.</div>
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