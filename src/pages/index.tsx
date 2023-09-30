// ** MUI Imports
import Grid from '@mui/material/Grid'

// ** Icons Imports
import { getSession } from "next-auth/react"

// ** Custom Components Imports
import CardStatisticsVerticalComponent from 'src/@core/components/card-statistics/card-stats-vertical'

// ** Styled Component Import
import ApexChartWrapper from 'src/@core/styles/libs/react-apexcharts'

// ** Demo Components Imports
import TotalEarning from 'src/views/dashboard/TotalEarning'


const Dashboard = () => {
  return (
    <ApexChartWrapper>
      <Grid container spacing={6}>
        {/* <Grid item xs={12} md={12}>
          <StatisticsCard />
        </Grid> */}
        {/* IMPLEMENTAR DEPOIS<Grid item xs={12} md={6} lg={4}>
          <WeeklyOverview />
        </Grid> */}
        <Grid item xs={12} md={6} lg={6}>
          <TotalEarning />
        </Grid>
        <Grid item xs={12} md={6} lg={6}>
          <Grid container spacing={6}>
            <Grid item xs={6}>
              <CardStatisticsVerticalComponent
                stats='68'
                color='success'
                trendNumber='+42%'
                title='Total Startups'
              />
            </Grid>
            <Grid item xs={6}>
              <CardStatisticsVerticalComponent
                stats='78'
                title='Funding Rounds'
                trend='negative'
                color='secondary'
                trendNumber='-15%'
              />
            </Grid>
            <Grid item xs={6}>
              <CardStatisticsVerticalComponent
                stats='562'
                trend='negative'
                trendNumber='-2%'
                title="Total M&A"
                subtitle='than last month'
              />
            </Grid>
            <Grid item xs={6}>
              <CardStatisticsVerticalComponent
                stats='892'
                color='warning'
                trend='positive'
                trendNumber='2%'
                subtitle='than last month'
                title='New Founders'
              />
            </Grid>
          </Grid>
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

  return { props: { session } }
}

export default Dashboard
