import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { fetchPhotos } from '../api/fetch';

export const Album = () => {
  const [albums, setAlbums] = useState([]);
  const params = useParams();
  const id = params.albumId.slice(1);

  useEffect(() => {
    fetchPhotos(id).then(data => setAlbums(data));
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