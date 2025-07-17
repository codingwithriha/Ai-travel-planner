import React from 'react'
import { Button } from '../button'

function Header() {
  return (
    <>
    <div className='p-2 shadow-sm flex justify-between items-center'>
        <img src='/logo.svg' />
    </div>
    <div>
        <Button>Sign In</Button>
    </div>
    </>
  )
}

export default Header