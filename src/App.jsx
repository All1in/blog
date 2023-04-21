import { useState } from "react"
import AppRouter from "./router/AppRouter"
import Navbar from "./components/Navbar/Navbar"
import './styles/App.css'

const App = () => {
  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"))

  return (
    <div className="App">
      <Navbar isAuth={isAuth} />
      <AppRouter setIsAuth={setIsAuth} />
    </div>
  );
}

export default App;
