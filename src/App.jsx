import { useState } from "react"
import AppRouter from "./router/AppRouter"
import Navbar from "./components/Navbar/Navbar"
import { signOut } from "firebase/auth"
import { auth } from "./config"
import './styles/App.css'

const App = () => {
  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"))

    const signUserOut = () => {
        signOut(auth).then(() => {
            localStorage.clear()
            setIsAuth(false)
            window.location.pathname = "/login"
        })
    }

    return (
    <div className="App">
      <Navbar signUserOut={signUserOut} isAuth={isAuth} />
      <AppRouter isAuth={isAuth} setIsAuth={setIsAuth} />
    </div>
  );
}

export default App
