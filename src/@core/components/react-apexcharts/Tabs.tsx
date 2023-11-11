import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import ListIcon from '@mui/icons-material/ListAlt'
import Box from '@mui/material/Box';
import { Button, Collapse, InputAdornment, List, ListItem, ListItemButton, ListItemText, Paper, TextField, styled } from '@mui/material';
import { Magnify, OpenInNew, Web } from 'mdi-material-ui';
import { TabContext, TabPanel } from '@mui/lab';
import { ExpandLess, ExpandMore, LinkedIn, People } from '@mui/icons-material';
import { Name } from 'src/@core/layouts/components/icons/Name';
import { Location } from 'src/@core/layouts/components/icons/Location';
import { Industry } from 'src/@core/layouts/components/icons/Industry';
import { grey } from '@mui/material/colors';
import CustomizedInputBase from './CustomizedNormalInput';
import { useStartup } from 'src/@core/hooks/useStartup';
import ModalFilters from './ModalFilters';


function a11yProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

interface Item {
    title: string
    isOpen: boolean
    icon: JSX.Element
}
interface ListItems {
    orgName: Item
    operatingStatus: Item
    website: Item
    linkedin: Item
    country: Item
    hqLocation: Item
    industries: Item
    founders: Item
}

const defaultListItems: ListItems = {
    orgName: {
        title: "Company Name",
        icon: <Name />,
        isOpen: false
    },
    operatingStatus: {
        title: "Company Status",
        icon: <ListIcon />,
        isOpen: false
    },
    website: {
        title: "Company Website",
        icon: <Web />,
        isOpen: false
    },

    linkedin: {
        title: "Company Linkedin",
        icon: <LinkedIn />,
        isOpen: false
    },
    country: {
        title: "Country",
        icon: <Location />,
        isOpen: false
    },
    hqLocation: {
        title: "HQ Location",
        icon: <Location />,
        isOpen: false
    },
    industries: {
        title: "Industries",
        icon: <Industry />,
        isOpen: false
    },
    founders: {
        title: "Founders Name",
        icon: <People/>,
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

export default function BasicTabs() {
    const { saveSearchText } = useStartup()
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [value, setValue] = React.useState(0);

    const [listItem, setListItemOpen] = React.useState<ListItems>(defaultListItems);

    const handleClick = (item: string) => {
        const newListItems = { ...listItem, [item]: { ...listItem[item as keyof Item as keyof ListItems], isOpen: !listItem[item as keyof Item as keyof ListItems].isOpen } }
        setListItemOpen(newListItems);
    };

    const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };


    const style = {
        width: '100%',
        maxWidth: 360,
        bgcolor: 'background.paper',
    };

    return (

        <Box sx={{ width: '100%'}}>
            <TabContext value={value.toString()}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                        <Tab label="Search" sx={{ textTransform: 'capitalize', fontWeight: 'bold' }} {...a11yProps(0)} />
                        <Tab label="Saved Searches" sx={{ textTransform: 'capitalize', fontWeight: 'bold' }} {...a11yProps(1)} />
                    </Tabs>
                </Box>
                <TabPanel value={value.toString()} sx={{ padding: 0 }}>
                    <Box>

                        <List component="nav" aria-label="mailbox folders" sx={style}>
                            <TextField
                                variant="standard"
                                sx={{ width: "100%", }}
                                placeholder="Search Startups..."
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment sx={{ pl: 4 }} position='start'>
                                            <Magnify fontSize='small' />
                                        </InputAdornment>
                                    ),
                                }}
                                onChange={(e) => saveSearchText(e.target.value)}
                            />
                            <ListItem divider sx={{ height: 80 }}>
                                <ListItemText primary="Filters" />
                            </ListItem>
                            {Object.keys(defaultListItems).map((key: string, index: number) => {
                                return (
                                    <>
                                        <ListItemButton key={index} divider onClick={() => handleClick(key)}>
                                            {defaultListItems[key as keyof ListItems].icon}
                                            <ListItemText sx={{ ml: 2 }} primary={defaultListItems[key as keyof ListItems].title} />
                                            {listItem[key as keyof ListItems].isOpen ? <ExpandLess /> : <ExpandMore />}
                                        </ListItemButton>
                                        <Collapse in={listItem[key as keyof ListItems].isOpen} timeout="auto" unmountOnExit sx={{ backgroundColor: grey[200] }}>
                                            <ListItem  sx={{width:"100%", maxWidth:300, minWidth:10,}}>
                                                <CustomizedInputBase title={key} filterField={key} />
                                            </ListItem>
                                        </Collapse>
                                    </>
                                )
                            })}
                        </List>
                    </Box>

                </TabPanel>
            </TabContext>
            <Box sx={{
                width: "100%",
                bgcolor: 'background.default',
            }}>
                <Item key={24} elevation={24}>
                    <Button variant='contained' onClick={handleOpen} sx={{ width: "80%", maxWidth:300, height:"80%" }}>
                        More Filters
                    <OpenInNew sx={{ ml: 2 }} />
                    </Button>
                    <ModalFilters open={open} handleClose={handleClose}/>
                </Item>

            </Box>
        </Box>

    );
}