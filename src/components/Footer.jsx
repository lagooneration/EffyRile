import React from 'react'
import { appleImg } from '../utils';
import { footerLinks } from '../constants'

const Footer = () => {
  return (
    <footer className="py-5 sm:px-10 px-5">
          <div className="screen-max-width">
              <div className="flex md:flex-row flex-row justify-between">

                  <div>
                      <img src={appleImg} alt="Apple" width={105} height={45} />
                  </div>

              <div>
          <p className="font-semibold text-gray text-xs">
            For investment opportunities: {' '}
            <span className="underline text-blue cursor-pointer">
            Reach Out {' '}
            </span>
            or {' '}
            <span className="underline text-blue cursor-pointer">
            WA
            </span>{' '}
            
          </p>
                      <p className="font-semibold text-gray text-xs text-right">
            (Pre-Seed)
          </p>
                  </div>

                  
        </div>


              

        <div className="bg-neutral-700 my-5 h-[1px] w-full" />

        <div className="flex md:flex-row flex-col md:items-center justify-between cursor-pointer">
          <p className="font-semibold text-gray text-xs">Funded by Industrial R&D. IIT Delhi</p>
          <div className="flex">
            {footerLinks.map((link, i) => (
              <p key={link} className="font-semibold text-gray text-xs cursor-pointer">
                {link}{' '}
                {i !== footerLinks.length - 1 && (
                  <span className="mx-2"> | </span>
                )}
              </p>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer