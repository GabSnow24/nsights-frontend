// ** MUI Imports
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import OpenInNew from 'mdi-material-ui/OpenInNew'

// ** Types Imports

import { Button, Grid, Link, ListItemButton, styled, useTheme } from '@mui/material'
import React, { useEffect, useState } from 'react'


const NewsFeed = () => {

    const theme = useTheme()
    const [newsData, setNewsData] = useState([])
    useEffect(() => {
        fetch("https://app.n-sights.ai/api/bing", {
            method: 'GET',
        })
            .then(response => response.json())
            .then(data => setNewsData(data))
    }, [])

    // Styled component for the image
    const Img = styled('img')(({ }) => ({
        height: '4.8rem',
        width: "8.5rem",
        borderRadius: 20
    }))

    return (
        <Card>
            <Grid container direction="column" justifyContent="center" alignItems="center" >
                <Grid >
                    <CardContent sx={{ height: 90 }}>
                        <Grid container direction="row" justifyContent='space-between'>
                            <Grid container direction="column" justifyContent="space-between" alignItems="flex-start" sx={{ width: 500 }}>
                                <Typography sx={{ fontWeight: 'bold', color: "black", fontSize: '1.5rem' }}>News Feed</Typography>
                                <Typography sx={{ fontWeight: 500, fontSize: '0.8rem', mt: 2 }}>Check the last news of the segment</Typography>
                            </Grid>
                            <Grid>
                                <Button sx={{ borderRadius: 1 }} variant="outlined">View More</Button>
                            </Grid>
                        </Grid>
                    </CardContent>
                </Grid>
                <Grid>
                    <CardContent >
                        <Grid container direction="row" justifyContent='space-between' alignItems="center" >
                            {newsData.map((news: { title: string, thumbnail: string, link: string }, index) => (
                                <Link key={index} target='_blank' href={news.link}>
                                    <Grid container key={index} direction="row" justifyContent='space-between' alignItems="center" >
                                        <ListItemButton sx={{ borderBottom: `1px solid ${theme.palette.divider}` }} >
                                            <Grid>
                                                <CardContent sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                                    <Img alt='Stumptown Roasters' src={news.thumbnail} />
                                                </CardContent>
                                            </Grid>

                                            <Typography sx={{ fontWeight: 'bold', color: "black", width: 360, fontSize: '0.85rem', mt: 2, mr: 4 }}>
                                                {news.title}
                                            </Typography>
                                            <Grid sx={{ width: 50 }}>

                                                <Button sx={{ borderRadius: 1, height: 50, width: 50, minWidth: 0 }} variant="outlined" size='small' >
                                                    <OpenInNew color="primary" />
                                                </Button>

                                            </Grid>
                                        </ListItemButton>
                                    </Grid>
                                </Link>
                            ))}

                        </Grid>
                    </CardContent>
                </Grid>
            </Grid>
        </Card >

    )
}

export default NewsFeed

NewsFeed.defaultProps = {
    color: 'primary',
    trend: 'positive'
}
