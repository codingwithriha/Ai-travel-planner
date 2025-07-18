import React from 'react'
import { Button } from '../button'

function Header() {
  return (
    <header className="flex justify-between items-center px-6 py-4 shadow-sm bg-white">
      <div className="flex items-center ">
        <img src="/logo.svg" alt="Logo" className="w-8 h-8" />
      </div>
      <div>
        <Button>
          Sign In
        </Button>
      </div>
    </header>
  )
}

export default Header
