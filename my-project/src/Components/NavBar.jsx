import React from 'react'

const NavBar = () => {
  return (
    <div className='[background-color:#1b1b2e] p-6'>
          <div className='flex items-center justify-between'>
          <div><img src='./assets(1)/assets/brainwave.svg' className='[]'/></div>
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
                  <div className='gradient text-sm flex items-center justify-center font-bold w-32 rounded-xl'>
                  <span className=''>sign up</span>
                  {/* text-sm flex items-center justify-center font-bold border border-gradient-to-r from-yellow-500 via-red-500 to-yellow-500 p-2 w-32 rounded-xl */}
                  </div>
                  </div>
              </div>
    </div>
  )
}

export default NavBar
