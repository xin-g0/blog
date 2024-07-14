import React, { useState, useEffect } from 'react';
import './App.css';
import PostForm from './components/PostForm';
import PostList from './components/PostList';

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const storedPosts = JSON.parse(localStorage.getItem('posts')) || [];
    setPosts(storedPosts);
  }, []);

  const addPost = (title, content) => {
    const newPost = { id: Date.now(), title, content };
    const updatedPosts = [...posts, newPost];
    setPosts(updatedPosts);
    localStorage.setItem('posts', JSON.stringify(updatedPosts));
  };

  return (
    <div className="App">
      <h1>My Blog</h1>
      <PostList posts={posts} />
      <PostForm addPost={addPost} />
    </div>
  );
}

export default App;