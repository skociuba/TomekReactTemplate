import { Route, Routes, Link } from "react-router-dom"
import  Home  from "./Pages/Home"
import  SecondPage  from "./Pages/SecondPage"

export function App() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/SecondPage">SecondPage</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/SecondPage" element={<SecondPage />} />
      </Routes>
    </>
  )
}
