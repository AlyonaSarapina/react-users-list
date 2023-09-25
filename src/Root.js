import {
  Navigate, Route, HashRouter as Router, Routes,
} from 'react-router-dom';
import React from 'react';
import { App } from './App';
import { UserPosts } from './components/UserPosts/UserPosts'
import { UserAlbums } from './components/UserAlbums/UserAlbums'
import { Post } from './components/Post/Post';
import { Album } from './components/Album/Album';
import { UsersList } from './components/UsersList/UsersList';
import { AlbumsList } from './components/AlbumsList/AlbumsList';
import { PostsList } from './components/PostsList/PostsList';

export const Root = () => (
  <Router>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<UsersList />} />
        <Route path="/posts" element={<PostsList />} />
        <Route path="/albums" element={<AlbumsList />} />
        <Route path=':userId/posts' element={<UserPosts />} />
        <Route path=':userId/albums' element={<UserAlbums />} />
        <Route path='posts/:postId' element={<Post />} />
        <Route path='albums/:albumId' element={<Album />} />
        <Route path="home" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  </Router>
);