import React from "react";
import Atropos from "atropos/react";
import "atropos/css";
import "../App.css"; // Custom styles for flame effect

interface CardComponentProps {
  title: string;
  subtitle: string;
  backgroundImage: string;
  width?: string; // Optional custom width
  height?: string; // Optional custom height
}

const CardComponent: React.FC<CardComponentProps> = ({
  title,
  subtitle,
  backgroundImage,
  width = "300px",
  height = "400px",
}) => {
  return (
    <div className="w-screen h-screen overflow-hidden grid place-items-center font-nunito">
      <Atropos
        className={`my-atropos ${width} ${height} md:w-[80%] md:h-[300px] lg:w-[300px] lg:h-[400px] relative`}
        activeOffset={60}
        shadowScale={0.95}
        shadow={true}
        shadowOffset={50}
        rotateXMax={25}
        rotateYMax={25}
        highlight={true}
      >
        <div className="atropos-scale">
          <div className="atropos-rotate">
            <div className="atropos-inner relative">
              {/* Flame effect */}
              <div
                className="flame absolute inset-0 opacity-0 transition-opacity duration-300 ease-in-out"
                data-atropos-offset="-10"
              ></div>
              <div
                className="card bg-cover bg-center bg-no-repeat rounded-2xl p-6"
                data-atropos-offset="-10"
                style={{
                  backgroundImage: `url(${backgroundImage})`,
                }}
              >
                <div className="card-content text-center">
                  <h2 className="text-2xl font-bold text-white mb-2">
                    {title}
                  </h2>
                  <h3 className="text-lg font-semibold text-gray-200">
                    {subtitle}
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Atropos>
    </div>
  );
};

export default CardComponent;
