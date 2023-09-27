import React, {useState} from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'


const NavBar = () => {

  const [nav, setNav] = useState(false)

  const links = [
    {
      id: 1,
      name: 'About Me',
      href: '#'
    },
    {
      id: 2,
      name: 'Education',
      href: '#edu'
    },
    {
      id: 3,
      name: 'Projects',
      href: '#proj'
    },
    {
      id: 4,
      name: 'Certifications',
      href: '#cert'
    },
    {
      id: 5,
      name: 'Contact Me',
      href: '#contact'
    }
  ]

  return (
    <nav className="h-20 py-6 px-6 lg:px-36 flex justify-between sticky z-50 top-0 bg-grey shadow-lg bg-opacity-60 bg-clip-padding" style={{ backdropFilter: 'blur(20px)' }}>
      <div className="select-none tracking-widest font-bold md:text-2xl text-2xl text-gold">
        {/* <a href="" className="p-2 m-2"> */}
          Pranav Undre
        {/* </a> */}
      </div>

      {/* Desktop Navigation */}
      <ul className="hidden navb:flex">
        {links.map((link) => (
          <li key={link.id} className="m-1.5 mr-2">
            <a href={link.href} className="text-faintgrey p-2 hover:text-gold">
              {link.name}
            </a>
          </li>
        ))}
      </ul>

      {/* Mobile Hamburger Menu */}
      <div
        onClick={() => setNav(!nav)}
        className="navb:hidden cursor-pointer z-10 text-faintgrey"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {/* Mobile Navigation Menu */}
      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 h-screen w-full bg-gradient-to-b from-black to-grey">
          {links.map((link) => (
            <li key={link.id} className="mb-6">
              <a
                href={link.href}
                className="text-faintgrey text-2xl p-2 hover:text-gold"
                onClick={() => setNav(false)} // Close menu on click
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  )
}

export default NavBar
