import { AddCardModal } from "features/AddCard";
import React, { useState } from "react";
import { Button } from "shared/ui/button";
import { CardGrid } from "widgets/CardGrid";
import "./CardsPage.scss"

export const CardsPage = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [ischange, setСhange] = useState(false);

  return (
    <div className="CardsPage">
      <div className="CardsPage__header">
      <Button onClick={() => setModalOpen(true)}>Добавить карточку</Button>
      <Button onClick={() => setСhange(!ischange)}>{ischange ?  "Отменить редактирование":"Редактировать карточку" }</Button>
      </div>
     
      {isModalOpen && <AddCardModal onClose={() => setModalOpen(false)} />}
      <CardGrid State={ischange} />
    </div>
  );
};
