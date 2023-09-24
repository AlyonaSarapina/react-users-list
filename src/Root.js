import {
  Navigate, Route, HashRouter as Router, Routes,
} from 'react-router-dom';
import React from 'react';
import { App } from './App';
import { UserPosts } from './components/UserPosts'
import { UserAlbums } from './components/UserAlbums'
import { Post } from './components/Post';
import { Album } from './components/Album';
import UsersList from './components/UsersList';

export const Root = () => (
  <Router>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<UsersList />} />
        <Route path=':userId/posts' element={<UserPosts />} />
        <Route path=':userId/albums' element={<UserAlbums />} />
        <Route path='posts/:postId' element={<Post />} />
        <Route path='albums/:albumId' element={<Album />} />
        <Route path="home" element={<Navigate to=".." />} />
      </Route>
    </Routes>
  </Router>
);