import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import { useAiExpert } from 'src/@core/hooks/useAiExpert';
import { useMediaQuery, useTheme } from '@mui/material';


export default function CustomizedInputAi() {
    const { saveText } = useAiExpert()
    const theme = useTheme();
    let size = useMediaQuery(theme.breakpoints.up('sm')) ? {height: 225, width: 440} : {}
    size = useMediaQuery(theme.breakpoints.up('md')) ? {height: 225, width: 440} : size
    size = useMediaQuery(theme.breakpoints.up('lg')) ? {height: 374, width: 616} : size

    return (
        <>
            <Paper
                elevation={8}
                square={false}
                component="form"
                sx={{ p: '2px 20px', mb: 10, mt: 10, display: 'flex', alignItems: 'center', height:size.height, width:size.width }}
            >
                <InputBase
                    onChange={(e)=>saveText(e.target.value)}
                    multiline
                    sx={{ ml: 1, flex: 1 }}
                    placeholder="Example: What is the most profitable franchise in Brazil?"
                    inputProps={{ 'aria-label': 'Example: What is the most profitable franchise in Brazil?' }}
                />
            </Paper>
        </>

    );
}