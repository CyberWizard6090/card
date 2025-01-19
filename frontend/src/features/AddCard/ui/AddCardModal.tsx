import React, { useState } from "react";


import { useAddCard } from "../model/useAddCard";
import "./AddCardModal.scss";
import { Button } from "shared/ui/button";
import { useCardGrid } from "widgets/CardGrid";
type Props = {
  onClose: () => void;
};

export const AddCardModal = ({ onClose }: Props) => {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const { createCard } = useAddCard();
  const { addCardToGrid } = useCardGrid();
  const handleSubmit = async () => {
    const newCard = { id: `${Date.now()}`, title, text }; 
    addCardToGrid(newCard);
    await createCard({ title, text });
    setTitle("");
    setText("");
    onClose();
  };

  return (
    <div className="AddCardModal">
      <div className="AddCardModal__content">
        <input
        className="AddCardModal__input"
          type="text"
          placeholder="Какой будет заголовок?"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
         className="AddCardModal__input"
          
          placeholder="О чем хотите написать?"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <Button onClick={handleSubmit}>Создать</Button>
      
        <Button onClick={onClose}>Отменить</Button>
      </div>
    </div>
  );
};
