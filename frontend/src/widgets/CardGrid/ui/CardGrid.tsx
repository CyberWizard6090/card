import React from "react";

import { Card } from "entities/Card";
import { useCardGrid } from "../model/useCardGrid";
import { CardType } from "entities/Card";
import "./CardGrid.scss";
type PropsType ={
  State: boolean;
}
export const CardGrid = ({State}:PropsType) => {
  const { cards, deleteCard } = useCardGrid();

  return (
    <div className="CardGrid">
      <div className="CardGrid__grid">
        {cards.map((card:CardType, index) => (
          <Card
            key={card.id}
            title={`${index + 1}. ${card.title}`}
            text={card.text}
            onDelete={() => deleteCard(card.id)} stateBtn={State} id={""}          />
        ))}
      </div>
    </div>
  );
};
