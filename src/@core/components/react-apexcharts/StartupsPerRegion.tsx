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

const StartupsPerRegion = () => {
    // ** Props


    const [enterprisesData, setEnteprisesData] = useState([{ x: "", y: 0 }])
    const { selectedData, startupsData } = useStartup()


    useEffect(() => {
        if (selectedData.data.length > 0) {
          const dataToSave = organizePerFilter("headquartersRegions")
            setEnteprisesData(dataToSave as {x: string; y: number;}[])
            
return
        }
        fetch(`https://app.n-sights.ai/backend-api/enterprises/perRegion`)
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
        return (((value.y * 100) / startupsData?.total)*100).toFixed(2) as unknown as number
    })

    const chartOptions: ApexOptions = {
        labels: categories, 
        colors: [
            "#A47EBF",
            "#FFB58A"
        ],
       
        plotOptions: {
            radialBar: {
              dataLabels: {
                name: {
                  fontSize: '22px',
                },
                value: {
                  fontSize: '16px',
                },
                total: {
                  show: true,
                  label: 'Total',

                  //@ts-ignore
                  formatter: function () {
                    return startupsData.total
                  }
                }
              }
            }
          },

    }
    
return (
        <Card>
            <Grid container direction="column" justifyContent="center" alignItems="stretch">
                <Grid>
                    <CardContent sx={{ height: 50 }}>
                        <Grid container direction="row" justifyContent='space-between'>
                            <Typography sx={{ fontWeight: 'bold', color: "black", fontSize: '1.2rem' }}>Startups per Region</Typography>
                        </Grid>
                    </CardContent>
                </Grid>
                <Grid container direction="column" justifyContent="center" alignItems="center">
                    <CardContent >
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-start' }}>
                            <Box sx={{ display: 'flex', alignItems: 'center', color: 'success.main' }}>
                                {startupsData.total !== 0 ? (
                                  <ReactApexcharts type='radialBar'  width={500} options={chartOptions} series={dataSeries} />
                                ): null}
                            </Box>
                        </Box>
                    </CardContent>
                </Grid>
            </Grid>
        </Card >

    )
}

export default StartupsPerRegion

StartupsPerRegion.defaultProps = {
    color: 'primary',
    trend: 'positive'
}
