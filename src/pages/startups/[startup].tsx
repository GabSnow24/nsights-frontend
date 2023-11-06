// ** MUI Imports
import { Card, Link, Typography } from '@mui/material'
import Grid from '@mui/material/Grid'

// ** Icons Imports
import { getSession } from "next-auth/react"
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

// ** Custom Components Imports
import StartupPhoto from 'src/@core/components/react-apexcharts/StartupPhoto'
import FullWidthTabs from 'src/@core/components/react-apexcharts/StartupTab'
import { Row } from 'src/@core/context/startupData'
import { useStartup } from 'src/@core/hooks/useStartup'

// ** Styled Component Import
import ApexChartWrapper from 'src/@core/styles/libs/react-apexcharts'





const Startups = () => {
  const { startupsData } = useStartup()
  const router = useRouter()
  const [startup, setStartup] = useState<Row>({} as Row)

  useEffect(() => {
    const startupId = router.query.startup
    const foundedStartup = startupsData.data.find((row) => {      
return row.id === startupId
    })
    setStartup(foundedStartup as Row)
  }, [startupsData, router])


  return (
    <ApexChartWrapper>

      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 6 }}>
        <Grid item xs={12} sx={{ height: 50 }}>
          <Card sx={{ height: "100%", display: 'flex' }}>
            <Link href="/startups">
              <Typography sx={{ color: "#EEC97B", fontSize: '1rem', mt: 3, ml: 10 }}>Startups</Typography>
            </Link>
            <Typography sx={{ fontSize: '1rem', mt: 3, ml: 2 }}>/ {startup?.orgName} </Typography>
          </Card>
        </Grid>
        <Grid item xs={12}  lg={6} sx={{ mt: 5 }}>
          <Grid container spacing={6}>
            <Grid item xs={8} sm={6} md={8} >
              <StartupPhoto title={startup?.orgName} category="Software" imagePath={startup?.imageUrl ? `https://${startup.imageUrl}` : "/images/cards/startup.png"} />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sx={{ height: "100%", mt: 5 }}>
          <Card sx={{ height: "100%", display: 'flex' }}>
            <FullWidthTabs startupData={startup}/>
          </Card>
        </Grid>
      </Grid>
    </ApexChartWrapper>
  )
}

export async function getServerSideProps(context: any) {
  const session = await getSession(context)
  if (!session) {
    return {
      redirect: {
        destination: "/pages/login",
        permanent: false
      }
    }
  }

  return { props: { session, title:"Startups" } }
}

export default Startups
