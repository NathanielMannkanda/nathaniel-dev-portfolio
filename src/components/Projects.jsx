import './Projects.css'

export const Projects = () => {
  return (
    <>
      <div className='flex flex-col flex-1 h-full p-2.5 min-w-100 max-w-175 w-full mt-5 mb-2.5'>
        <p className='text-gray-400'>
          Featured
        </p>
        <h2 className='text-xl font-bold'>
          Past projects
        </h2>

        <div className='flex flex-col mt-3'>
          <div className='flex pb-4 border-b border-b-gray-400'>
            <a 
              href="https://work-tracker-five-beta.vercel.app/" 
              target='_blank'>
            <img
              className='h-15 w-15 rounded-md bg-white'
              src="./imgs/working-cat.png"
              alt="heart" /> 
            </a>
            <div className='ml-2'>
              <p className='text-xl font-bold'>
                Work Tracker
              </p>

              <h2 className='text-gray-400 text-sm mt-2'>
                April 2026
              </h2>
            </div>

          </div>

          <div className='mt-5'>
            <p className='font-bold text-gray-300'>
              Technologies I used:
            </p>

            <div className='flex flex-wrap gap-2 mt-5'>

              <a className='inline-flex items-center self-end border-dotted border-gray-400 bg-gray-900 border-2 rounded-md pl-2 pr-3 pt-0.5 pb-0.5'>
                <img
                  className='h-4 w-4'
                  src="./imgs/react-js-icon.png"
                  alt="lanuage" />
                <p className='ml-1 text-sm font-bold'>
                  React
                </p>

              </a>

              <a className='inline-flex items-center self-end border-dotted border-gray-400 bg-gray-900 border-2 rounded-md pl-2 pr-3 pt-0.5 pb-0.5'>
                <img
                  className='h-4 w-4'
                  src="./imgs/firebase-icon.png"
                  alt="lanuage" />
                <p className='ml-1 text-sm font-bold'>
                  Firebase
                </p>

              </a>

              <a className='inline-flex items-center self-end border-dotted border-gray-400 bg-gray-900 border-2 rounded-md pl-2 pr-3 pt-0.5 pb-0.5'>
                <img
                  className='h-5 w-5'
                  src="./imgs/tailwind-css-icon.png"
                  alt="lanuage" />
                <p className='ml-1 text-sm font-bold'>
                  Tailwind CSS
                </p>
              </a>

            </div>

            <div className='mt-5 text-gray-400'>
              <p>
                • I created a website that allows you to select between being a manager and a worker. Each Role has its own features
              </p>
              <p>
                • I used firebase as a backend that is able to store and update information
              </p>
              <p>
                • I used TailwindCSS to make a simple design as well as React for reusable components 
              </p>

            </div>


          </div>
        </div>

        <div className='flex flex-col mt-10'>
          <div className='flex pb-4 border-b border-b-gray-400'>
            <a 
              href="https://e-commerce-store-xi-five.vercel.app/" 
              target='_blank'
            >
            <img
              className='h-15 w-15 rounded-md bg-white cursor-pointer'
              src="./imgs/ecommerce-cat-logo.png"
              alt="heart" />
            </a>
            <div className='ml-2'>
              <p className='text-xl font-bold'>
                E-Commerce Website
              </p>

              <h2 className='text-gray-400 text-sm mt-2'>
                Oct 2025 - Nov 2025
              </h2>
            </div>

          </div>

          <div className='mt-5'>
            <p className='font-bold text-gray-300'>
              Technologies I used:
            </p>

            <div className='flex flex-wrap gap-2 mt-5'>

              <a className='inline-flex items-center self-end border-dotted border-gray-400 bg-gray-900 border-2 rounded-md pl-2 pr-3 pt-0.5 pb-0.5'>
                <img
                  className='h-4 w-4'
                  src="./imgs/react-js-icon.png"
                  alt="lanuage" />
                <p className='ml-1 text-sm font-bold'>
                  React
                </p>

              </a>

              <a className='inline-flex items-center self-end border-dotted border-gray-400 bg-gray-900 border-2 rounded-md pl-2 pr-3 pt-0.5 pb-0.5'>
                <img
                  className='h-5 w-5'
                  src="./imgs/tailwind-css-icon.png"
                  alt="lanuage" />
                <p className='ml-1 text-sm font-bold'>
                  Tailwind CSS
                </p>
              </a>

              <a className='inline-flex items-center self-end border-dotted border-gray-400 bg-gray-900 border-2 rounded-md pl-2 pr-3 pt-0.5 pb-0.5'>
                <img
                  className='h-4 w-4'
                  src="./imgs/typescript-icon.png"
                  alt="lanuage" />
                <p className='ml-1 text-sm font-bold'>
                  TypeScript
                </p>

              </a>

            </div>

            <div className='mt-5 text-gray-400'>
              <p>
                • I created a interactive E-commerce site that can take an order and store it in the cart as
              </p>
              <p>
                • I used a TypeScript to help with production error handling and reduce work load in case of errors working with the api
              </p>
              <p>
                • I used React and Tailwind to style the website with reusable components  
              </p>

            </div>


          </div>
        </div>

        <div className='flex flex-col mt-3'>
          <div className='flex pb-4 border-b border-b-gray-400'>
            <a
              href="https://health-tracker-five-ivory.vercel.app/"
              target='_blank'
            >
            <img
              className='h-15 w-15 rounded-md cursor-pointer'
              src="./imgs/heart-icon.jpg"
              alt="heart" />
            </a>
            <div className='ml-2'>
              <p className='text-xl font-bold'>
                Health Tracker
              </p>

              <h2 className='text-gray-400 text-sm mt-2'>
                Feb 2026
              </h2>
            </div>

          </div>

          <div className='mt-5'>
            <p className='font-bold text-gray-300'>
              Technologies I used:
            </p>

            <div className='flex flex-wrap gap-2 mt-5'>

              <a className='inline-flex items-center self-end border-dotted border-gray-400 bg-gray-900 border-2 rounded-md pl-2 pr-3 pt-0.5 pb-0.5'>
                <img
                  className='h-4 w-4'
                  src="./imgs/react-js-icon.png"
                  alt="lanuage" />
                <p className='ml-1 text-sm font-bold'>
                  React
                </p>

              </a>

              <a className='inline-flex items-center self-end border-dotted border-gray-400 bg-gray-900 border-2 rounded-md pl-2 pr-3 pt-0.5 pb-0.5'>
                <img
                  className='h-4 w-4'
                  src="./imgs/typescript-icon.png"
                  alt="lanuage" />
                <p className='ml-1 text-sm font-bold'>
                  TypeScript
                </p>

              </a>

              <a className='inline-flex items-center self-end border-dotted border-gray-400 bg-gray-900 border-2 rounded-md pl-2 pr-3 pt-0.5 pb-0.5'>
                <img
                  className='h-5 w-5'
                  src="./imgs/tailwind-css-icon.png"
                  alt="lanuage" />
                <p className='ml-1 text-sm font-bold'>
                  Tailwind CSS
                </p>
              </a>

              <a className='inline-flex items-center self-end border-dotted border-gray-400 bg-gray-900 border-2 rounded-md pl-2 pr-3 pt-0.5 pb-0.5'>
                <img
                  className='h-5 w-5'
                  src="./imgs/adobe-xd-icon-png-transparent-png.png"
                  alt="lanuage" />
                <p className='ml-1 text-sm font-bold'>
                  Adobe Xd
                </p>
              </a>

              <a className='inline-flex items-center self-end border-dotted border-gray-400 bg-gray-900 border-2 rounded-md pl-2 pr-3 pt-0.5 pb-0.5'>
                <img
                  className='h-5 w-5'
                  src="./imgs/chartjs-logo.svg"
                  alt="lanuage" />
                <p className='ml-1 text-sm font-bold'>
                  Chart.js
                </p>
              </a>



            </div>

            <div className='mt-5 text-gray-400'>
              <p>
                • I used a API with information on different patients to populate a page. The website isnt meant to be useable just a remake of a adobe design 
              </p>
              <p>
                • Using Tailwind to transform the page to a well presentable and stylish website
              </p>
              <p>
                • I followed the design made with Adobe Xd to recreate the look of the website. 
              </p>

            </div>


          </div>
        </div>

        <div className='flex flex-col mt-10'>
          <div className='flex pb-4 border-b border-b-gray-400'>
            <img
              className='h-15 w-15 rounded-md'
              src="./imgs/contact-us.png"
              alt="heart" />
            <div className='ml-2'>
              <p className='text-xl font-bold'>
                Contact Page
              </p>

              <h2 className='text-gray-400 text-sm mt-2'>
                Feb 2026
              </h2>
            </div>

          </div>

          <div className='mt-5'>
            <p className='font-bold text-gray-300'>
              Technologies I used:
            </p>

            <div className='flex flex-wrap gap-2 mt-5'>

              <a className='inline-flex items-center self-end border-dotted border-gray-400 bg-gray-900 border-2 rounded-md pl-2 pr-3 pt-0.5 pb-0.5'>
                <img
                  className='h-4 w-4'
                  src="./imgs/php-icon.png"
                  alt="lanuage" />
                <p className='ml-1 text-sm font-bold'>
                  PHP
                </p>

              </a>

              <a className='inline-flex items-center self-end border-dotted border-gray-400 bg-gray-900 border-2 rounded-md pl-2 pr-3 pt-0.5 pb-0.5'>
                <img
                  className='h-4 w-4'
                  src="./imgs/laragon.svg"
                  alt="lanuage" />
                <p className='ml-1 text-sm font-bold'>
                  Laragon
                </p>

              </a>

              <a className='inline-flex items-center self-end border-dotted border-gray-400 bg-gray-900 border-2 rounded-md pl-2 pr-3 pt-0.5 pb-0.5'>
                <img
                  className='h-5 w-5'
                  src="./imgs/wordpress-icon.png"
                  alt="lanuage" />
                <p className='ml-1 text-sm font-bold'>
                  Wordpress
                </p>
              </a>

              <a className='inline-flex items-center self-end border-dotted border-gray-400 bg-gray-900 border-2 rounded-md pl-2 pr-3 pt-0.5 pb-0.5'>
                <img
                  className='h-5 w-5'
                  src="./imgs/photopea.png"
                  alt="lanuage" />
                <p className='ml-1 text-sm font-bold'>
                  Photopea
                </p>
              </a>



            </div>

            <div className='mt-5 text-gray-400'>
              <p>
                • I used a WordPress to create a Template for a Contact Page
              </p>
              <p>
                • Fully Coded with PHP to make plugins and populate the website with CSS 3 being used to style 
              </p>
              <p>
                • Used Laragon as a develoment environment along as an aid for MySQL
              </p>
              <p>
                • fully recreated the Photopea design in wordpress with PHP 
              </p>

            </div>


          </div>
        </div>

        

        <div className='flex flex-col mt-10'>
          <div className='flex pb-4 border-b border-b-gray-400'>
            <img
              className='h-15 w-15 rounded-md bg-white'
              src="./imgs/pokemon-logo.png"
              alt="heart" />
            <div className='ml-2'>
              <p className='text-xl font-bold'>
                Pokemon Search Game
              </p>

              <h2 className='text-gray-400 text-sm mt-2'>
                 July 2025 - Aug 2025
              </h2>
            </div>

          </div>

          <div className='mt-5'>
            <p className='font-bold text-gray-300'>
              Technologies I used:
            </p>

            <div className='flex flex-wrap gap-2 mt-5'>

              <a className='inline-flex items-center self-end border-dotted border-gray-400 bg-gray-900 border-2 rounded-md pl-2 pr-3 pt-0.5 pb-0.5'>
                <img
                  className='h-4 w-4'
                  src="./imgs/javascript-icon.png"
                  alt="lanuage" />
                <p className='ml-1 text-sm font-bold'>
                  JavaScript
                </p>

              </a>

              <a className='inline-flex items-center self-end border-dotted border-gray-400 bg-gray-900 border-2 rounded-md pl-2 pr-3 pt-0.5 pb-0.5'>
                <img
                  className='h-4 w-4'
                  src="./imgs/css-icon.png"
                  alt="lanuage" />
                <p className='ml-1 text-sm font-bold'>
                  CSS
                </p>

              </a>

              <a className='inline-flex items-center self-end border-dotted border-gray-400 bg-gray-900 border-2 rounded-md pl-2 pr-3 pt-0.5 pb-0.5'>
                <img
                  className='h-5 w-5'
                  src="./imgs/html-icon.png"
                  alt="lanuage" />
                <p className='ml-1 text-sm font-bold'>
                  HTML
                </p>
              </a>

              <a className='inline-flex items-center self-end border-dotted border-gray-400 bg-gray-900 border-2 rounded-md pl-2 pr-3 pt-0.5 pb-0.5'>
                <img
                  className='h-5 w-5'
                  src="./imgs/pokeball.png"
                  alt="lanuage" />
                <p className='ml-1 text-sm font-bold'>
                  PokéAPI
                </p>
              </a>

            </div>

            <div className='mt-5 text-gray-400'>
              <p>
                • I created a web game that can fetch pokemon based on the search made and uses PokéAPI as a backend 
              </p>
              <p>
                • The Javascript is used to create the functions that display the pokémon and was styled with CSS. The Website was fully coded with HTML to display The content
              </p>
            </div>


          </div>
        </div>

      </div>
    </>
  )
}