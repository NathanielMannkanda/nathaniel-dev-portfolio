
import './ReachMe.css'

export const ReachMe = () => {
  return(
    <>
      <div className='reach-me-container flex flex-col items-center'>
        <h1 className='text-md text-gray-400 mb-5'>
          You've made it this far, Lets talk.
        </h1>

        
        <a className='reach-out-button flex justify-center items-center bg-gray-800 border-2 border-dotted w-fit pl-2 pr-2 rounded-md cursor-pointer text-gray-300'
        href="mailto:nathanielmankanda8@gmail.com" target='_blank'
        >
          <img 
            className='w-5 h-5 mr-2 rounded-4xl'
            src="./imgs/coffee-cat.png" alt="" />
          reach out to me
        </a>
      </div>
    </>
  )
}