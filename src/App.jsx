import './App.css'
import { useRef } from "react"
import CatToggle from './components/CatToggle'
import { Header } from './Header'
import { Cards } from './components/Cards'
import { ReachMe } from './components/ReachMe'
import { InfoCard } from './components/InfoCard'
import { Projects } from './components/Projects'
import { ContactMe } from './components/ContactMe'

function App() {

  const meowRef = useRef(null)

  const handleMeow = () => {
    if (meowRef.current) {
      meowRef.current.currentTime = 0 //stops spamming
      meowRef.current.play()
    }
  }
  return (

    <>
      <audio ref={meowRef} src="./sounds/cat-meow.mp3"></audio>
      <div className='Top-screen '>
        <Header />
      </div>
      <div className=''>
        <div className='site-content-container pt-30 p-2'>
          <Cards />
          <InfoCard />
          <ContactMe />
          <Projects />
          <ReachMe />

        </div>
        <div className='BottomPart items-centre w-fit justify-center'>
          <div className='bottom-content grid grid-cols-3 gap-2 w-full justify-evenly items-center'>
            <div className='bottom-left text-sm
                '>
              Nathaniel Mankanda © 2026. All rights reserved.
            </div>

            <div className='bottom-middle'>
              <img
                className='cat-sleeping-gif cursor-pointer'
                src='/gifs/cat-sleeping.gif'
                alt='cat-sleeping' 
                onClick={handleMeow}
                />
            </div>

            <div className='bottom-right ml-auto'>
              <CatToggle />
            </div>
          </div>
        </div>
      </div>
    </>
  )

}


export default App
