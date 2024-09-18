import "atropos/css";
import { Card } from "./components/Card";
import { useEffect } from "react";
import "./App.css";
import { createSwapy } from "swapy";

const DEFAULT = {
  "1": "a",
  "3": "c",
  "4": "d",
  "2": null,
};

function A() {
  return (
    <div className="item a" data-swapy-item="a">
      <div className="" data-swapy-item></div>
      <div>A</div>
    </div>
  );
}

function C() {
  return (
    <div className="item c" data-swapy-item="c">
      <div>C</div>
    </div>
  );
}

function D() {
  return (
    <div className="item d" data-swapy-item="d">
      <div>D</div>
    </div>
  );
}

function getItemById(itemId: "a" | "c" | "d" | null) {
  switch (itemId) {
    case "a":
      return <A />;
    case "c":
      return <C />;
    case "d":
      return <D />;
  }
}

function App() {
  const slotItems: Record<string, "a" | "c" | "d" | null> =
    localStorage.getItem("slotItem")
      ? JSON.parse(localStorage.getItem("slotItem")!)
      : DEFAULT;

  useEffect(() => {
    const container = document.querySelector(".container")!;
    const swapy = createSwapy(container);
    swapy.onSwap(({ data }) => {
      localStorage.setItem("slotItem", JSON.stringify(data.object));
    });

    return () => {
      swapy.destroy();
    };
  }, []);

  return (
    <div className=" flex flex-wrap justify-center mt-20  gap-20">
      <div className="container ">
        <p className="flex justify-center text-5xl font-bold text-gray-600 p-4  rounded-lg shadow-lg">
          Swappy
        </p>
        <div className="slot a" data-swapy-slot="1">
          {getItemById(slotItems["1"])}
        </div>
        <div className="second-row">
          <div className="slot b" data-swapy-slot="2">
            {getItemById(slotItems["2"])}
          </div>
          <div className="slot c" data-swapy-slot="3">
            {getItemById(slotItems["3"])}
          </div>
        </div>
        <div className="slot d" data-swapy-slot="4">
          {getItemById(slotItems["4"])}
        </div>
      </div>
      <div className="App">
        <div className=" flex flex-wrap justify-center">
          <Card bg="/image1.jpeg" title="Title1" subtitle="Subtitle1" />
          <Card bg="/image2.jpeg" title="Title2" subtitle="Subtitle2" />
          <Card bg="/image3.jpeg" title="Title3" subtitle="Subtitle3 " />
          <Card bg="/image4.jpeg" title="Title4" subtitle="Subtitle4" />
        </div>
      </div>
    </div>
  );
}

export default App;
// export default function App() {
//   return (
//     <div className="App">
//       <div className="mt-8 flex flex-wrap justify-center">
//         <Card bg="/image1.jpeg" title="Title1" subtitle="Subtitle1" />
//         <Card bg="/image2.jpeg" title="Title2" subtitle="Subtitle2" />
//         <Card bg="/image3.jpeg" title="Title3" subtitle="Subtitle3 " />
//         <Card bg="/image4.jpeg" title="Title4" subtitle="Subtitle4" />
//       </div>
//     </div>
//   );
// }
