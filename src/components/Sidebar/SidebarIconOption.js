import React from 'react'
import {SidebarIconOptions} from './SidebarElements'

function SidebarIconOption({ Icon }) {
  return (
    <SidebarIconOptions>
        {Icon && <Icon />}
    </SidebarIconOptions>
  )
}

export default SidebarIconOption