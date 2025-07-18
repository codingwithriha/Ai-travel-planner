import React from 'react'
import { Button } from '../button'
import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <div className='flex  flex-col items-center mx-56 gap-9'>
      <h1 className='font-extrabold text-[60px] text-center mt-16'>
        <spna className='text-[#f56551]'>Discover Your Next Adventure with AI:</spna> Personalized Itineraries at Your Fingertips
      </h1>
      <p className='text-xl text-gray-500 text-center'>Your personal trip planner and travel curator, creating custom itineraries tailored to your interests and budget.

</p>
<Link to={'/create-trip'}>
<Button>Get Started, It's Free</Button>
</Link>

    </div>
  )
}

