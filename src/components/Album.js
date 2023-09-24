import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import { fetchPost, fetchPostComments } from '../api/fetch';
import { Link } from 'react-router-dom';
import { fetchPhotos } from '../api/fetch';

export const Album = () => {
  const [albums, setAlbums] = useState([]);
  const { state } = useLocation();

  useEffect(() => {
    fetchPhotos(state.albumId).then(data => setAlbums(data));
  }, [])

  return (
    <div className='album-container'>
      {albums && (
        albums.map(album => (
          <div className='album-info' key={album.id}>
            <div className="album-body">
              <h3>Title</h3>
              <div className="album-body-title">
                {album.title}
              </div>
              <h4>Preview</h4>
              <Link to={'https://via.placeholder.com/600/92c952'} className="album-body-text">
                <img src={album.thumbnailUrl} alt="album img" />
              </Link>
            </div>
          </div>
        ))
      )}
    </div>
  )
}