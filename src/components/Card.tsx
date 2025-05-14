import "./Card.css";
import type { CardType } from "../types/card"

function Card(props: CardType) {
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
