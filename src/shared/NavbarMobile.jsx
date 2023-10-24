import { NavLink, useLocation } from 'react-router-dom'
import homeIcon from '../assets/icons/Home.svg'
import homeIconRed from '../assets/icons/Home_red.svg'
import searchIcon from '../assets/icons/Search.svg'
import searchIconRed from '../assets/icons/Search_red.svg'
import uploadIcon from '../assets/icons/Plus.svg'
import uploadIconRed from '../assets/icons/Plus_red.svg'
import profileIcon from '../assets/icons/Profil.svg'
import profileRed from '../assets/icons/Profil_red.svg'
import { useState } from 'react'

function NavbarMobile() {
  const [toggleSearchBar, setToggleSearchBar] = useState(false)

  const location = useLocation()
  return (
    <ul className="fixed bottom-0 left-0 right-0 flex w-sceen justify-evenly  h-12 text-[#9E9E9E] text-[10px] bg-white">
      <li className="flex flex-col justify-center items-center">
        <NavLink to="/feed">
          <img
            src={location.pathname === '/feed' ? homeIconRed : homeIcon}
            alt="home icon"
            className="h-[24px] mx-auto"
          />
          <p style={location.pathname === '/feed' ? { color: 'red' } : { color: ' ' }}>Home</p>
        </NavLink>
      </li>
      <li className="flex flex-col justify-center">
        <NavLink
          to="/search"
          onClick={() => {
            setToggleSearchBar(!toggleSearchBar)
          }}>
          <img
            src={location.pathname === '/search' ? searchIconRed : searchIcon}
            alt="search icon"
            className="h-[24px] mx-auto"
          />
          <p style={location.pathname === '/search' ? { color: 'red' } : { color: ' ' }}>Search</p>
        </NavLink>
      </li>
      <li className="flex flex-col justify-center">
        <NavLink to="/upload">
          <img
            src={location.pathname.includes('/upload') ? uploadIconRed : uploadIcon}
            alt="upload icon"
            className="h-[24px] mx-auto"
          />
          <p style={location.pathname.includes('/upload') ? { color: 'red' } : { color: ' ' }}>Upload</p>
        </NavLink>
      </li>
      <li className="flex flex-col justify-center">
        <NavLink to="/profile" style={location.pathname === '/profile' ? { color: 'red' } : { color: ' ' }}>
          <img
            src={location.pathname === '/profile' ? profileRed : profileIcon}
            alt="profile icon"
            className="h-[24px] mx-auto"
          />
          <p style={location.pathname === '/profile' ? { color: 'red' } : { color: ' ' }}>Profile</p>
        </NavLink>
      </li>
    </ul>
  )
}

export default NavbarMobile
