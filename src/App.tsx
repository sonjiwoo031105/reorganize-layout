/* 여기에 주어진 요구 사항을 충족 시키기 위한 코드를 작성 및 수정해 주세요. */
import { useState } from "react";
import "./App.css";
import Card from "./components/Card";
import datas from "./data/posts.json"

function App() {
  const [cards, setCards] = useState(datas);

  const cardList = cards.map((card) => (
    <Card 
      id={card.id}
      title={card.title} 
      views={card.views} 
      upload_date={card.upload_date}
      bookmark={card.bookmark}
      key={card.id}
    />
  ));

  return (
    <div className="container">
      <div className="section __order">
        <select id="order_type">
          <option value="1">최근등록순</option>
          <option value="2">조회순</option>
        </select>
      </div>
      <div className="section">
        {cardList}
      </div>
    </div>
  );
}

export default App;
