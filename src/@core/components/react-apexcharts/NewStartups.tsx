// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import Calendar from 'mdi-material-ui/CalendarToday';
import KeyDown from 'mdi-material-ui/ChevronDown';
import { ApexOptions } from "apexcharts"
import ReactCountryFlag from "react-country-flag";

// ** Types Imports
import { Button, Grid, Menu, MenuItem } from '@mui/material'
import ReactApexcharts from 'src/@core/components/react-apexcharts'
import React, { useEffect, useState } from 'react'


const NewStartups = () => {
    // ** Props
    const countryData = [
        {
            name: "BRAZIL",
            code: "BR"
        },
        {
            name: "COLOMBIA",
            code: "CO"
        },
        {
            name: "PANAMA",
            code: "PA"
        },
        {
            name: "ARGENTINA",
            code: "AR"
        },
        {
            name: "PERU",
            code: "PE"
        },
        {
            name: "USA",
            code: "US"
        },
        {
            name: "MEXICO",
            code: "MX"
        },
        {
            name: "CHILE",
            code: "CL"
        },
        {
            name: "CANADA",
            code: "CA"
        },
        {
            name: "FRANCE",
            code: "FR"
        },
        {
            name: "SPAIN",
            code: "ES"
        },
        {
            name: "ENGLAND",
            code: "GBR"
        },
        {
            name: "NETHERLANDS",
            code: "NL"
        },
        {
            name: "ITALY",
            code: "IT"
        },
        {
            name: "PORTUGAL",
            code: "PT"
        },
        {
            name: "JAPAN",
            code: "JP"
        },
    ]
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const [enterprisesPerMonth, setEnteprisesPerMonth] = useState([])
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    useEffect(() => {
        fetch(`https://app.n-sights.ai/backend-api/enterprises/perMonth`)
            .then(response => response.json())
            .then(data => {
                setEnteprisesPerMonth(data)
            })
    }, [])

    const categories = enterprisesPerMonth.map((value: any) => {
        return value.date.slice(0, 5)
    })

    const dataSeries = enterprisesPerMonth.map((value: any) => {
        return value.count
    })
    const chartOptions: ApexOptions = {
        chart: {
            parentHeightOffset: 0,
            toolbar: { show: false },
        },
        plotOptions: {
            bar: {
                borderRadius: 10,
                dataLabels: {
                    position: 'top', // top, center, bottom
                },
            }
        },
        dataLabels: {
            enabled: true,
            offsetY: -20,
            style: {
                fontSize: '12px',
                colors: ["#304758"]
            }
        },
        xaxis: {
            categories,
            position: 'top',
            axisBorder: {
                show: false
            },
            axisTicks: {
                show: false
            },
            crosshairs: {
                fill: {
                    type: 'gradient',
                    gradient: {
                        colorFrom: '#D8E3F0',
                        colorTo: '#BED1E6',
                        stops: [0, 100],
                        opacityFrom: 0.4,
                        opacityTo: 0.5,
                    }
                }
            },
            tooltip: {
                enabled: true,
            }
        },
        yaxis: {
            axisBorder: {
              show: false
            },
            axisTicks: {
              show: false,
            },
            labels: {
              show: false,
              formatter: function (val) {
                return val + "%";
              }
            }
          
          },
    }

    return (
        <Card>
            <Grid container direction="column" justifyContent="center" alignItems="stretch">
                <Grid>
                    <CardContent sx={{ height: 110 }}>
                        <Grid container direction="row" justifyContent='space-between'>
                            <Typography sx={{ fontWeight: 'bold', color: "black", fontSize: '1.2rem' }}>New Startups</Typography>
                            <Grid>
                                <Button variant="outlined" startIcon={<Calendar />} sx={{
                                    color: "#667085", borderColor: "#E0E2E7", borderRadius: 1, textTransform: 'capitalize', mr: 10, '&:hover': {
                                        backgroundColor: "#742C9A",
                                        color: "white",
                                        borderColor: "white",
                                    }
                                }}>
                                    Period
                                </Button>
                                <Button variant="outlined" startIcon={<KeyDown />} onClick={handleClick} sx={{
                                    color: "#667085", borderColor: "#E0E2E7", borderRadius: 1, textTransform: 'capitalize', '&:hover, &:active': {
                                        backgroundColor: "#742C9A",
                                        color: "white",
                                        borderColor: "white",
                                    }
                                }}>
                                    Country
                                </Button>
                                <Menu
                                    anchorEl={anchorEl}
                                    open={Boolean(anchorEl)}

                                    onClose={handleClose}
                                    sx={{ '& .MuiMenu-paper': { width: 500, marginTop: 4 } }}
                                    anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                                    transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                                >
                                    <Grid container
                                        direction="row"
                                        justifyContent="flex-start"
                                        alignItems="center">
                                        {
                                            countryData.map((country, index) => {
                                                return (
                                                    <Grid key={index} item>

                                                        <MenuItem sx={{
                                                            '&:hover': {
                                                                backgroundColor: "white",
                                                                color: "white",
                                                                borderColor: "white",
                                                            }
                                                        }}>
                                                            <Button variant="outlined" startIcon={<ReactCountryFlag countryCode={country.code} />} sx={{
                                                                width: 130,
                                                                fontSize: 12,
                                                                color: "#667085", borderColor: "#E0E2E7", borderRadius: 1, '&:hover': {
                                                                    backgroundColor: "#742C9A",
                                                                    color: "white",
                                                                    borderColor: "white",
                                                                }
                                                            }}>
                                                                {country.name}
                                                            </Button>
                                                        </MenuItem>
                                                    </Grid>)
                                            })
                                        }
                                    </Grid>


                                </Menu>
                            </Grid>
                        </Grid>
                    </CardContent>
                </Grid>
                <Grid container direction="column" justifyContent="center" alignItems="center">
                    <CardContent >
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-start' }}>
                            <Box sx={{ display: 'flex', alignItems: 'center', color: 'success.main' }}>
                                <ReactApexcharts type='bar' height={360} width={600} options={chartOptions} series={[{
                                    name: 'Founded',
                                    data: dataSeries
                                }]} />
                            </Box>
                        </Box>
                    </CardContent>
                </Grid>
            </Grid>
        </Card >

    )
}

export default NewStartups

NewStartups.defaultProps = {
    color: 'primary',
    trend: 'positive'
}
