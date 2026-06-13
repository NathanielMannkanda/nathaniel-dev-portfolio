import "./Header.css"
import { useRef } from "react"

export const Header = () => {
  const iconRef = useRef(null)
  const textRef = useRef(null)
  const smileRef = useRef(null)



  return (
    <div className="header-container grid grid-cols-3 gap-4 w-full justify-evenly">

      <div className="heading-profile">
        <img className="pfp-icon" src="/imgs/coffee-cat.png" />
      </div>

      <div className='title-heading'>
        <img
          className="  h-10 invert" 
          src="./banners/DevbyNathaniel.png" 
          alt="Website Banner" 
        />
      </div>

      <div className="right-side-header">
        <button

          className="resume-button border"

          onClick={() => {
            window.open("./CV/Nathaniel-Mankanda-Cv.pdf", "_blank"), console.log("THX :) ... CV opened")
          }}
        >
          <img
            ref={iconRef}
            className="h-5.5 invert"
            src="/imgs/cv-icon.png"
          />

          <span ref={textRef}>Open resume</span>

          {/* smile element */}
          <span ref={smileRef} className="smile">(●'◡'●)</span>
        </button>
      </div>

    </div>
  )
}