import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import List from "./pages/List"
import Search from "./pages/Search"
import Navbar from "./pages/Navbar"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path="list" element={<List />} />
          <Route path="search" element={<Search />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
