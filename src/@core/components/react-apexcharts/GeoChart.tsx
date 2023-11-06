// ** MUI Imports
import { Chart } from "react-google-charts";

// ** Types Imports

import React, { useEffect, useState } from 'react'
import { Box, Card, CardContent, Grid, Typography } from "@mui/material";
import { useStartup } from "src/@core/hooks/useStartup";




const GeoChart = () => {
    const [enterprisesData, setEnteprisesData] = useState([["Country", "Startups"]])
    const { selectedData } = useStartup()
    
    useEffect(() => {
        if (selectedData.data.length > 0) {
            const dataFiltered = organizePerFilter("country")
            const dataToSave = dataFiltered.map((enterprise: { x: any; y: any; })=>{
                return [enterprise.x, enterprise.y]
            })
            setEnteprisesData([["Country", "Startups"], ...dataToSave])
            
return  
        }
        fetch(`https://app.n-sights.ai/backend-api/enterprises/perCountry`)
            .then(response => response.json())
            .then(data => {
                const dataToSave = data.map((enterprise: { x: any; y: any; })=>{
                    return [enterprise.x, enterprise.y]
                })
                setEnteprisesData([...enterprisesData, ...dataToSave])
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

    const options = {
        colorAxis: { colors: ["#B08FC7", "#682995"] },
        defaultColor: "#f5f5f5",
      };

    return (
        <Card>
            <Grid container direction="column" justifyContent="center" alignItems="stretch">
                <Grid>
                    <CardContent sx={{ height: 50 }}>
                        <Grid container direction="row" justifyContent='space-between'>
                            <Typography sx={{ fontWeight: 'bold', color: "black", fontSize: '1.2rem' }}>Startups per Country</Typography>
                        </Grid>
                    </CardContent>
                </Grid>
                <Grid container direction="column" justifyContent="center" alignItems="center">
                    <CardContent >
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-start' }}>
                            <Box sx={{ display: 'flex', alignItems: 'center',  }}>
                                <Chart
                                    chartEvents={[
                                        {
                                            eventName: "select",
                                            callback: ({ chartWrapper }) => {
                                                const chart = chartWrapper.getChart();
                                                const selection = chart.getSelection();
                                                if (selection.length === 0) return;
                                            },
                                        },
                                    ]}
                                    options={options}
                                    chartType="GeoChart"
                                    width="100%"
                                    height="400px"
                                    data={enterprisesData}
                                />
                            </Box>
                        </Box>
                    </CardContent>
                </Grid>
            </Grid>
        </Card >
    )
}

export default GeoChart

GeoChart.defaultProps = {
    color: 'primary',
    trend: 'positive'
}
