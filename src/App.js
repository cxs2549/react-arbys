import Footer from "./components/Footer/Footer"
import Header from "./components/Header/Header"
import { GlobalStyles } from "./globalStyles"

const App = () => {
  return (
    <div className="flex flex-col overflow-x-hidden">
      <GlobalStyles />
      <Header />
      <main className="flex-grow  bg-white">yo!</main>
      <Footer />
    </div>
  )
}

export default App
