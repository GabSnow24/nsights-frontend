// ** MUI Imports
import { Button, Typography, styled } from '@mui/material'
import Grid from '@mui/material/Grid'
import { GridColDef } from '@mui/x-data-grid'

// ** Icons Imports
import { getSession } from "next-auth/react"
import { useState } from 'react'
import GeoChart from 'src/@core/components/react-apexcharts/GeoChart'

// ** Custom Components Imports
import NewStartups from 'src/@core/components/react-apexcharts/NewStartups'
import NewsFeed from 'src/@core/components/react-apexcharts/NewsFeed'
import RemainingCredit from 'src/@core/components/react-apexcharts/RemainingCredit'
import StartupDataGrid from 'src/@core/components/react-apexcharts/StartupDataGrid'
import StartupFilter from 'src/@core/components/react-apexcharts/StartupFilter'
import StartupsPerData from 'src/@core/components/react-apexcharts/StartupsPerData'
import StartupsPerEmployees from 'src/@core/components/react-apexcharts/StartupsPerEmployees'
import StartupsPerFoundedDate from 'src/@core/components/react-apexcharts/StartupsPerFoundedDate'
import StartupsPerIndustry from 'src/@core/components/react-apexcharts/StartupsPerIndustry'
import StartupsPerRegion from 'src/@core/components/react-apexcharts/StartupsPerRegion'

// ** Styled Component Import
import ApexChartWrapper from 'src/@core/styles/libs/react-apexcharts'

// ** Demo Components Imports

const Img = styled('img')(({ }) => ({
  height: '1.2rem',
  width: "1.2rem",
  borderRadius: 20
}))


const Startups = () => {

  
  const [columns] = useState<GridColDef[]>([
    {
      field: 'orgName',
      headerName: 'Organization Name',
      renderCell: (params: any) => (
        
        <Grid container
          direction="row"
          justifyContent="flex-start"
          alignItems="center">
          <Button href={`/startups/${params.row.id}`}
            fullWidth={true}
            sx={{ display:"flex", justifyContent: "flex-start", textTransform:"capitalize", width:"100%" }} >
            <Img alt={params.value} src={params.row.imageUrl ? `https://${params.row.imageUrl}` : "/images/cards/startup.png"} />
            <Typography sx={{ fontWeight: "bold", fontSize: '0.9rem', color: "black", ml: 2 }}>{params.value}</Typography>
          </Button>
        </Grid>
      ),
      width: 150,
      editable: true,
    },
    {
      field: 'foundedDate',
      headerName: 'Founded Date',
      renderCell: (params: any) => (

        <Grid container
          direction="row"
          justifyContent="flex-start"
          alignItems="center">
          <Typography sx={{ fontWeight: "bold", fontSize: '0.9rem', color: "black", ml: 2 }}>{params.value.split("T")[0].split("")}</Typography>
        </Grid>
      ),
      width: 150,
      editable: true,
    },
    {
      field: 'industries',
      headerName: 'Industries',
      renderCell: (params: any) => (
        
        <Grid container
          direction="row"
          justifyContent="flex-start"
          alignItems="center">
          <Typography sx={{ fontWeight: "bold", fontSize: '0.9rem', color: "black", ml: 2 }}>{params.value.join(", ")}</Typography>
        </Grid>
      ),
      width: 200,
      editable: true,
    },
    {
      field: 'hqLocation',
      headerName: 'Headquarters Location',
      renderCell: (params: any) => (

        <Grid container
          direction="row"
          justifyContent="flex-start"
          alignItems="center">
          <Typography sx={{ fontWeight: "bold", fontSize: '0.9rem', color: "black", ml: 2 }}>{params.value}</Typography>
        </Grid>
      ),
      width: 200,

      // valueGetter: (params: GridValueGetterParams) =>
      //     `${params.row.firstName || ''} ${params.row.lastName || ''}`,
    },
    {
      field: 'shortDescription',
      headerName: 'Description',
      renderCell: (params: any) => (

        <Grid container
          direction="row"
          justifyContent="flex-start"
          alignItems="center">
          <Typography sx={{ fontWeight: "bold", fontSize: '0.9rem', color: "black", ml: 2 }}>{params.value}</Typography>
        </Grid>
      ),

      // type: 'number',
      width: 300,
      editable: true,
    },
  ])


  return (
    <ApexChartWrapper>
      <Grid container direction={"row"} sx={{ mb: 5 }} columnSpacing={{ xs: 1, sm: 2, md: 6 }}>
        <Grid item xs={3}>
          <StartupFilter/>
        </Grid>
        <Grid item xs={9} md={9} lg={9}>
          <StartupDataGrid columns={columns} />
        </Grid>
      </Grid>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 6 }}>

        <Grid item xs={12} md={6} lg={6}>
          <Grid container spacing={6}>

            <Grid item xs={12}>
              <StartupsPerFoundedDate />
            </Grid>
            <Grid item xs={12}>
              <StartupsPerData filter="perIndustryGroups" title="Startups per Industry Groups" percentual={true}/>
            </Grid>
            <Grid item xs={12}>
              {/* <StartupsPerData filter="perCountry" title="Startups per Country"/> */}
              <GeoChart/>
            </Grid>
            <Grid item xs={12}>
              <NewStartups />
            </Grid>
            <Grid item xs={12}>
              <NewsFeed />
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12} md={6} lg={6}>
          <Grid container spacing={6}>
            
            <Grid item xs={12}>
              <StartupsPerIndustry/>
            </Grid>
            <Grid item xs={12}>
              <StartupsPerRegion/>
            </Grid>
            <Grid item xs={12}>
              <StartupsPerEmployees/>
            </Grid>
            <Grid item xs={12}>
              <StartupsPerData filter="perFundingRounds" title="Startups per Funding Rounds" percentual={true}/>
            </Grid>
            <Grid item xs={12}>
              <RemainingCredit />
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
    // return {
    //   redirect: {
    //     destination: "/pages/login",
    //     permanent: false
    //   }
    // }
  }

  return { props: { session, title:"Startups" } }
}

export default Startups
