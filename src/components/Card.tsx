/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Atropos } from "atropos/react";

interface CardProps {
  bg: any;
  title: string;
  subtitle: string;
}

export const Card = ({ bg, title, subtitle }: CardProps) => {
  return (
    <div className="w-64 m-6">
      <Atropos
        className="game-box"
        rotateTouch="scroll-y"
        rotateXMax={24}
        rotateYMax={24}
      >
        <span className="game-box-t" />
        <span className="game-box-r" />
        <span className="game-box-b" />
        <span className="game-box-l" />

        {/* <img className="game-box-size" src="/box-size.svg" alt="box bg" /> */}
        <img
          className="game-box-bg"
          data-atropos-offset="-4"
          src={`${bg}`}
          alt="game cover"
        />
        <h1 className="game-box-logo" data-atropos-offset="10">
          {title}
        </h1>
        <h3 className="game-box-logo" data-atropos-offset="15">
          {subtitle}
        </h3>
      </Atropos>
    </div>
  );
};
