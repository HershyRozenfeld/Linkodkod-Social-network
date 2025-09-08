import "./post.css";
export default function AddPost(props: {
  title: string;
  imgUrl: string;
  likesCount: number;
  createDate: any;
}) {
  console.log(props);

  return (
    <>
      <div className="card">
        <section className="start-section">
          <h2>{props.title}</h2>
        </section>
        <img className="img-post" src={props.imgUrl} />
        <section className="end-section">
          <p>{props.createDate}</p>
          <button className="like">like ({props.likesCount})</button>
        </section>
      </div>
    </>
  );
}
