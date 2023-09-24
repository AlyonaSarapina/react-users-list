const BASE_URL = 'https://jsonplaceholder.typicode.com'


export const fetchUsers = () => {
  return fetch(`${BASE_URL}/users`).then(res => res.json());
}

export const fetchUserPosts = (userId) => {
  return fetch(`${BASE_URL}/posts?userId=${userId}`).then(res => res.json());
}

export const fetchUserAlbums = (userId) => {
  return fetch(`${BASE_URL}/albums?userId=${userId}`).then(res => res.json());
}

export const fetchPost = (postId) => {
  return fetch(`${BASE_URL}/posts/${postId}`).then(res => res.json());
}

export const fetchPostComments = (postId) => {
  return fetch(`${BASE_URL}/posts/${postId}/comments`).then(res => res.json());
}

export const fetchPhotos = (albumId) => {
  return fetch(`https://jsonplaceholder.typicode.com/albums/${albumId}/photos`).then(res => res.json());
}