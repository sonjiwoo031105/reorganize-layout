import React, { useMemo, useState } from "react";
import Card from "./Card"
import type { CardType } from "../types/card";

type Props = {
  cards: CardType[];
};

const CardList: React.FC<Props> = ({ cards }) => {
  const [orderType, setOrderType] = useState("1");

  const sortedCards = useMemo(() => {
    const sorted = [...cards];
    if (orderType === "1") {
      return sorted.sort((a, b) =>
        new Date(b.upload_date).getTime() -
        new Date(a.upload_date).getTime()
      );
    } else if (orderType === "2") {
      return sorted.sort((a, b) => b.views - a.views);
    }
    return sorted;
  }, [orderType, cards]);

  return (
    <>
      <div className="section __order">
        <select 
          id="order_type"
          value={orderType}
          onChange={(e) => setOrderType(e.target.value)}
        >
          <option value="1">최근등록순</option>
          <option value="2">조회순</option>
        </select>
      </div>
      <div className="section">
        {sortedCards.map((card) => (
          <Card 
            id={card.id}
            title={card.title} 
            views={card.views} 
            upload_date={new Date(card.upload_date).toISOString().slice(0, 10)}
            bookmark={card.bookmark}
            key={card.id}
          />
        ))}
      </div>
    </>
  );
};

export default CardList;
