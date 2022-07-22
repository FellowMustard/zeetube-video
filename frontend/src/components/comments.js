import Comment from "./comment";

function Comments() {
  const commentGrow = (e) => {
    e.style.height = "5px";
    e.style.height = `${e.scrollHeight}px`;
  };
  return (
    <section className="comment-section">
      <p className="comment-counter">5 Comments</p>
      <div className="private-comment">
        <img
          src="https://media.npr.org/assets/img/2021/08/11/gettyimages-1279899488_wide-f3860ceb0ef19643c335cb34df3fa1de166e2761-s1100-c50.jpg"
          className="comment-image"
        ></img>
        <textarea
          className="private-textarea"
          onInput={(e) => commentGrow(e.target)}
          placeholder="Add a comment..."
        ></textarea>
      </div>
      <div className="public-comment-container">
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
      </div>
    </section>
  );
}

export default Comments;
