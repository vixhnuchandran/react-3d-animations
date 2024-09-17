import React, { useEffect } from "react";
import Card from "./components/Card";
import "./App.css"; // Custom CSS file
import VanillaTilt from "vanilla-tilt";

// Import local images
import image1 from "/img/image1.jpeg";
import image2 from "./img/image2.jpeg";
import image3 from "./assets/img/image3.jpeg";

const App: React.FC = () => {
  useEffect(() => {
    const elements = document.querySelectorAll(
      ".relative"
    ) as NodeListOf<HTMLElement>;
    VanillaTilt.init(Array.from(elements), {
      max: 25,
      speed: 400,
      easing: "cubic-bezier(.03,.98,.52,.99)",
      perspective: 500,
      transition: true,
    });
  }, []);

  return (
    <main className="flex justify-center items-center h-screen bg-teal-500">
      <section className="flex flex-wrap justify-center">
        <Card
          imageUrl="/img/image1.jpeg"
          category="Category"
          heading="Example Card Heading 1"
        />
        <Card
          imageUrl="/img/image2.jpeg"
          category="Category"
          heading="Example Card Heading 2"
        />
        <Card
          imageUrl="/img/image3.jpeg"
          category="Category"
          heading="Example Card Heading 3"
        />
      </section>
    </main>
  );
};

export default App;
