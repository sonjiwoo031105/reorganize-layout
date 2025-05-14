import { useMemo, useState } from "react"
import Card from "./Card"
import type { CardType } from "../types/card"
import datas from "../data/posts.json"

const CardList = () => {
  const [cards, setCards] = useState<CardType[]>(datas)
  const [orderType, setOrderType] = useState("1")

  const sortedCards = useMemo(() => {
    const bookmarked = cards.filter(card => card.bookmark)
    const nonBookmarked = cards.filter(card => !card.bookmark)

    const sortCards = (a: CardType, b: CardType) => {
      if (orderType === "1") {
        return new Date(b.upload_date).getTime() - new Date(a.upload_date).getTime()
      } else if (orderType === "2") {
        return b.views - a.views;
      }
      return 0
    }

    const sortedBookmarked = bookmarked.sort(sortCards)
    const sortedNonBookmarked = nonBookmarked.sort(sortCards)

    return [...sortedBookmarked, ...sortedNonBookmarked]
  }, [orderType, cards])

  const toggleBookmark = (id: string) => {
    setCards(prev => 
      prev.map(card => 
        card.id === id ? { ...card, bookmark: !card.bookmark} : card
      )
    )
  }

  return (
    <>
      <div className="section __order">
        <select 
          id="order_type"
          value={orderType}
          onChange={(e) => setOrderType(e.target.value)}
          className="border-2 border-gray-300 p-2 rounded-md"
        >
          <option value="1">최근등록순</option>
          <option value="2">조회순</option>
        </select>
      </div>
      <div className="section flex flex-wrap">
        {sortedCards.map((card) => (
          <Card 
            key={card.id}
            card={card}
            onToggleBookmark={() => toggleBookmark(card.id)}
          />
        ))}
      </div>
    </>
  )
}

export default CardList
