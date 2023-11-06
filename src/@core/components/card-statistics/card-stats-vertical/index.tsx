// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Avatar from '@mui/material/Avatar'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'

// ** Types Imports
import { CardStatsVerticalProps } from 'src/@core/components/card-statistics/types'
import { MenuUp } from 'mdi-material-ui'
import { Grid } from '@mui/material'


const CardStatsVertical = (props: CardStatsVerticalProps) => {
  // ** Props
  const { title, subtitle, color, icon = false, stats, trend, trendNumber, enableTrend = true } = props

  return (
    <Card>
      <Grid container >
        <Grid>
          <CardContent sx={{height:110}}>
            <Box sx={{ display: 'flex', marginBottom: 5.5, alignItems: 'flex-start', justifyContent: 'space-between' }}>
              {icon ? <Avatar sx={{ boxShadow: 3, color: 'common.white', backgroundColor: `${color}.main` }}>
                {icon}
              </Avatar> : null}
              {/* <IconButton size='small' aria-label='settings' className='card-more-options' sx={{ color: 'text.secondary' }}>
            <DotsVertical />
          </IconButton> */}
            </Box>
            <Typography sx={{ fontWeight: 800, fontSize: '1rem' }}>{title}</Typography>
            { enableTrend ? (<Box sx={{ marginTop: 1.5, display: 'flex', flexWrap: 'wrap', marginBottom: 1.5, alignItems: 'flex-start' }}>
              <Typography variant='h6' sx={{ mr: 2 }}>
                {stats}
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', color: 'success.main' }}>
                <MenuUp sx={{ fontSize: '1.875rem', verticalAlign: 'middle' }} />
                <Typography
                  component='sup'
                  variant='caption'
                  sx={{ color: trend === 'positive' ? 'success.main' : 'error.main' }}
                >
                  {trendNumber}
                </Typography>
              </Box>
            </Box>) : null}
            <Typography variant='caption'>{subtitle}</Typography>
          </CardContent>
        </Grid>
        <Grid>
          <CardContent>
            <Box sx={{ marginTop: 1.5, display:'flex', flexWrap: 'wrap', marginBottom: 1.5, alignItems: 'flex-start' }}>
              <Box sx={{ display: 'flex', alignItems: 'center', color: 'success.main' }}>
                {props.chart}
              </Box>
            </Box>
          </CardContent>
        </Grid>
      </Grid>
    </Card>

  )
}

export default CardStatsVertical

CardStatsVertical.defaultProps = {
  color: 'primary',
  trend: 'positive'
}
