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

const StartupsPerIndustry = () => {
    // ** Props


    const [enterprisesData, setEnteprisesData] = useState([{ x: "", y: 0 }])
    const { selectedData } = useStartup()


    useEffect(() => {
        if (selectedData.data.length > 0) {
            const dataToSave = organizePerIndustry("industries")
            setEnteprisesData(dataToSave as {x: string; y: number;}[])
            
return
        }
        fetch(`https://app.n-sights.ai/backend-api/enterprises/perIndustry`)
            .then(response => response.json())
            .then(data => {
                data.sort((a: { y: number},b: { y: number})=> b.y - a.y)
                let sum = 0
                data.forEach((a: any, index: any)=>{
                    if(index < 9){
                        return
                    }
                    sum = sum+a.y
                })
                const dataToSave = data.slice(0, 10)

                dataToSave.push({x:"Others", y:sum})
                setEnteprisesData(dataToSave)
            })
    }, [selectedData])

    const organizePerIndustry = (filter: string)=> {
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
            
        }
    }

    return (
        <Card>
            <Grid container direction="column" justifyContent="center" alignItems="stretch">
                <Grid>
                    <CardContent sx={{ height: 50 }}>
                        <Grid container direction="row" justifyContent='space-between'>
                            <Typography sx={{ fontWeight: 'bold', color: "black", fontSize: '1.2rem' }}>Startups per Industry</Typography>
                        </Grid>
                    </CardContent>
                </Grid>
                <Grid container direction="column" justifyContent="center" alignItems="center">
                    <CardContent >
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-start' }}>
                            <Box sx={{ display: 'flex', alignItems: 'center', color: 'success.main' }}>
                                <ReactApexcharts type='bar' height={700} width={710} options={chartOptions} series={[{
                                    name: 'Per Industry',
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

export default StartupsPerIndustry

StartupsPerIndustry.defaultProps = {
    color: 'primary',
    trend: 'positive'
}
