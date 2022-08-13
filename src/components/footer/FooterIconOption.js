import React from 'react'
import {FooterIconOptions} from './FooterElements'
function FooterIconOption({ Icon }) {
  return (
    <FooterIconOptions>
        {Icon && <Icon />}
    </FooterIconOptions>
  )
}

export default FooterIconOption