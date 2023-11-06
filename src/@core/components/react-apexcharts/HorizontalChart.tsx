import { useTheme } from '@mui/material'
import * as React from 'react';
import LinearProgress, { LinearProgressProps, linearProgressClasses } from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export const HorizontalChart = () => {

    const theme = useTheme()



    function LinearProgressWithLabel(props: LinearProgressProps & { value: number }) {
        return (
            <Box sx={{ alignItems: 'center', flexGrow: 1, }}>
                <Box sx={{ width: 290 }}>
                    <LinearProgress variant="determinate" sx={{
                        height: 10,
                        borderRadius: 5,
                        [`&.${linearProgressClasses.colorPrimary}`]: {
                            backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
                        },
                        [`& .${linearProgressClasses.bar}`]: {
                            borderRadius: 5,
                            backgroundColor: theme.palette.mode === 'light' ? theme.palette.primary.main : '#308fe8',
                        },
                    }}{...props} />
                </Box>

                <Box sx={{ minWidth: 35, display: "flex", mt:2, alignItems: 'flex-start', justifyContent: 'space-between' }}>
                    <Typography variant="body2" color="text.secondary">{`${Math.round(
                        76
                    )} left from target`}</Typography>
                    <Typography variant="body2" color="text.secondary">{`${Math.round(
                        props.value,
                    )}`}</Typography>
                </Box>
            </Box>
        );
    }


    const [progress] = React.useState(42);



    return (
        <Box sx={{ width: '100%' }}>
            <LinearProgressWithLabel value={progress} />
        </Box>
    );

}