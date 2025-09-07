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
        <h2>{props.title}</h2>
        <img className="img-post" src={props.imgUrl} />
        <section className="end-section">
          <button className="like">like ({props.likesCount})</button>
          <p>{props.createDate}</p>
        </section>
      </div>
    </>
  );
}
