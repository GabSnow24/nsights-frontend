// ** MUI Imports
import Card from '@mui/material/Card'

// ** Types Imports
import { Grid } from '@mui/material'

import React from 'react'
import BasicTabs from './Tabs';




const StartupFilter = () => {

    return (
        <Card>
            <Grid sx={{ width: '100%'}} container direction="column" justifyContent="center" alignItems="stretch">
                    <BasicTabs/>
            </Grid>
        </Card >

    )
}

export default StartupFilter

StartupFilter.defaultProps = {
    color: 'primary',
    trend: 'positive'
}
