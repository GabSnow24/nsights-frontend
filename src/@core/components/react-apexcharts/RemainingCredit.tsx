// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import { ApexOptions } from "apexcharts"
import ArrowLeft from 'mdi-material-ui/ArrowLeft'
import ArrowRight from 'mdi-material-ui/ArrowRight'

// ** Types Imports
import { Grid, IconButton } from '@mui/material'
import ReactApexcharts from 'src/@core/components/react-apexcharts'
import React from 'react'
import { grey } from '@mui/material/colors'


const RemainingCredit = () => {
    // ** Props

    const radialOptions: ApexOptions = {
        chart: {
            offsetY: -10,
            foreColor: '#E2DFD2',
            toolbar: { show: false },
            sparkline: {
                enabled: true
              }
        },
        plotOptions: {
            radialBar: {
                startAngle: -130,
                endAngle: 130,
                hollow: {
                    margin: 20,
                    size: '48%',
                    background: '#F1EAFF',
                    image: undefined,
                    imageOffsetX: 0,
                    imageOffsetY: 0,
                    position: 'front',
                },
                track: {
                    background: "#e7e7e7",
                    strokeWidth: '97%',
                    margin: 5, 
                    dropShadow: {
                      enabled: true,
                      top: 2,
                      left: 0,
                      color: '#999',
                      opacity: 1,
                      blur: 2
                    }
                  },
                dataLabels: {
                    name: {
                        show: false,
                      },
                      value: {
                        offsetY: 6,
                        fontSize: '17px',
                        color:"#000000"
                      },
                }
            },
        },

        grid: {
            padding: {
              top: -10
            }
          },
        
        fill: {
            type: 'gradient',
            gradient: {
                shade: 'light',
                type: 'horizontal',
                shadeIntensity: 0.5,
                gradientToColors: ["#4B0181",],
                inverseColors: true,
                opacityFrom: 1,
                opacityTo: 1,
                stops: [0, 100]
            }
        },
        labels: ['Total Fundings'],
        colors: [
            "#FFB58A",
            "#A47EBF",
        ],
    }
    
return (
        <Card>
            <Grid container direction="row" justifyContent="space-between" alignItems="flex-start">
                <Grid container direction="column" justifyContent="flex-start" alignItems="flex-start" sx={{ width: 300 }}>
                    <CardContent >
                        <Grid container direction="column" justifyContent="space-between" alignItems="flex-start" sx={{ width: 300 }}>
                            <Typography sx={{ fontWeight: 1000, fontSize: '1rem' }}>Remaining credit on your plain</Typography>
                            <Typography sx={{ fontWeight: 500, fontSize: '0.8rem', mt: 6 }}>See the progress of your consumption of downloaded data within your monthly plan.</Typography>
                            <Grid sx={{ mt: 10 }}>
                                <IconButton sx={{ backgroundColor: grey[400], color: "white", mr: 5 }} aria-label="Example">
                                    <ArrowLeft sx={{ fontSize: 20 }} fontSize="small" />
                                </IconButton>
                                <IconButton sx={{ backgroundColor: grey[400], color: "white" }} aria-label="Example">
                                    <ArrowRight fontSize="small" />
                                </IconButton>
                            </Grid>
                        </Grid>
                    </CardContent>
                </Grid>
                <Grid >
                    <CardContent >
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-center', mr: 15 }}>
                            <Box sx={{ alignItems: 'center', color: 'success.main' }}>
                                <ReactApexcharts type='radialBar' height={220} width={220} options={radialOptions} series={[60]} />
                                <Grid container direction="row" alignItems='center' >
                                    <Typography sx={{ fontWeight: 1000, fontSize: '1rem', ml: 10 }}>Available</Typography>
                                    <Typography sx={{ fontWeight: 1000, color:"#09BD3C", fontSize: '2rem', ml:2 }}>40%</Typography>
                                </Grid>
                            </Box>
                        </Box>
                    </CardContent>
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

export default RemainingCredit

RemainingCredit.defaultProps = {
    color: 'primary',
    trend: 'positive'
}
