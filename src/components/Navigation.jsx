import React from 'react'
import NavButton from './NavButton'
import ShowAnswer from './ShowAnswer'

const Navigation = () => {
  return (
    <div className="flex justify-between">
        <NavButton />
        <ShowAnswer />
        <NavButton />
    </div>
  )
}

export default Navigation