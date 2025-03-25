/* eslint-disable no-unused-vars */
import React from "react";
import styles from "./Post.module.scss";
import { useNavigate, useParams } from "react-router";


export default function Post({ posts, users, comments }) {
  const param = useParams().id
  const [comOpen, setComOpen] = React.useState(false)
  const navigate = useNavigate()  
  
  // console.log(param)
  const post = posts.filter(item => param == item.id)
  
  console.log(post)
  
  let author;
  for (let i of users) {
    i.id === post[0].userId ? (author = i.name) : "";
  }

  const commet = comments.filter(item => item.postId == param)

  console.log(commet)

  const commit = commet.map(item => {
    
    return (
      <li className={styles.comLi}>
        <p>{`email ${item.email}`}</p>
        <p>{`name ${item.name}`}</p>
        <p>{`text ${item.body}`}</p>
      </li>
    );
  })


  return (
    <div className={styles.post}>
      <div className={styles.backGo} onClick={() => { navigate('/')}}>
        <img
          style={{ width: "50px", display: "inline-block" }}
          src="https://avatars.mds.yandex.net/i?id=7b8ff0ce5511925d484fbf4a24cfb22ca54ec990-11941915-images-thumbs&n=13"
          alt="Back"
        />{" "}
        <p>Go Back</p>
      </div>
      <h3>Title:</h3>
      <p>{post[0].title}</p>
      <h3>Body:</h3>
      <p>{post[0].body}</p>
      <h3>Author</h3>
      <p>{author}</p>
      <h3 onClick={() => setComOpen(!comOpen)} className={styles.comOpen}>
        {!comOpen ? "Comments... click to open" : "Comments... click to close"}
      </h3>
      {comOpen ? <ul>{commit}</ul> : ""}
    </div>
  );
}
