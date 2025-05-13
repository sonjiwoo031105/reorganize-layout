/* 여기에 주어진 요구 사항을 충족 시키기 위한 코드를 작성 및 수정해 주세요. */
import "./Card.css";

type Card = {
    id: string,
    title: string,
    views: number,
    upload_date: string,
    bookmark: boolean
}

function Card(props: Card) {
  return (
    <li className="card--container" id={props.id}>
      <div className="header">
        <div className="card--tag">
          <span className="upload-date">{props.upload_date}</span>
        </div>
        <div className="card--tag">
          <span className="icon bookmark">
            <i className="fa fa-bookmark"></i>
          </span>
        </div>
      </div>
      <div className="card--content">
        <span className="title">{props.title}</span>
      </div>
      <div className="footer">
        <div className="card--tag">
          <span className="views">{props.views}</span>
          views
        </div>
      </div>
    </li>
  );
}
export default Card;
