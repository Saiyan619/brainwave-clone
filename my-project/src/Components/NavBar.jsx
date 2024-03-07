import React from 'react'

const NavBar = () => {
  return (
    <div className='bg-black p-6'>
          <div className='flex items-center justify-between'>
          <div><img src='./assets(1)/assets/brainwave.svg' /></div>
          <div>
              <ul className='flex items-center justify-between gap-10 uppercase text-sm font-bold text-gray-600'>
                  <li>Features</li>
                  <li>Features</li>
                  <li>Features</li>
                  <li>Features</li>
              </ul>
              </div>
              
          <div className='flex items-center gap-10 uppercase'>
              <span className='text-sm font-bold text-gray-600'>new account</span>
              <span className=''>sign up</span>
              </div>
              </div>
    </div>
  )
}

export default NavBar
