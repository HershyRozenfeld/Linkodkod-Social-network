import "/src/css/post.css";
export default function AddPost(props: {
  Writer: string;
  ImgUrl: string;
  LikesCount: number;
  CreateDate: any;
  Description: string;
}) {
  return (
    <>
      <div className="card">
        <section className="start-section">
          <h3 className="writer-name">{props.Writer}</h3>
          <p className="description">{props.Description}</p>
        </section>
        <img className="img-post" src={props.ImgUrl} alt="image for tengible the content"/>
        <section className="end-section">
          <div className="date">
            <p>{props.CreateDate}</p>
          </div>
          <div className="like">
            <div className="like-button">like ({props.LikesCount})</div>
          </div>
        </section>
      </div>
    </>
  );
}
