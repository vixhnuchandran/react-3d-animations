import { useEffect } from "react";
import Atropos from "atropos/react";
import "atropos/css";
import "../App.css"; // Custom styles for flame effect

const AtroposComponent = () => {
  useEffect(() => {
    // Handle responsive conditions
    if (window.innerWidth <= 375) {
      document.documentElement.innerHTML = `
      <center>
        <h2>JDK.Vn</h2>
        <h1>Not supported on mobile devices!</h1>
      </center>
      `;
      document.documentElement.style.background = "#000";
      document.documentElement.style.color = "#fff";
    }
  }, []);

  return (
    <div className="w-screen h-screen  overflow-hidden grid place-items-center font-nunito">
      <Atropos
        className="my-atropos w-[800px] h-[500px] md:w-[90%] md:h-[350px] lg:w-[800px] lg:h-[500px] relative"
        activeOffset={60}
        shadowScale={0.95}
        shadow={true}
        shadowOffset={50}
        rotateXMax={35}
        rotateYMax={35}
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
                className="mk-card absolute inset-0 bg-cover bg-center bg-no-repeat rounded-2xl"
                data-atropos-offset="-10"
              >
                <div className="mk-title grid absolute w-1/2 p-20 pt-24 lg:pl-12 lg:pt-16">
                  <img
                    className="logo mx-auto h-[130px] md:h-[60px]"
                    src="/logo-mk.png"
                    data-atropos-offset="20"
                    alt="MK Logo"
                  />
                  <img
                    className="mx-auto h-[60px] md:h-[40px]"
                    src="/mortal-text.png"
                    data-atropos-offset="10"
                    alt="Mortal"
                  />

                  <img
                    className="mx-auto h-[60px] md:h-[40px]"
                    src="/kombat-text.png"
                    data-atropos-offset="15"
                    alt="Kombat"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Atropos>
    </div>
  );
};

export default AtroposComponent;
