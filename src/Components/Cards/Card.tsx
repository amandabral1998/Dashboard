import React from "react";
import './Card.css'

interface CardProps {
  title:string ,
  value: number | string
}

const Card :React.FC<CardProps>= ({ title, value }) => {
  return (
    <div className="card" >
      <h3  className="cardTitle">{title}</h3>
      <p  className="cardValue">{value}</p>
    </div>
  );
};

export default Card;
