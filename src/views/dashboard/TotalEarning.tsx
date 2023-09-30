// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'


// ** Types
// import { ThemeColor } from 'src/@core/layouts/types'
import { Button, ButtonProps, CardActions, Grid, styled } from '@mui/material'

// interface DataType {
//   title: string
//   imgSrc: string
//   amount: string
//   subtitle: string
//   progress: number
//   color: ThemeColor
//   imgHeight: number
// }

// const data: DataType[] = [
//   {
//     progress: 75,
//     imgHeight: 30,
//     title: 'Latam',
//     color: 'primary',
//     amount: '$24,895.65',
//     subtitle: 'Emissão de passagem',
//     imgSrc: '/images/cards/latam.png'
//   },
//   {
//     progress: 50,
//     color: 'info',
//     imgHeight: 15,
//     title: 'Smiles',
//     amount: '$8,650.20',
//     subtitle: 'Venda de milhas',
//     imgSrc: '/images/cards/smiles.png'
//   },
//   {
//     progress: 20,
//     imgHeight: 40,
//     title: 'Livelo',
//     color: 'secondary',
//     amount: '$1,245.80',
//     subtitle: 'Bonificação',
//     imgSrc: '/images/cards/livelo.png'
//   }
//]


const ColorButton = styled(Button)<ButtonProps>(({  }) => ({
  color: "#000000",
  borderRadius: 20,
  backgroundColor: "#FFFFFF",
}));

const TotalEarning = () => {
  return (
    <Card sx={{ background: 'linear-gradient(to top, #4B0181 , #a580c0)' }}>
      <Grid container spacing={2} sx={{ alignItems: 'center', pl:4, mb:9 }} >
        <Grid item xs={12} md={6} lg={6} sx={{ mt:10 }} >
          <CardContent >
            <Typography variant="h5" component="div" sx={{ color: "#FFFFFF", mb:8 }}>
              Ai Insights
            </Typography>
            <Typography variant="body2" sx={{ color: "#FFFFFF" }}>
              Let Fillow manage your project automatically with our best AI systems
            </Typography>
          </CardContent>
          <CardActions>
            <ColorButton variant="contained">Try Free Now</ColorButton>
          </CardActions>
        </Grid>
        <Grid container item xs={12} md={6} lg={6} sx={{mt:10, mb:5, justifyContent: 'center'}}>
          <Box sx={{}}><img width="200" alt="Aero-stub img" src="/images/chart.png" /></Box>
        </Grid>
      </Grid>
    </Card>
  )
}

export default TotalEarning
