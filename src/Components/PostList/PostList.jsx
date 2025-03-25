import React from "react";
import styles from "./PostList.module.scss";
import { useNavigate } from "react-router";

function PostList({ posts, users }) {

  const navigate = useNavigate()
  
  const post = posts.map((item) => {
    let author
    for (let i of users) {
      i.id === item.userId? author = i.name :''
    }
    return (
      <li key={item.id} className={styles.post}
        onClick={() => {navigate(`/${item.id}`) }}>
        <div>
          <h3 className={styles.title}>{`Title:`}</h3>
          <p>{`${item.title}`}</p>
        </div>
        <div>
          <h3>{`Body:`}</h3>
          <p>{item.body}</p>
        </div>
        <div>
          <h4>{`Author: ${author}`}</h4>
        </div>
      </li>
    );
  });

  return (
    <>
      <ul className={styles.ul}>
        {post}
      </ul>
    </>
   
  );
}

export default PostList;
