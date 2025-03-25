/* eslint-disable react-hooks/exhaustive-deps */
import { Route, Routes } from "react-router";
import styles from "./App.module.scss";
import React from "react";
import PostList from "./Components/PostList/PostList";
import Post from "./Components/Post/Post";


function App() {
  const url = "https://jsonplaceholder.typicode.com";
  const [posts, setPosts] = React.useState([]);
  const [users, setUsers] = React.useState([]);
  const [comments, setComments] = React.useState([]);

  React.useEffect(async () => {
    fetch(`${url}/posts`)
      .then((respPosts) => respPosts.json())
      .then((json) => setPosts(json))
      .catch(er=>console.log(er))
    
    fetch(`${url}/users`)
      .then((respUsers) => respUsers.json())
      .then((json) => setUsers(json))
      .catch(er => console.log(er))
    
    fetch(`${url}/comments`)
      .then((respComments) => respComments.json())
      .then((json) => setComments(json))
      .catch((er) => console.log(er));
    
  }, []);
  // console.log(comments)
  return (
    <>
      <a className={styles.a} href="https://github.com/MihailDenisenko/flet">Просмотреть код</a>
      <Routes>
        <Route
          exact
          path="/"
          element={<PostList posts={posts} users={users} />}
        />
        <Route
          exact
          path="/:id/"
          element={<Post posts={posts} users={users} comments={comments} />}
        />

        <Route path="*" element={<h1>"Error Page"</h1>} />
      </Routes>
    </>
  );
}

export default App;
