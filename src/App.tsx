/* eslint-disable @typescript-eslint/no-explicit-any */
import "./App.css";
import DraggableLayout from "react-draggable-layout";
import "atropos/css";
import AtroposComponent from "./components/Atropos";
import CardComponent from "./components/CardAtrpos";

export default function App() {
  const components = [
    {
      col: 0,
      id: "Component 1",
      component: (
        <div className="h-60 bg-sky-300 rounded-lg p-6 shadow-lg flex flex-col justify-between">
          <h2 className="text-xl font-semibold mb-2">Project A</h2>
          <p className="text-sm">Location: Enikkara</p>
          <p className="text-sm">Status: Ongoing</p>
          <p className="text-sm">Deadline: 12/2024</p>
          <div className="relative pt-1">
            <div className="flex mb-2 items-center justify-between">
              <span className="text-sm font-medium">Progress</span>
              <span className="text-sm font-medium">75%</span>
            </div>
            <div className="h-2 bg-gray-200 rounded-full">
              <div
                className="h-2 bg-green-500 rounded-full"
                style={{ width: "75%" }}
              ></div>
            </div>
          </div>
        </div>
      ),
    },
    {
      col: 0,
      id: "Component 2",
      component: (
        <div className="h-72 bg-teal-200 rounded-lg p-6 shadow-lg flex flex-col justify-between">
          <h2 className="text-xl font-semibold mb-2">Project B</h2>
          <p className="text-sm">Location: Kakkanad</p>
          <p className="text-sm">Status: Completed</p>
          <p className="text-sm">Finished: 06/2023</p>

          <p className="text-xs mt-2">Developed by: Prime Builders</p>
        </div>
      ),
    },
    {
      col: 1,
      id: "Component 3",
      component: (
        <div className="h-96 bg-rose-300 rounded-lg p-6 shadow-lg flex flex-col justify-between">
          <h2 className="text-xl font-semibold mb-2">Project C</h2>
          <p className="text-sm">Location: Ernakulam</p>
          <p className="text-sm">Status: Delayed</p>
          <p className="text-sm">Expected Completion: 05/2025</p>
          <div className="relative pt-1">
            <div className="flex mb-2 items-center justify-between">
              <span className="text-sm font-medium">Progress</span>
              <span className="text-sm font-medium">40%</span>
            </div>
            <div className="h-2 bg-gray-200 rounded-full">
              <div
                className="h-2 bg-red-500 rounded-full"
                style={{ width: "40%" }}
              ></div>
            </div>
          </div>
          <p className="text-xs mt-2">Developed by: Zenith Developers</p>
        </div>
      ),
    },
    {
      col: 1,
      id: "Component 4",
      component: (
        <div className="h-72 bg-blue-200 rounded-lg p-6 shadow-lg flex flex-col justify-between">
          <h2 className="text-xl font-semibold mb-2">Project D</h2>
          <p className="text-sm">Location: Thrissur</p>
          <p className="text-sm">Status: Ongoing</p>
          <p className="text-sm">Deadline: 09/2024</p>

          <p className="text-xs mt-2">Developed by: Grand Builders</p>
        </div>
      ),
    },
    {
      col: 2,
      id: "Component 5",
      component: (
        <div className="h-60 bg-amber-200 rounded-lg p-6 shadow-lg flex flex-col justify-between">
          <h2 className="text-xl font-semibold mb-2">Project E</h2>
          <p className="text-sm">Location: Palakkad</p>
          <p className="text-sm">Status: In Review</p>
          <p className="text-sm">Expected Approval: 11/2023</p>

          <p className="text-xs mt-2">Developed by: Star Construction</p>
        </div>
      ),
    },
  ];

  const handleOnChange = (c: any) => {
    console.log("onChange()", c);
  };

  return (
    <div className="h-screen ">
      <h1 className="text-4xl font-bold text-black text-center mt-8 mb-6">
        React Draggable Layout
      </h1>
      <DraggableLayout
        components={components}
        columns={3}
        mainColumnIndex={1}
        onChange={handleOnChange}
        draggable={true}
      />
      <div>
        <AtroposComponent />
      </div>

      <div className="App-header flex justify-center">
        <h1 className="text-4xl font-bold text-center text-white mb-8">
          3D Card Example
        </h1>
        <CardComponent
          title="Innovate 2024"
          subtitle="Join us for an immersive experience showcasing the latest breakthroughs in technology and innovation."
          backgroundImage="/image1.jpeg"
          width="300px"
          height="400px"
        />
        <CardComponent
          title="Summer Beats Festival"
          subtitle="Experience the ultimate music festival this summer with top artists from around the world."
          backgroundImage="/image2.jpeg"
          width="350px"
          height="450px"
        />
        <CardComponent
          title="Art in Focus"
          subtitle="Explore the diverse and captivating world of contemporary art."
          backgroundImage="/image3.jpeg"
          width="350px"
          height="450px"
        />
        <CardComponent
          title="Gourmet Cooking Masterclass"
          subtitle="Learn the art of gourmet cooking from top chefs in this exclusive masterclass."
          backgroundImage="/image4.jpeg"
          width="350px"
          height="450px"
        />
      </div>
    </div>
  );
}
