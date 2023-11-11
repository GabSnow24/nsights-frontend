// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import { ApexOptions } from "apexcharts"

// ** Types Imports
import { Grid } from '@mui/material'
import ReactApexcharts from 'src/@core/components/react-apexcharts'
import React, { useEffect, useState } from 'react'
import { useStartup } from 'src/@core/hooks/useStartup';

const StartupsPerFoundedDate = () => {
    // ** Props

    
    const [enterprisesData, setEnteprisesData] = useState([{ x: "", y: 0 }])
    const { selectedData } = useStartup()

    useEffect(() => {
        if (selectedData.data.length > 0) {
            const dataToSave = organizePerMonth()
            setEnteprisesData(dataToSave)
            
return
        }
        fetch(`https://app.n-sights.ai/backend-api/enterprises/perFoundedDate`)
            .then(response => response.json())
            .then(data => {
                setEnteprisesData(data)
            })
    }, [selectedData])

    const organizePerMonth = () => {

        const arrayForSort = [...selectedData.data]
        arrayForSort.sort((a, b) => new Date(b.foundedDate).getTime() - new Date(a.foundedDate).getTime())
        selectedData.data = arrayForSort
        let index = 0
        const groupedEnterprises = selectedData.data.reduce((acc, obj) => {

            const day = obj.foundedDate.toString().split("T")[0].split("-")[2]
            const month = obj.foundedDate.toString().split("T")[0].split("-")[1]
            const year = obj.foundedDate.toString().split("T")[0].split("-")[0]

            const key = `${day}-${month}-${year}`;
            if (!acc[index]) {
                acc[index] = { y: 1, x: key } as never;

                return acc
            }

            //@ts-ignore
            if (acc[index].x === key) {
                //@ts-ignore
                acc[index] = { ...acc[index], y: acc[index].y + 1 };

                return acc
            } else {
                index++

                //@ts-ignore
                acc[index] = { y: 1, x: key };
            }

            return acc;
        }, [])


        return groupedEnterprises
    }

    const categories = enterprisesData.map((value: any) => {
        return value.x
    })

    const dataSeries = enterprisesData.map((value: any) => {
        return value.y
    })

    const chartOptions: ApexOptions = {
        chart: {
            parentHeightOffset: 0,

            // toolbar: { show: false },
        },
        stroke: {
            curve: 'smooth'
        },
        xaxis: {
            categories,
            labels: {
              show: false
            },
          },
          markers: {
            size: 5
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
            "#4B0181",
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
            show: false,
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

    return (
        <Card>
            <Grid container direction="column" justifyContent="center" alignItems="stretch">
                <Grid>
                    <CardContent sx={{ height: 110 }}>
                        <Grid container direction="row" justifyContent='space-between'>
                            <Typography sx={{ fontWeight: 'bold', color: "black", fontSize: '1.2rem' }}>Startups per Founded Date</Typography>
                        </Grid>
                    </CardContent>
                </Grid>
                <Grid container direction="column" justifyContent="center" alignItems="center">
                    <CardContent >
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-start' }}>
                            <Box sx={{ display: 'flex', alignItems: 'center', color: 'success.main' }}>
                                <ReactApexcharts type='line' height={400} width={710} options={chartOptions} series={[{
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

export default StartupsPerFoundedDate

StartupsPerFoundedDate.defaultProps = {
    color: 'primary',
    trend: 'positive'
}
