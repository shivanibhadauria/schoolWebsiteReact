import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import Layout from "./components/Layout"
import Home from "./components/pages/Home"
import AboutUs from "./components/pages/AboutUs"
import Academics from "./components/pages/Academics"
import Admissions from "./components/pages/Admissions"
import ContactUs from "./components/pages/ContactUs"
import Faculty from "./components/pages/Faculty"
import Gallery from "./components/pages/Gallery"
import Students from "./components/pages/Students"


function App() {

  return (
    <>
    <Routes>
      <Route  element={<Layout/>}>
      <Route path="/" element={<Home/>}/>
      <Route path="/aboutus" element={<AboutUs/>}/>
      <Route path="/academics" element={<Academics/>}/>
      <Route path="/admissions" element={<Admissions/>}/>
      <Route path="/contactus" element={<ContactUs/>}/>
      <Route path="/faculty" element={<Faculty/>}/>
      <Route path="/gallery" element={<Gallery/>}/>
      <Route path="/students" element={<Students/>}/>
      
      
      </Route>


    </Routes>

    </>
  )
}

export default App
