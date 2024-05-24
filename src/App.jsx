import { useState } from "react"

function App() {
   const [Color,setColor] = useState("black");
  return (
    <>
    <div className="w-full h-screen duration-200" style={{backgroundColor:Color}}></div>
    <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
      <div className="flex flex-wrap justify-center gap-1 shadow-xl bg-white px-4 py-3 rounded-xl">
        <button onClick={() => setColor("blue")} className="outline-none px-4 py-1 rounded-xl shadow-lg" style={{backgroundColor: "blue"}}>BLUE</button>
        <button onClick={() => setColor("red")} className="outline-none px-4 py-1 rounded-xl shadow-lg" style={{backgroundColor: "red"}}>RED</button>
        <button onClick={() => setColor("pink")}className="outline-none px-4 py-1 rounded-xl shadow-lg" style={{backgroundColor: "pink"}}>PINK</button>
        <button onClick={() => setColor("green")}className="outline-none px-4 py-1 rounded-xl shadow-lg" style={{backgroundColor: "green"}}>GREEN</button>
        <button onClick={() => setColor("orange")}className="outline-none px-4 py-1 rounded-xl shadow-lg" style={{backgroundColor: "orange"}}>ORANGE</button>
      </div>
      
    </div>
    </>
  )
}

export default App
