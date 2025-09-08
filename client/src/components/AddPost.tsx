import "/src/css/post.css";
export default function AddPost(props: {
  writer: string;
  imgUrl: string;
  likesCount: number;
  createDate: any;
  description: string;
}) {
  return (
    <>
      <div className="card">
        <section className="start-section">
          <h3 className="writer-name">{props.writer}</h3>
          <p className="description">{props.description}</p>
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
