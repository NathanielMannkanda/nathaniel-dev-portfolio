import './InfoCard.css'

export const InfoCard = () => {
  return(
    <>
      <div className='info-card-container flex flex-col'>
        <h1 className='text-gray-500 text-sm'>
          Learn more about me
        </h1>
        <span className='font-bold text-md'>
          Technologies I use:
        </span>

        <div className='flex flex-wrap justify-center items-center'>
            <div className="inline-flex justify-center items-center font-bold text-white-400 bg-amber-800 rounded-md border border-orange-600 m-2 w-30 p-1 h-20"> 
            {/*Html*/}
            <img
            className=" w-6 h-6 mr-1"
            src="/imgs/html-icon.png" 
            alt=""
            />
            HTML
          </div>

          <div className="inline-flex justify-center items-center font-bold text-white-400 bg-blue-800 rounded-md border border-blue-600 m-2 w-30 p-1 h-20"> 
            {/*Css*/}
            <img 
            className=" w-6 h-6 mr-1"
            src="/imgs/css-icon.png" 
            alt=""
            />
            CSS
          </div>

          <div className="inline-flex justify-center items-center font-bold text-black bg-yellow-500 rounded-md border border-yellow-800 m-2 w-30 p-1 h-20"> 
            {/*JavaScript*/}
            <img 
            className=" w-6 h-6 mr-1"
            src="/imgs/javascript-icon.png" 
            alt=""
            />
            JavaScript
          </div>

          <div className="inline-flex justify-center items-center font-bold text-blue-500 bg-blue-200 rounded-md border border-blue-900 m-2 w-30 p-1 h-20"> 
            {/*Tailwind*/}
            <img 
            className=" w-6 h-6 mr-1"
            src="/imgs/tailwind-css-icon.png" 
            alt=""
            />
            Tailwind
          </div>

          <div className="inline-flex justify-center items-center font-bold text-white-400 bg-blue-700 rounded-md border border-blue-600 m-2 w-30 p-1 h-20"> 
            {/*TypeScript*/}
            <img 
            className=" w-6 h-6 mr-1"
            src="/imgs/typescript-icon.png" 
            alt=""
            />
            TypeScript
          </div>

          <div className="inline-flex justify-center items-center font-bold text-blue-100 bg-blue-400 rounded-md border border-blue-600 m-2 w-30 p-1 h-20"> 
            {/*TypeScript*/}
            <img 
            className=" w-6 h-6 mr-1"
            src="/imgs/react-js-icon.png" 
            alt=""
            />
            React
          </div>

          <div className="inline-flex justify-center items-center font-bold text-orange-600 bg-orange-200 rounded-md border border-orange-600 m-2 w-30 p-1 h-20"> 
            {/*TypeScript*/}
            <img 
            className=" w-6 h-6 mr-1"
            src="/imgs/git-icon.png"
            alt=""
            />
            Git
          </div>

          <div className="inline-flex justify-center items-center font-bold text-black bg-gray-200 rounded-md border border-gray-400 m-2 w-30 p-1 h-20"> 
            {/*TypeScript*/}
            <img 
            className=" w-6 h-6 mr-1"
            src="/imgs/github-logo.svg" 
            alt=""
            />
            GitHub
          </div>

          <div className="inline-flex justify-center items-center font-bold text-black bg-white rounded-md border border-gray-400 m-2 w-30 p-1 h-20"> 
            {/*TypeScript*/}
            <img 
            className=" w-10 h-10 mr-1"
            src="/imgs/MySQL-Logo.png" 
            alt=""
            />
            <span className="text-blue-600">My</span>
            <span className='text-orange-400'>SQL</span>
          </div>

        </div>

      </div>
    </>
  )
}