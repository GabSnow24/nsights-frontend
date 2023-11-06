import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import { useAiExpert } from 'src/@core/hooks/useAiExpert';


export default function CustomizedInputAi() {
    const { saveText } = useAiExpert()
    return (
        <>
            <Paper
                elevation={8}
                square={false}
                component="form"
                sx={{ p: '2px 20px', mb: 10, mt: 10, display: 'flex', alignItems: 'center', height: 374, width: 616, }}
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
