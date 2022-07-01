import React from 'react'
import AppbarMobileHeader from './AppbarMobileHeader';


function AppbarMobile({ matches }) {
  return (
    <div className='app'>
      <AppbarMobileHeader />
      
    </div>
    
  )
}
//npm install @mui/icons-material
export default AppbarMobile

/*<AppbarContainer>
        <IconButton>
            <MenuIcon />
        </IconButton>
        <AppbarHeader textAlign={'center'} variant="h4">
            TPM
        </AppbarHeader>
        <Actions matches={matches} />
  </AppbarContainer>*/