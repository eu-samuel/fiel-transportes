import { Home } from "./pages/home"
import { contexts } from '../store';
import { GlobalContext } from "../assets/exports";

function App() {

  const context = contexts()

  return (
    <GlobalContext.Provider value={{ context }}>
      <Home/>
    </GlobalContext.Provider>
  )
}

export default App
