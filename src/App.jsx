import { useState } from "react"
import Header from "./components/Header"

function App() {
const [darkmode, setDarkmode] = useState(false)

const toggleDarkmode = () => {
  setDarkmode((prev) => !prev)
};

  return (
    <div className={`w-screen min-h-screen flex flex-col ${darkmode ? "dark":""}`}>
      <Header toggleDarkmode={toggleDarkmode}/>
    </div>
  )
}

export default App
