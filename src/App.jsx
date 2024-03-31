import React from "react"
import { Routes, Route } from "react-router-dom"
import Recipes from "./pages/Recipes"
import About from "./pages/About"
import Contact from "./pages/Contact"
import GuestLayout from "./layout/GuestLayout"
import Footer from "./components/Footer"

function App() {
  return (
    
    <>
    <Routes>
      <Route path="/" element={<GuestLayout />}>
        <Route index element={<Recipes />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        </Route>
    </Routes>
    
    <footer>
        <Footer />
      </footer>
    </>
    
  )
}

export default App