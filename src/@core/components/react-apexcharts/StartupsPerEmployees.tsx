// ** MUI Imports
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import { ApexOptions } from "apexcharts"

// ** Types Imports
import { Grid } from '@mui/material'
import ReactApexcharts from 'src/@core/components/react-apexcharts'
import React, { useEffect, useState } from 'react'
import { useStartup } from 'src/@core/hooks/useStartup';

const StartupsPerEmployees = () => {
    // ** Props


    const [enterprisesData, setEnteprisesData] = useState([{ x: "", y: 0 }])
    const { selectedData } = useStartup()


    useEffect(() => {
        if (selectedData.data.length > 0) {
            const dataToSave = organizePerFilter("employeesRange")
            setEnteprisesData(dataToSave as {x: string; y: number;}[])
            
return
        }
        fetch(`https://app.n-sights.ai/backend-api/enterprises/perEmployees`)
            .then(response => response.json())
            .then(data => {
                setEnteprisesData(data)
            })
    }, [selectedData])

    const organizePerFilter = (filter: string) => {

        //@ts-ignore
        const arrayForSort = [...selectedData.data]

        //@ts-ignore
        arrayForSort.sort((a, b) => b[filter] - a[filter])
        selectedData.data = arrayForSort
        const groupedEnterprises = reduceFunction(selectedData.data, filter)

        if (filter === "headquartersRegions") {
            const result = Object.values(
                groupedEnterprises.reduce((acc: { [x: string]: { y: any; }; }, item: { x: string | number; y: any; }) => {
                    acc[item.x] = acc[item.x]
                        ? { ...item, y: item.y + acc[item.x].y }
                        : item;

                    return acc;
                }, {})
            );

            return result
        }

        return groupedEnterprises
    }

    const reduceFunction = (data: any, filter: string) => {
        let index = 0
        const groupedData = data.reduce((acc: any, obj: any) => {

            const key = obj[filter]
            if (!acc[index]) {
                acc[index] = { y: 1, x: key } as never;

                return acc
            }
            if (acc[index].x === key) {

                acc[index] = { ...acc[index], y: acc[index].y + 1 };

                return acc
            } else {
                index++
                acc[index] = { y: 1, x: key };
            }

            return acc;
        }, [])

        return groupedData
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

            toolbar: { show: false },
        },
        plotOptions: {
            bar: {
              borderRadius: 4,
              horizontal: true,
            }
          },
        stroke: {
            curve: 'smooth'
        },
        xaxis: {
            categories,
            
          },
        grid: {
            strokeDashArray: 7,
            padding: {
                top: -1,
                right: 0,
                left: 0,
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
            
        }
    }

    return (
        <Card>
            <Grid container direction="column" justifyContent="center" alignItems="stretch">
                <Grid>
                    <CardContent sx={{ height: 50 }}>
                        <Grid container direction="row" justifyContent='space-between'>
                            <Typography sx={{ fontWeight: 'bold', color: "black", fontSize: '1.2rem' }}>Startups per Number of Employees</Typography>
                        </Grid>
                    </CardContent>
                </Grid>
                <Grid container direction="column" justifyContent="center" alignItems="center">
                    <CardContent >
                            
                                <ReactApexcharts type='bar' height={700} width={710} options={chartOptions} series={[{
                                    name: 'Per Number of Employees',
                                    data: dataSeries
                                }]} />
                            
                    </CardContent>
                </Grid>
            </Grid>
        </Card >

    )
}

export default StartupsPerEmployees

StartupsPerEmployees.defaultProps = {
    color: 'primary',
    trend: 'positive'
}
