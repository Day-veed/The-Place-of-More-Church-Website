import React from 'react'
import {NavIconOptions, NavOptionTitle} from './NavBarElements'
function NavIconOption({ Icon, title }) {
  return (
    <NavIconOptions>
        {Icon && <Icon />}
        <NavOptionTitle>{title}</NavOptionTitle>
    </NavIconOptions>
  )
}

export default NavIconOption