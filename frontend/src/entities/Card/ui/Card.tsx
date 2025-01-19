import React from "react";
import "./Card.scss";
import { CardType } from "../model/types";

interface CardProps extends CardType {
  onDelete: ()=> void ;
  stateBtn: boolean;
}
export const Card = ({ title, text, id,onDelete,stateBtn }:  CardProps) => {
  return (
    <div className="Card">
      <div className="Card__content">
        <h1 className="Card__Title">{title}</h1>
        <p className="Card__Text">{text}</p>
    {stateBtn?<div className="Card__btn" onClick={onDelete}>x</div>: <></>}
      </div>
    </div>
  );
};
