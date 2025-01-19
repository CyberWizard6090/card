import { useEffect, useState } from "react";
import { fetchCards, deleteCard as apiDeleteCard, CardType } from "entities/Card";

export const useCardGrid = () => {
  const [cards, setCards] = useState<CardType[]>([]);

  useEffect(() => {
    loadCards();
  }, [cards]);

  const loadCards = async () => {
    try {
      const data = await fetchCards();
      setCards(data);
    } catch (error) {
      console.error(error);
    }
  };
  const addCardToGrid = (newCard: CardType) => {
    setCards((prev) => [...prev, newCard]);
  };
  const deleteCard = async (id: string) => {
    try {
      await apiDeleteCard(id);
      setCards((prev) => prev.filter((card:CardType) => card.id !== id));
    } catch (error) {
      console.error(error);
    }
  };

  return { cards, addCardToGrid,deleteCard };
};
