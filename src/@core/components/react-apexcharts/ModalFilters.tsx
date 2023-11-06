import * as React from 'react';
import ListIcon from '@mui/icons-material/ListAlt'
import Box from '@mui/material/Box';
import { Button, Collapse, Grid, ListItem, ListItemButton, ListItemText, Modal, Paper, Typography, styled, useMediaQuery, useTheme } from '@mui/material';
import { Account, AccountBoxMultiple, Calendar, Cash, CashFast, CashLock, CurrencyUsd, Download, PaperRoll, StackExchange, Symbol } from 'mdi-material-ui';
import { AccountBalance, Article, ExpandLess, ExpandMore, Hub, MobileFriendly, RateReview, Work } from '@mui/icons-material';
import { Location } from 'src/@core/layouts/components/icons/Location';
import { grey } from '@mui/material/colors';
import CustomizedInputBase from './CustomizedNormalInput';
import { useStartup } from 'src/@core/hooks/useStartup';




interface Item {
    title: string
    isOpen: boolean
    icon: JSX.Element
}
interface ListItems {
    foundedDate: Item
    employeesRange: Item
    headquartersRegions: Item
    estimatedRevenueRange: Item
    fundingStatus: Item
    lastFundingDate: Item
    lastFundingType: Item
    numberOfInvestiments: Item
    stockExchange: Item
    ipoStatus: Item
    ipoDate: Item
    transactionName: Item
    acquiredBy: Item
    announcedDate: Item
    priceCurrencyInUsd: Item
    lastLeadershipHiringDate: Item
    lastLayoffDate: Item
    activelyHiring: Item
    numberOfArticles: Item
    hubTags: Item
    numberOfFounders: Item
    numberOfFundingRounds: Item
    stockSymbol: Item
    monthlyVisits: Item
    monthlyVisitsGrowth: Item
    patentsGranted: Item
    mostPopularPatentClass: Item
    numberOfApps: Item
    downloadLastThirtyDays: Item
}

const defaultListItems: ListItems = {
    foundedDate: {
        title: "Founded Date",
        icon: <Calendar />,
        isOpen: false
    },
    employeesRange: {
        title: "Employees",
        icon: <Work />,
        isOpen: false
    },
    headquartersRegions: {
        title: "Region",
        icon: <Location />,
        isOpen: false
    },
    estimatedRevenueRange: {
        title: "Estimated Revenue Range",
        icon: <Cash />,
        isOpen: false
    },
    fundingStatus: {
        title: "Funding Status",
        icon: <ListIcon />,
        isOpen: false
    },
    lastFundingDate: {
        title: "Last Funding Date",
        icon: <Calendar />,
        isOpen: false
    },
    lastFundingType: {
        title: "Last Funding Type",
        icon: <Cash />,
        isOpen: false
    },
    numberOfInvestiments: {
        title: "Number of Investiments",
        icon: <Cash />,
        isOpen: false
    },
    stockExchange: {
        title: "Stock Exchange",
        icon: <StackExchange />,
        isOpen: false
    },
    ipoStatus: {
        title: "Status IPO",
        icon: <CashLock />,
        isOpen: false
    },
    ipoDate: {
        title: "IPO Date",
        icon: <Calendar />,
        isOpen: false
    },
    transactionName: {
        title: "Transaction Name",
        icon: <CashFast />,
        isOpen: false
    },
    acquiredBy: {
        title: "Acquired By",
        icon: <Account />,
        isOpen: false
    },
    announcedDate: {
        title: "Announced Date",
        icon: <Calendar />,
        isOpen: false
    },
    priceCurrencyInUsd: {
        title: "Price in USD",
        icon: <CurrencyUsd />,
        isOpen: false
    },
    lastLeadershipHiringDate: {
        title: "Leadership Hiring Flag",
        icon: <Account />,
        isOpen: false
    },
    lastLayoffDate: {
        title: "Layoff flag",
        icon: <Account />,
        isOpen: false
    },
    activelyHiring: {
        title: "Hiring Frequently",
        icon: <AccountBalance />,
        isOpen: false
    },
    numberOfArticles: {
        title: "Articles on the Media",
        icon: <Article />,
        isOpen: false
    },
    hubTags: {
        title: "Hubs",
        icon: <Hub />,
        isOpen: false
    },
    numberOfFounders: {
        title: "Number of Founders",
        icon: <AccountBoxMultiple />,
        isOpen: false
    },
    numberOfFundingRounds: {
        title: "Number of Funding Rounds",
        icon: <AccountBoxMultiple />,
        isOpen: false
    },
    stockSymbol: {
        title: "Ticker",
        icon: <Symbol />,
        isOpen: false
    },
    monthlyVisits: {
        title: "Monthly Visits (90 days)",
        icon: <Calendar />,
        isOpen: false
    },
    monthlyVisitsGrowth: {
        title: "Monthly Visits Growth Rate",
        icon: <RateReview />,
        isOpen: false
    },
    patentsGranted: {
        title: "Patents",
        icon: <PaperRoll />,
        isOpen: false
    },
    mostPopularPatentClass: {
        title: "Main Patent Class",
        icon: <PaperRoll />,
        isOpen: false
    },
    numberOfApps: {
        title: "Number of Mobile Apps",
        icon: <MobileFriendly />,
        isOpen: false
    },
    downloadLastThirtyDays: {
        title: "Download Mobile Apps (30 days)",
        icon: <Download />,
        isOpen: false
    },
}

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: 60,
    lineHeight: '60px',
}));

export default function ModalFilters(props: any) {

    const theme = useTheme();
    const { saveFiltered, startupsData, clearFilters } = useStartup();
    let sizes = { width: 800, height: 800 }
    sizes = useMediaQuery(theme.breakpoints.up('xs')) ? { width: 400, height: 300 } : sizes
    sizes = useMediaQuery(theme.breakpoints.up('sm')) ? { width: 600, height: 600 } : sizes
    sizes = useMediaQuery(theme.breakpoints.up('md')) ? { width: 800, height: 600 } : sizes
    sizes = useMediaQuery(theme.breakpoints.up('lg')) ? { width: 800, height: 900 } : sizes

    const style = {
        position: 'absolute' as const,
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: sizes.width,
        height: sizes.height,
        overflow: 'scroll',
        display: 'block',
        bgcolor: '#F3F0F9',
        border: '1px solid #000',
        boxShadow: 24,
        p: 4,
        media: {
            width: "auto",
            paddingTop: "56.25%" // 16:9
        },
    };
    const [listItem, setListItemOpen] = React.useState<ListItems>(defaultListItems);

    const handleClick = (item: string) => {
        const newListItems = { ...listItem, [item]: { ...listItem[item as keyof Item as keyof ListItems], isOpen: !listItem[item as keyof Item as keyof ListItems].isOpen } }
        setListItemOpen(newListItems);
    };

    const handleClean = () => {
        saveFiltered(startupsData)
        clearFilters()
    };




    return (

        <Modal
            open={props.open}
            onClose={props.handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >

            <Box sx={style}>
                <Grid container direction="row" justifyContent="space-between" alignContent="space-between" >
                    <Typography sx={{ ml: 3, fontSize: 18 }} color="black">
                        Filters
                    </Typography>

                </Grid>

                <Grid container spacing={{ xs: 1, md: 1 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {Object.keys(defaultListItems).map((key: string, index: number) => {
                        return (
                            <>
                                <Grid item xs={2} sm={4} md={4} key={index}>
                                    <ListItemButton sx={{ backgroundColor: "white", m: 2, width: 230, height: 60 }} key={index} divider onClick={() => handleClick(key)}>
                                        {defaultListItems[key as keyof ListItems].icon}
                                        <ListItemText sx={{ ml: 2 }} primary={defaultListItems[key as keyof ListItems].title} />
                                        {listItem[key as keyof ListItems].isOpen ? <ExpandLess /> : <ExpandMore />}
                                    </ListItemButton>
                                    <Collapse in={listItem[key as keyof ListItems].isOpen} timeout="auto" unmountOnExit sx={{ backgroundColor: grey[200] }}>
                                        <ListItem  >
                                            <CustomizedInputBase title={key} filterField={key} />
                                        </ListItem>
                                    </Collapse>
                                </Grid>
                            </>
                        )
                    })}
                </Grid>
                <Grid container justifyContent="flex-end" alignItems="center">
                    <Button variant='contained' onClick={props.handleClose} sx={{ width: 150, mr: 4, textTransform: "capitalize" }}>
                        Apply Filters
                    </Button>
                    <Button variant='outlined' onClick={handleClean} sx={{ width: 150, mr: 4, backgroundColor: "white", textTransform: "capitalize" }}>
                        Clean Filters
                    </Button>
                </Grid>

            </Box>
        </Modal>

    );
}