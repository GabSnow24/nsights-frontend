// ** React Import
import { ReactNode } from 'react'

// ** Next Import
import Link from 'next/link'

// ** MUI Imports
import Box, { BoxProps } from '@mui/material/Box'
import { styled } from '@mui/material/styles'


// ** Type Import
import { Settings } from 'src/@core/context/settingsContext'

// ** Configs

interface Props {
  hidden: boolean
  settings: Settings
  toggleNavVisibility: () => void
  saveSettings: (values: Settings) => void
  verticalNavMenuBranding?: (props?: any) => ReactNode
}

// ** Styled Components
const MenuHeaderWrapper = styled(Box)<BoxProps>(() => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  transition: 'padding .25s ease-in-out',
  minHeight: "80px",
  backgroundColor:"#E9E2F8"
}))


const StyledLink = styled('a')({
  display: 'flex',
  alignItems: 'center',
  textDecoration: 'none'
})

const VerticalNavHeader = (props: Props) => {
  // ** Props
  const { verticalNavMenuBranding: userVerticalNavMenuBranding } = props

  // ** Hooks

  return (
    <MenuHeaderWrapper className='nav-header' sx={{ pl: 15  }} >
      {userVerticalNavMenuBranding ? (
        userVerticalNavMenuBranding(props)
      ) : (

        <Link href='/' passHref>
          <StyledLink>
          <Box sx={{pr:3}}><img width="30" alt="Aero-stub img" src="/images/favicon.png"/></Box>
          <Box sx={{mr:3}}><img width="150" alt="Aero-stub img" src="/images/nsights.png"/></Box>
          </StyledLink>
        </Link>
      )}
    </MenuHeaderWrapper>
  )
}

export default VerticalNavHeader
