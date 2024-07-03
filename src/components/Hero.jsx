import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { heroVideo, smallHeroVideo } from '../utils';
import { useEffect, useState } from 'react';

const Hero = () => {
  const [videoSrc, setVideoSrc] = useState(window.innerWidth < 760 ? smallHeroVideo : heroVideo)

  const handleVideoSrcSet = () => {
    if(window.innerWidth < 760) {
      setVideoSrc(smallHeroVideo)
    } else {
      setVideoSrc(heroVideo)
    }
  }

  useEffect(() => {
    window.addEventListener('resize', handleVideoSrcSet);

    return () => {
      window.removeEventListener('reisze', handleVideoSrcSet)
    }
  }, [])

  useGSAP(() => {
    gsap.to('#hero', { opacity: 1, delay: 2 })
    gsap.to('#cta', { opacity: 1, y: -70, delay: 2 })
  }, [])

  return (
    <section className="w-full nav-height bg-white relative">
      <div className="h-5/6 w-full flex-center flex-col">
        <p id="hero" className="hero-title">Energy Efficient Solutions</p>
        <div className="md:w-10/12 w-9/12">
          <video className="pointer-events-none" autoPlay muted playsInline={true} key={videoSrc}>
            <source src={videoSrc} type="video/mp4" />
          </video>
        </div>
      </div>

      <div
        id="cta"
        className="flex flex-col items-center opacity-0 translate-y-20 gap-6"
          >

        <a href="#highlights" className="btn">Get Quote</a>
              {/*<p className="font-normal text-xl">$99999</p>*/}
              
              <button className="cursor-pointer bg-gray-800 px-3 py-2 rounded-md text-white tracking-wider shadow-xl animate-bounce hover:animate-none mt-10px">
                  <svg
                      className="w-5 h-5"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                  >
                      <path
                          d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
                          strokeLinejoin="round"
                          strokeLinecap="round"
                      ></path>
                  </svg>
              </button>

      </div>

          
    </section>
  )
}

export default Hero