import "./Card.css";
import type { CardType } from "../types/card"

type CardProps = {
  card: CardType,
  onToggleBookmark: () => void
}

const Card = ({ card, onToggleBookmark }: CardProps) => {
  return (
    <li className="card--container" id={card.id}>
      <div className="header">
        <div className="card--tag">
          <span className="upload-date">
            {new Date(card.upload_date).toISOString().slice(0, 10)}
          </span>
        </div>
        <div className="card--tag">
          <span className="icon bookmark" onClick={onToggleBookmark}>
            {card.bookmark ? (
              <i className="fa fa-bookmark fill"></i>
            ) : (
              <i className="fa fa-bookmark"></i>
            )}
          </span>
        </div>
      </div>
      <div className="card--content">
        <span className="title">{card.title}</span>
      </div>
      <div className="footer">
        <div className="card--tag">
          <span className="views">{card.views}</span>
          views
        </div>
      </div>
    </li>
  );
}
export default Card;
