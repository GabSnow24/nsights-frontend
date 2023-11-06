// ** MUI Imports
import Box from '@mui/material/Box'
import { Theme, styled } from '@mui/material/styles'
import TextField from '@mui/material/TextField'
import IconButton from '@mui/material/IconButton'
import useMediaQuery from '@mui/material/useMediaQuery'
import InputAdornment from '@mui/material/InputAdornment'

// ** Icons Imports
import Menu from 'mdi-material-ui/Menu'
import Magnify from 'mdi-material-ui/Magnify'

// ** Type Import
import { Settings } from 'src/@core/context/settingsContext'

// ** Components
import ModeToggler from 'src/@core/layouts/components/shared-components/ModeToggler'
import UserDropdown from 'src/@core/layouts/components/shared-components/UserDropdown'
import NotificationDropdown from 'src/@core/layouts/components/shared-components/NotificationDropdown'
import { Typography, TypographyProps } from '@mui/material'
import MailDropdown from 'src/@core/layouts/components/shared-components/MailDropdown'
import CalendarDropdown from 'src/@core/layouts/components/shared-components/CalendarDropdown'
import FavoriteDropdown from 'src/@core/layouts/components/shared-components/FavoriteDropdown'


interface Props {
  hidden: boolean
  title: string
  settings: Settings
  toggleNavVisibility: () => void
  saveSettings: (values: Settings) => void
}

const TypographyHeaderText = styled(Typography)<TypographyProps>(({ }) => ({
  fontSize: '1.8rem',
  lineHeight: 'normal',
  letterSpacing: '0.10px',
  color: "#000000",
  fontWeight: "bolder"
}))

const AppBarContent = (props: Props) => {
  // ** Props
  const { settings, saveSettings, toggleNavVisibility, title } = props

  // ** Hook
  const hiddenSm = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'))

  return (
    <Box sx={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      <Box className='actions-left' sx={{ mr: 2, display: 'flex', alignItems: 'center' }}>

        <IconButton
          color='inherit'
          onClick={toggleNavVisibility}
          sx={{ ml: -2.75, ...(hiddenSm ? {} : { mr: 3.5 }) }}
        >
          <Menu />
        </IconButton>
        <TypographyHeaderText > {title} </TypographyHeaderText>

      </Box>

      <Box className='actions-right' sx={{ display: 'flex', alignItems: 'center' }}>
        <TextField
          size='small'
          sx={{ '& .MuiOutlinedInput-root': { borderRadius: 4, backgroundColor: "#FFFFFF" }, mr: 5 }}
          placeholder="Search here..."
          InputProps={{
            endAdornment: (
              <InputAdornment position='start'>
                <Magnify fontSize='small' />
              </InputAdornment>
            )
          }}
        />
        <ModeToggler settings={settings} saveSettings={saveSettings} />
        <FavoriteDropdown />
        <NotificationDropdown />
        <MailDropdown />
        <CalendarDropdown />
        <UserDropdown />
      </Box>
    </Box>
  )
}

export default AppBarContent
