import React from "react";

interface CardProps {
  imageUrl: string;
  category: string;
  heading: string;
}

const Card: React.FC<CardProps> = ({ imageUrl, category, heading }) => {
  return (
    <a
      href="#"
      className="bg-teal-500 relative w-[280px] h-[400px] shadow-lg rounded-lg m-8 bg-cover bg-center overflow-hidden inline-block"
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      <div className="absolute top-6 left-6 text-white">
        <p className="text-xs uppercase mb-2">{category}</p>
        <h3 className="text-2xl leading-tight">{heading}</h3>
      </div>
    </a>
  );
};

export default Card;
