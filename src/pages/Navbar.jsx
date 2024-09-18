import { useState } from 'react'

export default function Navbar() {
  const [ isOpen, setIsOpen ] = useState(false)

  const handleLinksOpenning = () => {
    setIsOpen(!isOpen)
  }
  
  return <>
    <div className='navbar'>
      <div className='nav-logo'>
        <h1>Nick</h1>
      </div>
      <div className={isOpen ? 'mobile-nav-links': 'nav-links'}>
        <a href='#projects'>Projects</a>
        <a href='#tools'>Skills</a>
        <a href='#blogs'>Blogs</a>
        <a href='#contact'>Contact</a>
        <button className='menu' onClick={handleLinksOpenning}>
          <span className='line top'></span>
          <span className='line middle'></span>
          <span className='line bottom'></span>
        </button>
      </div>
    </div>
  </>
}