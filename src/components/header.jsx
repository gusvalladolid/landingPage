import { Bars3BottomRightIcon, XMarkIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { useState } from 'react'

const Header = ({ loggedUser = ""}) => {
  const {username} = loggedUser || ""; 
  console.log("ESTE ES EL USERNAME", username);
  const Links = [{}]

  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="shadow-md w-full fixed top-0 left-0">
      <div className="md:px-10 py-4 px-7 md:flex justify-between items-center bg-[#1d1d1d]">
        <div className="flex text-2x1 cursor-pointer items-center gap-2">
          <span className="font-bold text-white">FELLISSE</span>
        </div>
        {/* Menu Icon*/}
        <div
          onClick={() => setIsOpen(!isOpen)}
          className={`w-7 h-7 absolute right-8 top-6 cursor-pointer md:hidden`}
        >
          {isOpen ? <XMarkIcon /> : <Bars3BottomRightIcon />}
        </div>
        {/*Nav Links*/}
        <ul
          className={`md:flex md:items-center text-white md:pb-0 pb-12 absolute md:static bg-[#1d1d1d] md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${isOpen ? 'top-12' : 'top-[-490px]'}`}
        >
          {Links.map((link, index) => (
            <li key={index + link.name} className="font-semibold my-7 md:my-0 md:ml-8">
              <a href="">{link.name}</a>
            </li>
          ))}
          {username ? (
            <span className="text-white ml-8">{username}</span>
            ) : (
            <Link to="/register" className="btn bg-red-800 text-white py-1 px-3 md:ml-8 rounded md:static">
              Log In/Register
            </Link>
            )}
        </ul>
      </div>
    </div>
  )
}

Header.propTypes = {
  loggedUser: PropTypes.string
}

export default Header
