import { useEffect } from "react"
import { BrowserRouter } from "react-router-dom"
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas, Wip, Socials } from './components'
import { initLanguage } from './constants'

const App = () => {

  useEffect(() => {
    console.log('App mounted')
    initLanguage()
  }, []);

  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        {/* <Feedbacks /> */}
        <div className="relative z-0">
          <Contact />
          {/* <Wip /> */}
          <StarsCanvas />
        </div>
        <Socials />
      </div>
    </BrowserRouter>
  )
}

export default App
