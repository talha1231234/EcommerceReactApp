import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Benefits from './components/Benefits'
import Title from './components/Title'
import Cources from './components/Cources'
import Testimonials from './components/Testimonials'
import FaqSec from './components/FaqSec'
import Footer from './components/Footer'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Benefits />
        <Cources/>
        <Testimonials />
        <FaqSec/>
        </main>
      <Footer />
    </>
  )
}

export default App
