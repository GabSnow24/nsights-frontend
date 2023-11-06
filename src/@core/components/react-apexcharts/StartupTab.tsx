import * as React from 'react';
import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Button, Card, CardActions, CardContent, Divider, Grid, Link } from '@mui/material';
import { Tag } from 'src/@core/layouts/components/icons/Tag';
import NewStartups from './NewStartups';
import { Analytics, ArrowForwardIos, AttachMoney, Edit, Flag, People, Place, Public, Twitter } from '@mui/icons-material';
import OpenInNew from 'mdi-material-ui/OpenInNew'
import { CallMerge, Close, Heart, Linkedin } from 'mdi-material-ui';
import { Flare } from 'src/@core/layouts/components/icons/Flare';
import { Row } from 'src/@core/context/startupData';

interface TabPanelProps {
  children?: React.ReactNode;
  dir?: string;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3, backgroundColor: "#F3F0F9" }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,

  };
}

export default function FullWidthTabs(props: { startupData: Row }) {
  const { startupData } = props
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index: number) => {
    setValue(index);
  };

  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const date = new Date(startupData?.foundedDate)
  
return (
    <Box sx={{ bgcolor: 'background.paper', width: "100%" }}>
      <AppBar position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          textColor="inherit"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="SUMMARY" {...a11yProps(0)} />
          <Tab label="FINNACIALS" {...a11yProps(1)} />
          <Tab label="PEOPLE" {...a11yProps(2)} />
          <Tab label="TECHNOLOGY" {...a11yProps(3)} />
          <Tab label="SIGNALS & NEWS" {...a11yProps(4)} />
          <Tab label="SIMILAR COMPANIES" {...a11yProps(5)} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction} >
          <Grid container direction="row" justifyContent="space-around" alignItems="flex-start">
            <Grid container direction="row" xs={5.8} rowGap={3}>
              <Grid item>
                <Card>
                  <CardContent sx={{ p: 10 }}>
                    <Typography sx={{ fontSize: 18, fontWeight: "500" }} color="#4B0181" gutterBottom>
                      ABOUT
                    </Typography>
                    <Typography sx={{ fontSize: 17, mt: 8, color: "black" }} component="div">
                      {startupData?.description}
                    </Typography>
                    <Typography sx={{ mb: 1.5, mt: 8 }} color="text.secondary">
                      Acquired by
                    </Typography>
                    <Typography variant="body2">
                      {startupData?.acquiredBy != "" ? startupData?.acquiredBy : "No Data"}
                    </Typography>
                    <Divider />
                    <Grid container direction="row" sx={{ mb: 3 }} alignItems="center">
                      <Place color='primary' />
                      <Typography sx={{ ml: 2, fontSize: 15, color: "black", fontWeight: "500" }} component="div">
                        {startupData?.hqLocation}
                      </Typography>
                    </Grid>
                    <Grid container direction="row" sx={{ mb: 3 }} alignItems="center">
                      <People color='primary' />
                      <Typography sx={{ ml: 2, fontSize: 15, color: "black", fontWeight: "500" }} component="div">
                        {startupData?.employeesRange}
                      </Typography>
                    </Grid>
                    <Grid container direction="row" sx={{ mb: 3 }} alignItems="center">
                      <AttachMoney color='primary' />
                      <Typography sx={{ ml: 2, fontSize: 15, color: "black", fontWeight: "500" }} component="div">
                        {startupData?.fundingStatus != "" ? startupData?.fundingStatus : "No Funding Status Data"}
                      </Typography>
                    </Grid>
                    <Grid container direction="row" sx={{ mb: 3 }} alignItems="center">
                      <Flag color='primary' />
                      <Typography sx={{ ml: 2, fontSize: 15, color: "black", fontWeight: "500" }} component="div">
                        {startupData?.ipoStatus}
                      </Typography>
                    </Grid>
                    <Grid container direction="row" sx={{ mb: 3 }} alignItems="center">
                      <Public color='primary' />
                      <Typography sx={{ ml: 2, fontSize: 15, color: "black", fontWeight: "500" }} component="div">
                        www.{startupData?.website}
                      </Typography>
                      <Link target='_blank' href={`https://www.${startupData?.website}`}>
                        <OpenInNew color="primary" />
                      </Link>
                    </Grid>
                    <Grid container direction="row" sx={{ mb: 3 }} alignItems="center">
                      <Analytics color='primary' />
                      <Typography sx={{ ml: 2, fontSize: 15, color: "black", fontWeight: "500" }} component="div">
                        7,289
                      </Typography>

                    </Grid>
                  </CardContent >
                  <CardActions sx={{ p: 10 }}>
                    <Button size="small" startIcon={<Tag />} variant='outlined' color='secondary' >Add tags</Button>
                  </CardActions>
                </Card>
              </Grid>
              <Grid item sx={{ width: "100%" }}>
                <Card>
                  <CardContent sx={{ p: 10 }}>
                    <Grid container direction="row" justifyContent="space-between" >
                      <Typography sx={{ fontSize: 18, fontWeight: "500" }} color="#4B0181" gutterBottom>
                        DETAILS
                      </Typography>
                      <Grid>
                        <Edit />
                        <Typography sx={{ fontSize: 13, fontWeight: "500" }} color="#4B0181" gutterBottom>
                          Edit
                        </Typography>
                      </Grid>
                    </Grid>
                    <Grid container direction="row" justifyContent="space-around" sx={{ mb: 10 }}>
                      <Grid container direction="row" justifyContent="space-between">
                        <Grid>
                          <Typography sx={{ fontSize: 17, mt: 8, }} component="div">
                            Industries
                          </Typography>
                          {startupData?.industries?.map((industry, index) => {
                            return (
                              <Box key={index} sx={{ backgroundColor: "#E7F8F2", borderRadius: 30, m: 2, display: "flex", width: 200 }}>
                                <Typography sx={{ fontSize: 16, ml: 3, color: "black" }} component="div">
                                  {industry}
                                </Typography>
                              </Box>
                            )
                          })}
                          <Typography sx={{ fontSize: 17, mt: 8, }} component="div">
                            Founded Date
                          </Typography>
                          <Typography sx={{ fontSize: 14, color: "black" }} component="div">
                            {months[date.getMonth()]} {date.getDate()}, {date.getFullYear()}
                          </Typography>
                          <Typography sx={{ fontSize: 17, mt: 8, }} component="div">
                            Operating Status
                          </Typography>
                          <Typography sx={{ fontSize: 14, color: "black" }} component="div">
                            {startupData?.operatingStatus}
                          </Typography>
                          <Typography sx={{ fontSize: 17, mt: 8, }} component="div">
                            Legal Name
                          </Typography>
                          <Typography sx={{ fontSize: 14, color: "black" }} component="div">
                            {startupData?.orgName}
                          </Typography>
                        </Grid>
                        <Grid >
                          <Typography sx={{ fontSize: 17, mt: 8, }} component="div">
                            Headquarters Regions
                          </Typography>
                          <Typography sx={{ fontSize: 14, color: "black" }} component="div">
                            {startupData?.headquartersRegions}
                          </Typography>
                          <Typography sx={{ fontSize: 17, mt: 8, }} component="div">
                            Founders
                          </Typography>
                          <Typography sx={{ fontSize: 14, color: "black" }} component="div">
                            {startupData?.founders}
                          </Typography>
                          <Typography sx={{ fontSize: 17, mt: 8, }} component="div">
                            Last Funding Type
                          </Typography>
                          <Typography sx={{ fontSize: 14, color: "black" }} component="div">
                            {startupData?.lastFundingType}
                          </Typography>
                        </Grid>
                      </Grid>
                    </Grid>
                    <Divider />
                    <Grid sx={{ mt: 5, mb: 5 }}>
                      <Typography sx={{ fontSize: 17 }} component="div">
                        Company Type
                      </Typography>
                      <Typography sx={{ fontSize: 14, color: "black" }} component="div">
                        For Profit
                      </Typography>
                    </Grid>
                    <Divider />
                    <Grid sx={{ mt: 5, mb: 5 }}>
                      <Typography sx={{ fontSize: 17 }} component="div">
                        Contact Email
                      </Typography>
                      <Typography sx={{ fontSize: 14, color: "black" }} component="div">
                        {startupData?.contactEmail}
                      </Typography>
                      <Typography sx={{ fontSize: 17, mt: 4 }} component="div">
                        Phone Number
                      </Typography>
                      <Typography sx={{ fontSize: 14, color: "black" }} component="div">
                        {startupData?.companyPhone}
                      </Typography>
                    </Grid>
                    <Typography sx={{ fontSize: 16, color: "black" }} component="div">
                      {startupData?.description}
                    </Typography>
                  </CardContent >
                  <CardActions sx={{ p: 10 }}>
                    <Link target='_blank' href={`https://www.${startupData?.linkedin}`}>
                      <Linkedin sx={{ marginRight: 2.5, color: "#0077B5" }} />
                    </Link>
                    <Link target='_blank' href={`https://www.${startupData?.twitter}`}>
                      <Twitter sx={{ marginRight: 2.5, color: "#0077B5" }} />
                    </Link>
                  </CardActions>
                </Card>
              </Grid>
              <Grid item xs={12}>
                <NewStartups />
              </Grid>
            </Grid>
            <Grid container direction="row" xs={5.8} rowGap={3}>
              <Grid item sx={{ width: "100%" }}>
                <Card>
                  <CardContent sx={{ p: 10 }}>
                    <Grid container direction="row" justifyContent="space-between" >
                      <Typography sx={{ fontSize: 18, fontWeight: "500" }} color="#4B0181" gutterBottom>
                        RECENT NEWS & ACTIVITY
                      </Typography>
                    </Grid>
                    {
                      startupData?.lastFundingType === "" ? null : <>
                        <Grid sx={{ mt: 5, mb: 5 }}>
                          <Grid container direction="row">
                            <AttachMoney />
                            <Typography sx={{ fontSize: 17 }} component="div">
                              Funding Round • Aug 31, 2023
                            </Typography>
                          </Grid>
                          <Typography sx={{ fontSize: 15, color: "black" }} component="div">
                            Pulse Energy raised $1,500,000 / Seed from AdvantEdge Founders and Peak XV Partners
                          </Typography>
                          <Link href='#'>
                            <Typography sx={{ fontSize: 15, color: "#146AFF" }} component="div">
                              Discover more funding rounds
                            </Typography>
                          </Link>
                        </Grid>
                        <Divider /></>
                    }
                    <Grid sx={{ mt: 5, mb: 5 }}>
                      <Grid container direction="row">
                        <CallMerge />
                        <Typography sx={{ fontSize: 17 }} component="div">
                          Acquisition • Dec 2, 2014
                        </Typography>
                      </Grid>
                      <Typography sx={{ fontSize: 15, color: "black" }} component="div">
                        {startupData?.transactionName}
                      </Typography>
                      <Link href='#'>
                        <Typography sx={{ fontSize: 15, color: "#146AFF" }} component="div">
                          Discover more acquisitions
                        </Typography>
                      </Link>
                    </Grid>
                  </CardContent >
                </Card>
              </Grid>
              <Grid item sx={{ width: "100%" }}>
                <Card>
                  <CardContent sx={{ p: 10 }}>
                    <Grid container direction="row" justifyContent="space-between" >
                      <Typography sx={{ fontSize: 18, fontWeight: "500" }} color="#4B0181" gutterBottom>
                        HIGHLIGHTS
                      </Typography>
                      <Grid>
                        <Flare />
                      </Grid>
                    </Grid>
                    <Grid container direction="row" justifyContent="space-around" sx={{ mb: 10 }}>
                      <Grid container direction="row" justifyContent="space-between">
                        <Grid>
                          <Grid container direction="row" justifyContent="space-between">
                            <Grid item>
                              <Typography sx={{ fontSize: 17, mt: 8, color: "black" }} component="div">
                                Total Funding Amount
                              </Typography>
                              <Typography sx={{ fontSize: 17, color: "#4B0181" }} component="div">
                                {startupData?.totalFundingAmountCurrency === "" ? "$" : startupData?.totalFundingAmountCurrency} {startupData?.totalFundingAmount}
                              </Typography>
                            </Grid>
                            <Grid item sx={{ mt: 8, ml: 20 }}>
                              <ArrowForwardIos sx={{ color: "#E7CA00" }} />
                            </Grid>
                          </Grid>
                          <Grid container direction="row" justifyContent="space-between">
                            <Grid item>
                              <Typography sx={{ fontSize: 17, mt: 8, color: "black" }} component="div">
                                Investors
                              </Typography>
                              <Typography sx={{ fontSize: 17, color: "#4B0181" }} component="div">
                                {startupData?.numberOfInvestiments}
                              </Typography>
                            </Grid>
                            <Grid item sx={{ mt: 8, ml: 20 }}>
                              <ArrowForwardIos sx={{ color: "#E7CA00" }} />
                            </Grid>
                          </Grid>
                        </Grid>
                        <Grid >
                          <Grid container direction="row" justifyContent="space-between">
                            <Grid item>
                              <Typography sx={{ fontSize: 17, mt: 8, color: "black" }} component="div">
                                Employee Profiles
                              </Typography>
                              <Typography sx={{ fontSize: 17, color: "#4B0181" }} component="div">
                                1
                              </Typography>
                            </Grid>
                            <Grid item sx={{ mt: 8, ml: 20 }}>
                              <ArrowForwardIos sx={{ color: "#E7CA00" }} />
                            </Grid>
                          </Grid>
                          <Grid container direction="row" justifyContent="space-between">
                            <Grid item>
                              <Typography sx={{ fontSize: 17, mt: 8, color: "black" }} component="div">
                                Similar Companies
                              </Typography>
                              <Typography sx={{ fontSize: 17, color: "#4B0181" }} component="div">
                                {startupData?.similarCompanies}
                              </Typography>
                            </Grid>
                            <Grid item sx={{ mt: 8, ml: 20 }}>
                              <ArrowForwardIos sx={{ color: "#E7CA00" }} />
                            </Grid>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </CardContent >
                </Card>
              </Grid>
              <Grid item sx={{ width: "100%" }}>
                <Card>
                  <CardContent sx={{ p: 10 }}>
                    <Grid container direction="row" justifyContent="space-between" >
                      <Typography sx={{ fontSize: 18, fontWeight: "500" }} color="#4B0181" gutterBottom>
                        RECOMMENDATIONS
                      </Typography>
                    </Grid>
                    <Grid container direction="row" justifyContent="space-between" sx={{ mb: 10 }}>
                      <Grid container direction="row" justifyContent="space-between">
                        <Grid container direction="row" justifyContent="space-between" >
                          <Typography sx={{ fontSize: 18, fontWeight: "500", color: "black" }} gutterBottom>
                            Lyft
                          </Typography>
                          <Grid>
                            <Button variant='outlined' color="secondary" sx={{ borderRadius: 5, mr: 3 }}>
                              <Heart sx={{ color: "black" }} />
                            </Button>
                            <Button variant='outlined' color="secondary" sx={{ borderRadius: 5 }}>
                              <Close sx={{ color: "black" }} />
                            </Button>
                          </Grid>
                        </Grid>
                        <Typography sx={{ fontSize: 14, fontWeight: "500", width: 400, fontStyle: 'italic', }} gutterBottom>
                          Because you're interested in companies that recently closed new funding.
                        </Typography>
                      </Grid>
                    </Grid>
                    <Divider />
                    <Grid container direction="row" justifyContent="space-between" sx={{ mb: 10, mt: 10 }}>
                      <Grid container direction="row" justifyContent="space-between">
                        <Grid container direction="row" justifyContent="space-between" >
                          <Typography sx={{ fontSize: 18, fontWeight: "500", color: "black" }} gutterBottom>
                            Vindi
                          </Typography>
                          <Grid>
                            <Button variant='outlined' color="secondary" sx={{ borderRadius: 5, mr: 3 }}>
                              <Heart sx={{ color: "black" }} />
                            </Button>
                            <Button variant='outlined' color="secondary" sx={{ borderRadius: 5 }}>
                              <Close sx={{ color: "black" }} />
                            </Button>
                          </Grid>
                        </Grid>
                        <Typography sx={{ fontSize: 14, fontWeight: "500", width: 400, fontStyle: 'italic', }} gutterBottom>
                          Because you're interested in companies in the same industry.
                        </Typography>
                      </Grid>
                    </Grid>
                    <Divider />
                    <Grid container direction="row" justifyContent="space-between" sx={{ mb: 10, mt: 10 }}>
                      <Grid container direction="row" justifyContent="space-between">
                        <Grid container direction="row" justifyContent="space-between" >
                          <Typography sx={{ fontSize: 18, fontWeight: "500", color: "black" }} gutterBottom>
                            AGRIVI
                          </Typography>
                          <Grid>
                            <Button variant='outlined' color="secondary" sx={{ borderRadius: 5, mr: 3 }}>
                              <Heart sx={{ color: "black" }} />
                            </Button>
                            <Button variant='outlined' color="secondary" sx={{ borderRadius: 5 }}>
                              <Close sx={{ color: "black" }} />
                            </Button>
                          </Grid>
                        </Grid>
                        <Typography sx={{ fontSize: 14, fontWeight: "500", width: 400, fontStyle: 'italic', }} gutterBottom>
                          Because you're interested in companies in the same industry.
                        </Typography>
                      </Grid>
                    </Grid>
                    <Divider />
                    <Grid container direction="row" justifyContent="space-between" sx={{ mb: 10, mt: 10 }}>
                      <Grid container direction="row" justifyContent="space-between">
                        <Grid container direction="row" justifyContent="space-between" >
                          <Typography sx={{ fontSize: 18, fontWeight: "500", color: "black" }} gutterBottom>
                            Revolut
                          </Typography>
                          <Grid>
                            <Button variant='outlined' color="secondary" sx={{ borderRadius: 5, mr: 3 }}>
                              <Heart sx={{ color: "black" }} />
                            </Button>
                            <Button variant='outlined' color="secondary" sx={{ borderRadius: 5 }}>
                              <Close sx={{ color: "black" }} />
                            </Button>
                          </Grid>
                        </Grid>
                        <Typography sx={{ fontSize: 14, fontWeight: "500", width: 400, fontStyle: 'italic', }} gutterBottom>
                          Because you're interested in companies in your saved lists.
                        </Typography>
                      </Grid>
                    </Grid>
                  </CardContent >
                </Card>
              </Grid>
            </Grid>
          </Grid>
        </TabPanel>
      </SwipeableViews>
    </Box>
  );
}