import { appleImg, bagImg, searchImg } from '../utils';
import { navLists } from '../constants';

const Navbar = () => {
  return (
    <header className="w-full py-5 sm:px-10 px-5 flex justify-between items-center">
      <nav className="flex w-full screen-max-width">
        <img src={appleImg} alt="Apple" width={80} height={30} />

              <div className="flex flex-1 justify-center max-sm:hidden items-center">
          {navLists.map((nav) => (
            <div key={nav} className="px-5 text-sm cursor-pointer text-gray hover:text-white transition-all">
              {nav}
            </div>
          ))}
        </div>

              <div className="flex items-baseline cursor-pointer gap-7 max-sm:justify-end max-sm:flex-1">
                  {/*<img src={searchImg} alt="search" width={18} height={18} />*/}
                  {/*<img src={bagImg} alt="bag" width={18} height={18} />*/}
                  <button
                      className="overflow-hidden relative w-32 p-2 h-12 bg-black text-white border-none rounded-md text-xl font-bold cursor-pointer relative z-10 group"
                  >
                      <span className="absolute top-2 left-10 hover:text-white">  
                      <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24"><path fill="grey" d="M13 20.27L12.942 18H11.5q-3.127 0-5.313-2.186T4 10.5t2.187-5.313T11.5 3q1.564 0 2.928.586q1.364.585 2.383 1.604t1.604 2.382Q19 8.937 19 10.5q0 1.529-.449 2.937t-1.242 2.661t-1.9 2.31T13 20.269m-1.467-4.698q.31 0 .523-.213t.213-.524t-.213-.523t-.523-.213t-.523.213q-.214.214-.214.523t.213.524q.214.213.524.213m-.437-2.925h.885q.038-.615.236-.973t.94-1.1q.432-.43.684-.879q.251-.448.251-1.029q0-1.082-.747-1.7q-.747-.619-1.807-.619q-.927 0-1.57.507q-.645.506-.945 1.208l.823.32q.202-.445.59-.809q.389-.364 1.102-.364q.848 0 1.253.461q.405.462.405 1.008q0 .502-.26.849q-.259.347-.667.755q-.721.634-.947 1.14q-.226.504-.226 1.225" /></svg>
                      </span> 
                      <span
                          className="absolute w-36 h-32 -top-8 -left-2 bg-sky-200 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-500 duration-1000 origin-right"
                      ></span>
                      <span
                          className="absolute w-36 h-32 -top-8 -left-2 bg-sky-400 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-700 duration-700 origin-right"
                      ></span>
                      <span
                          className="absolute w-36 h-32 -top-8 -left-2 bg-sky-600 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-1000 duration-500 origin-right"
                      ></span>
                      <span
                          className="group-hover:opacity-100 group-hover:duration-1000 duration-100 opacity-0 absolute top-2.5 left-6 z-10"
                      >Contact</span
                      >
                  </button>
                  
        </div>
      </nav>
    </header>
  )
}

export default Navbar