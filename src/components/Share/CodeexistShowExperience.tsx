import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { NavLink } from 'react-router-dom'

const CodeexistShowExperience:React.FC<{code:string, closePopup: () => void}> = ({code, closePopup}) => {
  return (
   <>
      {code && code.length > 0 && (
        <div
          id="ocean"
          className="fixed w-full h-screen right-0 top-0 bg-[#0E1527] text-white z-10 
      flex items-center justify-center px-4 py-2 rounded"
        >
          <button
                    aria-label="Close Button"

            onClick={() => closePopup()}
            className=" absolute top-8 z-50 right-8 border-[rgba(30,41,60)] border-[1px] text-sm text-white hover:bg-transparent bg-blue-700
                 hover:text-white
                transition duration-300 px-6 py-3 rounded-[3px] "
          >
            <FontAwesomeIcon className="text-white" icon={faArrowLeft} />
          </button>
          <div className=" text-red-500 absolute top-0 left-0 w-full h-screen  bg-[#0E1527] opacity-50 "></div>
          <div className="text-white bg-transparent border-[rgba(30,41,60)] border-[1px]  px-12 py-12 rounded w-1/2 absolute flex flex-col z-100 ">
            <p id="poppins" className="text-xl">
              Təbriklər elan uğurla bazamıza əlavə edildi! 🎉
              <p className="text-xl mt-10">
                Elanınızın kodu:
                <span className="bg-blue-600 text-white px-2 ml-3 rounded-[3px] py-2">
                  {code}
                </span>
              </p>
              <br />
              <div className="mt-3">
                <button
                          aria-label="Close Button"

                  onClick={() => closePopup()}
                  className=" hover:border-[rgba(30,41,60)] border-[1px] text-base text-slate-200 bg-blue-700 hover:text-white
                transition duration-300 px-6 py-3 hover:bg-transparent border-blue-700  rounded-[3px] "
                >
                  Bağla
                </button>
                <NavLink
                  to="/tecrubepaylash"
                  className=" border-[rgba(30,41,60)] border-[1px] text-base ml-3 text-slate-200 hover:bg-blue-700 hover:text-white
                transition duration-300 px-6 py-[14px] rounded-[3px] "
                >
                  Təcrübələr
                </NavLink>
              </div>
            </p>
          </div>
        </div>
      )}
   
   </>
  )
}

export default CodeexistShowExperience
