// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import { ApexOptions } from "apexcharts"

// ** Types Imports
import { CircularProgress, Grid } from '@mui/material'
import ReactApexcharts from 'src/@core/components/react-apexcharts'
import React, { useEffect, useState } from 'react'
import { useStartup } from 'src/@core/hooks/useStartup';


const StartupsPerData = (props: any) => {
    // ** Props
    const { percentual = false } = props
    const { startupsData, selectedData } = useStartup()
    const [enterprisesData, setEnteprisesData] = useState([{ x: "", y: 0 }])
    const [isLoading, setIsLoading] = useState(true)

    const functionsPerFilter = {
        perIndustryGroups: () => {
            const dataToSave = organizePerIndustry("industryGroups")
            setEnteprisesData(dataToSave as { x: string; y: number; }[])
            setIsLoading(false)

            return
        },
        perCountry: () => {
            const dataToSave = organizePerFilter("country")
            setEnteprisesData(dataToSave)
            setIsLoading(false)

            return
        },
        perRegion: () => {
            const dataToSave = organizePerFilter("headquartersRegions")
            setEnteprisesData(dataToSave)
            setIsLoading(false)

            return
        },
        perEmployees: () => {
            const dataToSave = organizePerFilter("employeesRange")
            setEnteprisesData(dataToSave)
            setIsLoading(false)

            return
        },
        perFundingRounds: () => {
            const dataToSave = organizePerFilter("numberOfFundingRounds")
            setEnteprisesData(dataToSave)
            setIsLoading(false)

            return
        },

    }
    useEffect(() => {
        if (selectedData.data.length > 0) {
            if (props.filter === "perIndustryGroups") {
                functionsPerFilter["perIndustryGroups"]()

                return
            }
            if (props.filter === "perCountry") {
                functionsPerFilter["perCountry"]()

                return
            }
            if (props.filter === "perRegion") {
                functionsPerFilter["perRegion"]()

                return
            }
            if (props.filter === "perEmployees") {
                functionsPerFilter["perEmployees"]()

                return
            }
            if (props.filter === "perFundingRounds") {
                functionsPerFilter["perFundingRounds"]()
                
return
            }
            if (props.filter === "perFoundedDate") {
                const dataToSave = organizePerMonth()
                setEnteprisesData(dataToSave)
                setIsLoading(false)

                return
            }

        }
        fetch(`https://app.n-sights.ai/backend-api/enterprises/${props.filter}`)
            .then(response => response.json())
            .then(data => {
                setEnteprisesData(data)
                setIsLoading(false)
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
    const organizePerIndustry = (filter: string) => {
        const arrayForSort = [...selectedData.data]

        //@ts-ignore
        arrayForSort.sort((a, b) => b[filter] - a[filter])
        selectedData.data = arrayForSort
        let index = 0

        const allIndustries: any[] = []
        selectedData.data.forEach((enterprise) => {
            //@ts-ignore
            enterprise[filter].forEach((industry: any) => {
                allIndustries.push(industry)
            })
        })
        const groupedEnterprises = allIndustries.reduce((acc, obj) => {
            const key = obj.trim()
            if (!acc[index]) {
                acc[index] = { y: 1, x: key };

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
    const organizePerFilter = (filter: string) => {

        //@ts-ignore
        const arrayForSort = [...selectedData.data]

        //@ts-ignore
        arrayForSort.sort((a, b) => b[filter] - a[filter])
        selectedData.data = arrayForSort
        const groupedEnterprises = reduceFunction(selectedData.data, filter)

        if (filter === "numberOfFundingRounds") {
            const result =  groupedEnterprises.filter((obj: { x: string })=> {
                return obj.x !== "" ;
            });

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

    const chartOptions: ApexOptions = {
        legend: {
            show: true,
        },
        dataLabels: {
            enabled: true,
            style: {
                fontSize: '12px',
            },

            //@ts-ignore
            formatter: function (text, op) {
                if (percentual) {
                        const valuePercentual = ((op.value * 100) / startupsData?.total).toFixed(2)
                        
return [text, `${valuePercentual}%`]
                }

                return [text, op.value]
            },
        },
        colors: [
            "#4B0181",
            "#FFFFFF"
        ],
        plotOptions: {
            treemap: {
                enableShades: true,
                shadeIntensity: 0.5,
                reverseNegativeShade: true,
            }
        },

    }

    return (
        <Card>
            <Grid container direction="column" justifyContent="center" alignItems="stretch">
                <Grid>
                    <CardContent sx={{ height: 40 }}>
                        <Grid container direction="row" justifyContent='space-between'>
                            <Typography sx={{ fontWeight: 'bold', color: "black", fontSize: '1.2rem' }}>{props.title}</Typography>
                        </Grid>
                    </CardContent>
                </Grid>
                <Grid container direction="column" justifyContent="center" alignItems="center">
                    <CardContent >
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center' }}>
                            {
                                isLoading || startupsData.total === 0 ? (
                                    <Box sx={{ display: 'flex' }}>
                                        <CircularProgress />
                                    </Box>) : (
                                    <ReactApexcharts type='treemap' height={720} width={720} options={chartOptions} series={[{
                                        data: enterprisesData
                                    }]} />)
                            }
                        </Box>
                    </CardContent>
                </Grid>
            </Grid>
        </Card >

    )
}

export default StartupsPerData

StartupsPerData.defaultProps = {
    color: 'primary',
    trend: 'positive'
}
