import { useState } from "react";

function App() {
  const [color, setColor] = useState("olive");

  return (
    <>
      <div
        className="w-full h-screen duration-500 transition-colors"
        style={{ backgroundColor: color }}
      >
        <div className="fixed bottom-12 inset-x-0 px-4">
          <div className="flex justify-center gap-4 flex-wrap">
            <button
              onClick={() => setColor("red")}
              className="px-6 py-3 bg-red-600 text-white rounded-full shadow-lg hover:scale-105 transition"
            >
              Red
            </button>
            <button
              onClick={() => setColor("green")}
              className="px-6 py-3 bg-green-600 text-white rounded-full shadow-lg hover:scale-105 transition"
            >
              Green
            </button>
            <button
              onClick={() => setColor("blue")}
              className="px-6 py-3 bg-blue-600 text-white rounded-full shadow-lg hover:scale-105 transition"
            >
              Blue
            </button>
            <button
              onClick={() => setColor("yellow")}
              className="px-6 py-3 bg-yellow-500 text-black font-bold rounded-full shadow-lg hover:scale-105 transition"
            >
              Yellow
            </button>
            <button
              onClick={() => setColor("purple")}
              className="px-6 py-3 bg-purple-600 text-white rounded-full shadow-lg hover:scale-105 transition"
            >
              Purple
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;