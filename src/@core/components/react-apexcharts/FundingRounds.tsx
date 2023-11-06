// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import { ApexOptions } from "apexcharts"

// ** Types Imports
import { Grid, ToggleButton, ToggleButtonGroup } from '@mui/material'
import ReactApexcharts from 'src/@core/components/react-apexcharts'
import React from 'react'


const FundingRounds = () => {
    // ** Props
    
    const [alignment, setAlignment] = React.useState('monthly');

    const handleChange = (
        event: React.MouseEvent<HTMLElement>,
        newAlignment: string,
    ) => {
        setAlignment(newAlignment);
    };

    const chartOptions: ApexOptions = {
        chart: {
            parentHeightOffset: 0,

            toolbar: { show: false },
        },
        plotOptions: {
            bar: {
                borderRadius: 9,
                columnWidth: '55%',
                startingShape: 'rounded',
            }
        },
        stroke: {
            show: true,
            width: 2,
            colors: ['transparent']
        },
        xaxis: {
            categories: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        },
        grid: {
            strokeDashArray: 7,
            padding: {
                top: -1,
                right: 0,
                left: -12,
                bottom: 5
            }
        },
        dataLabels: { enabled: false },
        colors: [
            "#A47EBF",
            "#FFB58A"
        ],
        states: {
            hover: {
                filter: { type: 'none' }
            },
            active: {
                filter: { type: 'none' }
            }
        },
        legend: {
            onItemHover: {
                highlightDataSeries: true
            },
            show: true,
            showForSingleSeries: true,
            position: 'top',
            horizontalAlign: 'right',
            markers: {
                width: 30,
                height: 30,
                strokeWidth: 0,
                strokeColor: '#fff',
                fillColors: undefined,
                radius: 20,
                customHTML: function () {
                    return '<span class="custom-marker"><i class="fas fa-chart-pie"></i></span>'
                }
            }
        },

        yaxis: {
            show: true,
            tickAmount: 4,
            labels: {
                offsetX: -17,
                formatter: value => `${value > 999 ? `${(value / 1000).toFixed(0)}` : value}`
            }
        }
    }

    const radialOptions: ApexOptions = {
        chart: {
            parentHeightOffset: 0,

            toolbar: { show: false },
        },
        plotOptions: {
            radialBar: {
                startAngle: -135,
                endAngle: 225,
                hollow: {
                    margin: 0,
                    size: '70%',
                    background: '#fff',
                    image: undefined,
                    imageOffsetX: 0,
                    imageOffsetY: 0,
                    position: 'front',
                    dropShadow: {
                        enabled: true,
                        top: 3,
                        left: 0,
                        blur: 4,
                        opacity: 0.24
                    }
                },
                track: {
                    background: '#fff',
                    strokeWidth: '67%',
                    margin: 0,
                    dropShadow: {
                        enabled: true,
                        top: -3,
                        left: 0,
                        blur: 4,
                        opacity: 0.35
                    }
                },
                dataLabels: {
                    show: true,
                    name: {
                        offsetY: -10,
                        show: true,
                        color: '#888',
                        fontSize: '13px'
                    },
                    value: {
                        //@ts-ignore
                        formatter: function (val) {
                            //@ts-ignore
                            return parseInt(val);
                        },
                        color: '#111',
                        fontSize: '25px',
                        show: true,
                    }
                }
            },
        },
        stroke: {
            lineCap: 'round'
        },
        grid: {
            strokeDashArray: 7,
            padding: {
                top: -1,
                right: 0,
                left: -12,
                bottom: 5
            }
        },
        colors: [
            "#A47EBF",
            "#FFB58A"
        ],
        fill: {
            type: 'gradient',
            gradient: {
                shade: 'dark',
                type: 'horizontal',
                shadeIntensity: 0.5,
                gradientToColors: ['#FFB58A'],
                inverseColors: true,
                opacityFrom: 1,
                opacityTo: 1,
                stops: [0, 100]
            }
        },
        labels: ['Total Fundings'],
    }
    
return (
        <Card>
            <Grid container direction="column" justifyContent="center" alignItems="stretch">
                <Grid>
                    <CardContent sx={{ height: 110 }}>
                        <Grid container direction="row" justifyContent='space-between'>
                            <Typography sx={{ fontWeight: 'bold', color: "black", fontSize: '1.2rem' }}>Funding Rounds</Typography>
                            <ToggleButtonGroup
                                color="secondary"
                                value={alignment}
                                sx={{
                                    borderRadius: 10,
                                    backgroundColor: "#F4F1F9",
                                    color: "#4B0181"
                                }}
                                exclusive
                                onChange={handleChange}
                                aria-label="Platform"
                            >
                                <ToggleButton sx={{
                                    borderRadius: 10, textTransform: 'capitalize', borderTopRightRadius: 20, borderBottomRightRadius: 10, width: 100, borderColor: "#F4F1F9", color: "#4B0181", transition: 'opacity .25s ease-in-out',
                                }} value="monthly">Monthly</ToggleButton>
                                <ToggleButton sx={{ width: 100, textTransform: 'capitalize', borderColor: "#F4F1F9", color: "#4B0181" }} value="weekly">Weekly</ToggleButton>
                                <ToggleButton sx={{ borderRadius: 10, textTransform: 'capitalize', width: 100, borderColor: "#F4F1F9", color: "#4B0181" }} value="today">Today</ToggleButton>
                            </ToggleButtonGroup>
                        </Grid>
                    </CardContent>
                </Grid>
                <Grid container direction="column" justifyContent="center" alignItems="center">
                    <CardContent >
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-center', height:120}}>
                            <Box sx={{ display: 'flex', alignItems: 'start', color: 'success.main' }}>
                                <ReactApexcharts type='radialBar' height={180} width={180} options={radialOptions} series={[70]} />
                            </Box>
                            <Box sx={{ display: 'flex', alignItems: 'center', color: 'success.main', ml: 49, pt:8 }}>
                                <Typography sx={{ fontWeight: 800, fontSize: '2rem', m:10 }}>246</Typography>
                                <Typography sx={{ fontWeight: 800, fontSize: '2rem', m:5 }}>28</Typography>
                            </Box>
                        </Box>
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-start' }}>
                            <Box sx={{ display: 'flex', alignItems: 'center', color: 'success.main' }}>
                                <ReactApexcharts type='bar' height={360} width={600} options={chartOptions} series={[{
                                    name: 'On Going',
                                    data: [76, 85, 101, 98, 87, 105, 91]
                                }, {
                                    name: 'Unfinished',
                                    data: [35, 41, 36, 26, 45, 48, 52]
                                }]} />
                            </Box>
                        </Box>
                    </CardContent>
                </Grid>
            </Grid>
        </Card >

    )
}

export default FundingRounds

FundingRounds.defaultProps = {
    color: 'primary',
    trend: 'positive'
}
