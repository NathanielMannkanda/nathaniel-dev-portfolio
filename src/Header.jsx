import "./Header.css"
import { useRef } from "react"
import { gsap } from "gsap"

export const Header = () => {
  const containerRef = useRef(null)
  const iconRef = useRef(null)
  const textRef = useRef(null)
  const smileRef = useRef(null)

  const handleEnter = () => {
    gsap.to(containerRef.current, {
      scale: 1.2,
      duration: 0.3,
      transformOrigin: "center"
    })

    gsap.to(iconRef.current, {
      scale: 0.9,
      duration: 0.3
    })
  }

  const handleLeave = () => {
    gsap.to(containerRef.current, {
      scale: 1,
      duration: 0.3
    })

    gsap.to([iconRef.current, textRef.current], {
      x: 0,
      y: 0,
      scale: 1,
      duration: 0.3
    })
  }

  const handleMove = (e) => {
    const rect = containerRef.current.getBoundingClientRect()

    const relX = e.clientX - rect.left
    const relY = e.clientY - rect.top

    const move = (target, strength) => {
      const x = (relX - rect.width / 2) / rect.width * strength
      const y = (relY - rect.height / 2) / rect.height * strength

      gsap.to(target, {
        x,
        y,
        duration: 0.3,
        ease: "power2.out"
      })
    }

    move(iconRef.current, 40)  // slower movement
    move(textRef.current, 70)  // faster movement
  }

  return (
    <div className="header-container grid grid-cols-3 gap-4 w-full justify-evenly">

      <div className="heading-profile">
        <img className="pfp-icon" src="/imgs/coffee-cat.png" />
      </div>

      <div className='title-heading'>DEVBYNATHANIEL</div>

      <div className="right-side-header">
        <button
          ref={containerRef}
          className="resume-button border"

          onClick={() => {
            window.open("/Nathaniel-Mankanda-Cv-2.pdf", "_blank"), console.log("THX :) ... CV opened")
          }}

          onMouseEnter={handleEnter}
          onMouseLeave={handleLeave}
          onMouseMove={handleMove}
          onMouseDown={() => {
            // click press
            gsap.to(containerRef.current, {
              scale: 0.9,
              duration: 0.1
            })

            // smile fade in out
            gsap.fromTo(
              smileRef.current,
              { opacity: 0, scale: 0.5 },
              {
                opacity: 1,
                scale: 1,
                duration: 0.15,
                onComplete: () => {
                  gsap.to(smileRef.current, {
                    opacity: 0,
                    scale: 0.5,
                    duration: 0.3,
                    delay: 0.2
                  })
                }
              }
            )
          }}
          onMouseUp={() => {
            gsap.to(containerRef.current, {
              scale: 1.2,
              duration: 0.2
            })
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