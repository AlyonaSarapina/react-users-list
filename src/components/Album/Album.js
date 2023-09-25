import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './Album.scss';
import { fetchPhotos } from '../../api/fetch';

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
          <div className='album-body' key={album.id}>
            <h5 className="album-body-title">
              {album.title}
            </h5>
            <Link to={'https://via.placeholder.com/600/92c952'} className="album-body-img">
              <img src={album.thumbnailUrl} alt="album img" />
            </Link>
          </div>
        ))
      )}
    </div>
  )
}