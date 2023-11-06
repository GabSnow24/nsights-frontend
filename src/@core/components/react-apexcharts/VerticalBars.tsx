import {  useTheme } from '@mui/material'
import { ApexOptions } from "apexcharts"
import ReactApexcharts from 'src/@core/components/react-apexcharts'

export const VerticalBars = () => {

    const theme = useTheme()


    const options: ApexOptions = {
        chart: {
            parentHeightOffset: 0,
            sparkline: {
                enabled: true
            },
            toolbar: { show: false }
        },
        plotOptions: {
            bar: {
                borderRadius: 9,
                distributed: true,
                columnWidth: '40%',
                endingShape: 'rounded',
                startingShape: 'rounded'
            }
        },
        stroke: {
            width: 2,
            colors: [theme.palette.background.paper]
        },
        legend: { show: false },
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
            theme.palette.primary.main,

        ],
        states: {
            hover: {
                filter: { type: 'none' }
            },
            active: {
                filter: { type: 'none' }
            }
        },
        xaxis: {
            categories: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
            tickPlacement: 'on',
            labels: { show: false },
            axisTicks: { show: false },
            axisBorder: { show: false }
        },
        yaxis: {
            show: true,
            tickAmount: 4,
            labels: {
                offsetX: -17,
                formatter: value => `${value > 999 ? `${(value / 1000).toFixed(0)}` : value}k`
            }
        }
    }
    
return (
        <ReactApexcharts type='bar' height={150} width={120} options={options} series={[{ data: [37, 57, 45, 75] }]} />
    )
}