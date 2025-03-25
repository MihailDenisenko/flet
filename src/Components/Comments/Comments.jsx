function Comments({ comments }) {
  return (
    <div className="comments">
      <h2>Комментарии ({comments.length})</h2>
      {comments.map((comment) => (
        <div key={comment.id} className="comment">
          <h4>{comment.name}</h4>
          <div className="comment-email">{comment.email}</div>
          <p>{comment.body}</p>
        </div>
      ))}
    </div>
  );
}

export default Comments;
