// ** MUI Imports
import Grid from '@mui/material/Grid'

// ** Icons Imports
import { getSession } from "next-auth/react"

// ** Custom Components Imports
import CardStatisticsVerticalComponent from 'src/@core/components/card-statistics/card-stats-vertical'
import FundingRounds from 'src/@core/components/react-apexcharts/FundingRounds'
import { HorizontalChart } from 'src/@core/components/react-apexcharts/HorizontalChart'
import NewStartups from 'src/@core/components/react-apexcharts/NewStartups'
import NewsFeed from 'src/@core/components/react-apexcharts/NewsFeed'
import RemainingCredit from 'src/@core/components/react-apexcharts/RemainingCredit'
import { TrendChart } from 'src/@core/components/react-apexcharts/TrendChart'
import { VerticalBars } from 'src/@core/components/react-apexcharts/VerticalBars'
import { useStartup } from 'src/@core/hooks/useStartup'

// ** Styled Component Import
import ApexChartWrapper from 'src/@core/styles/libs/react-apexcharts'

// ** Demo Components Imports
import TotalEarning from 'src/views/dashboard/TotalEarning'


const Dashboard = () => {
  const { startupsData } = useStartup()
  
  return (
    <ApexChartWrapper>

      <Grid container rowSpacing={0} columnSpacing={{ xs: 1, sm: 2, md: 6 }} >

        <Grid item xs={12} md={6} lg={6}>
          <Grid container spacing={6}>
            <Grid item xs={12}>
              <TotalEarning />
            </Grid>
            <Grid item xs={12}>
              <FundingRounds />
            </Grid>
            <Grid item xs={12}>
              <NewStartups />
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12} md={6} lg={6}>
          <Grid container spacing={6}>
            <Grid item xs={6}>
              <CardStatisticsVerticalComponent
                stats={startupsData?.total?.toString()}
                color='success'
                trendNumber='+42%'
                title='Total Startups'
                chart={<VerticalBars />}
              />
            </Grid>
            <Grid item xs={6}>
              <CardStatisticsVerticalComponent
                stats='78'
                enableTrend={false}
                title='Funding Rounds'
                trend='negative'
                color='secondary'
                trendNumber='-15%'
                chart={<HorizontalChart />}
              />
            </Grid>
            <Grid item xs={6}>
              <CardStatisticsVerticalComponent
                stats='562'
                trend='negative'
                trendNumber='-2%'
                title="Total M&A"
                subtitle='than last month'
                chart={<TrendChart />}
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
                chart={<TrendChart />}
              />
            </Grid>
            <Grid item xs={12}>
              <RemainingCredit />
            </Grid>
            <Grid item xs={12}>
              <NewsFeed/>
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

  return { props: { session, title:"Dashboard"} }
}

export default Dashboard
