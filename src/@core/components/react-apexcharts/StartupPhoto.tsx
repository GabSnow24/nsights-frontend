// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'

// ** Types Imports
import { Grid, styled } from '@mui/material'
import React from 'react'


const StartupPhoto = (props: any) => {
    // ** Props
    const Img = styled('img')(({ }) => ({
        height: '6rem',
        width: "6rem",
        borderRadius: 20
    }))

    return (
        <Card>
            <Grid container direction="row" wrap="nowrap" // --> add this line to disable wrap
                 justifyContent="space-evenly" alignItems="center">
                <Grid>
                    <CardContent sx={{ ml: 12 }} >
                        <Box sx={{ alignItems: 'center', color: 'success.main', }}>
                            <Img alt='Enterprise Logo' src={props.imagePath} />
                        </Box>
                    </CardContent>
                </Grid>
                <Grid container direction="column" justifyContent="flex-start" alignItems="flex-start" sx={{ width: 300, mt:3, mb:3 }}>
                        <Grid container direction="column" justifyContent="space-evenly" alignItems="flex-start" sx={{ width: 300 }}>
                            <Typography sx={{ fontWeight: 1000, color: "#4B0181", fontSize: '2rem' }}>{props.title}</Typography>
                            <Typography sx={{ fontWeight: 500, fontSize: '1rem', mt: 6 }}>{props.category}</Typography>
                        </Grid>
                </Grid>

                {/* <Grid container direction="column" justifyContent="center" alignItems="center">
                    <CardContent >
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-center' }}>
                            <Box sx={{ display: 'flex', alignItems: 'start', color: 'success.main' }}>
                                <ReactApexcharts type='radialBar' height={180} width={180} options={radialOptions} series={[70]} />
                            </Box>
                        </Box>
                    </CardContent>
                </Grid> */}
            </Grid>
        </Card >

    )
}

export default StartupPhoto

StartupPhoto.defaultProps = {
    color: 'primary',
    trend: 'positive'
}
