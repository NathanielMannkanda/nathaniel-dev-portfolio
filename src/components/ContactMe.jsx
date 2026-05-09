import './ContactMe.css'

export const ContactMe = () => {
  return(
    <div className='flex flex-col p-2.5 min-w-100
     max-w-175 flex-1 mt-10 w-full'>
      <p className='mb-3 text-ml text-gray-400'>
        Contact me:
      </p>

      <div className='flex items-center'>

        <div className="tooltip mr-2">
          <a href="https://github.com/NathanielMannkanda" target="_blank">
            <img 
              className='h-5 w-5 invert' 
              src="./imgs/github.png" 
              alt="GitHub" />
          </a>
          <span className="tooltip-text">GitHub</span>
        </div>

        <div className="tooltip mr-2">
          <a href="https://wa.me/27632402210" target="_blank">
            <img 
              className='h-5 w-5 invert' 
              src="./imgs/whatsapp.png" 
              alt="WhatsApp" />
          </a>
          <span className="tooltip-text">WhatsApp</span>
        </div>

        <div className="tooltip mr-2">
          <a href="https://www.linkedin.com/in/nathaniel-mankanda-641a63307/" target="_blank">
            <img 
              className='h-5 w-5 invert' 
              src="./imgs/linked-in.png" 
              alt="LinkedIn" />
          </a>
          <span className="tooltip-text">LinkedIn</span>
        </div>

        <div className="tooltip mr-2">
          <a href="mailto:nathanielmankanda8@gmail.com" target="_blank">
            <img 
              className='h-5 w-5 invert' 
              src="./imgs/email.png" 
              alt="Email" />
          </a>
          <span className="tooltip-text">Email</span>
        </div>

      </div>
    </div>
  )
}