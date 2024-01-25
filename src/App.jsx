import { Home } from "./pages/home"
import { GlobalContext, contexts } from './assets/exports';

function App() {

  const context = contexts()

  return (
    <GlobalContext.Provider value={{ context }}>
      <Home/>
    </GlobalContext.Provider>
  )
}

export default App
