import "./post.css";
export default function AddPost() {
  return (
    <div className="card">
      <h2>פוסט חדש</h2>
      <img className="img-post" src={"./src/components/logo.jpeg"} />
      <section>
        <button className="like">like</button>
        <p>פורסם:07/09/2025</p>
      </section>
    </div>
  );
}
