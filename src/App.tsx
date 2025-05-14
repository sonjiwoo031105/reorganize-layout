import "./App.css";
import CardList from "./components/CardList"
import type { CardType } from "./types/card";
import datas from "./data/posts.json"

function App() {
  const cards: CardType[] = datas;

  return (
    <div className="container">
      <CardList cards={cards} />
    </div>
  );
}

export default App;
