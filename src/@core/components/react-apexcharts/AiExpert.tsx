import * as React from 'react';
import Box from '@mui/material/Box';
import { Button, Grid, Modal, Typography, styled, useMediaQuery, useTheme } from '@mui/material';
import { ArrowRight } from 'mdi-material-ui';
import CustomizedInputAi from './DefaultInput';
import ChatAi from './ChatAi';
import { useState } from 'react';
import { useAiExpert } from 'src/@core/hooks/useAiExpert';





const FirstSlide = (props: any) => {
    const theme = useTheme();
    let size = useMediaQuery(theme.breakpoints.up('sm')) ? "50%" : "100%"
    size = useMediaQuery(theme.breakpoints.up('md')) ? "50%" : size
    size = useMediaQuery(theme.breakpoints.up('lg')) ? "100%" : size


    const Img = styled('img')(({ }) => ({
        height: size,
        maxHeight:373.61,
        maxWidth:369,
        width:size,
        marginTop: 80,
        borderRadius: 20
    }))

    return (
        <Grid key={props.key}>
            <Typography sx={{ fontWeight: "bold", color: "#4B0181", fontSize: 30, mt: 12 }} >
                AI EXPERT
            </Typography>
            <Typography sx={{ fontWeight: "600", color: "#4B0181", fontSize: 23, }} >
                Your new personal data analyst
            </Typography>
            <Typography sx={{ fontWeight: "400", color: "#757575", fontSize: 14, mt: 3 }} >
                Get insights into your data in natural language.
            </Typography>
            <Img alt='Stumptown Roasters' src={"/images/airobot.png"} />
            <Button variant='contained' onClick={props.onContinue} sx={{ width: "80%", backgroundColor: "#4B0181", mt: 5, borderRadius: 5, maxWidth: 369, height: "80%" }}>
                Continue
                <ArrowRight sx={{ ml: 2 }} />
            </Button>
        </Grid>
    )
}

const SecondSlide = (props: any) => {
    const [isEmpty, setIsEmpty] = useState(false)
    const { textInput, saveMessage } = useAiExpert()

    const handleClick = () => {
        
        if (textInput === "") {
            setIsEmpty(true)
            
return
        }
        props.onContinue()
        saveMessage({role:"user", content: textInput})
    }

    return (
        <Grid key={props.key}>
            <Typography sx={{ fontWeight: "bold", color: "#4B0181", fontSize: 30, mt: 12 }} >
                AI EXPERT
            </Typography>
            <Typography sx={{ fontWeight: "600", color: "#4B0181", fontSize: 23, }} >
                Report Briefing
            </Typography>
            <Typography sx={{ fontWeight: "400", color: "#757575", fontSize: 14, mt: 3 }} >
                Fill in the field below with the information you want in your report
            </Typography>
            <CustomizedInputAi/>
            {isEmpty ? (
                <Box>
                    <Typography color="red"> Please fill out this field.</Typography>
                </Box>
            ) : null}
            <Button variant='contained' onClick={handleClick} sx={{ width: "80%", backgroundColor: "#4B0181", mt: 5, borderRadius: 5, maxWidth: 369, height: "80%" }}>
                Continue
                <ArrowRight sx={{ ml: 2 }} />
            </Button>
        </Grid>
    )
}

export default function AiExpertModal(props: any) {
    const [slide, setSlide] = useState(0)
    const { cleanMessages, saveText }= useAiExpert()

    const handleContinue = () => {
        setSlide(slide + 1)
    }

    const handleBack = () => {
        cleanMessages()
        saveText("")
        setSlide(slide - 1)
    }


    const slideOptions = [
        <FirstSlide key={"firstSlide"} onContinue={handleContinue} />,
        <SecondSlide  key={"secondSlide"} onContinue={handleContinue} />,
        <ChatAi key={"thirdSlide"} onClose={props.handleClose} onBack={handleBack}  />
    ]

    const theme = useTheme();
    let sizes = { width: 800, height: 800 }
    sizes = useMediaQuery(theme.breakpoints.up('xs')) ? { width: 400, height: 300 } : sizes
    sizes = useMediaQuery(theme.breakpoints.up('sm')) ? { width: 600, height: 600 } : sizes
    sizes = useMediaQuery(theme.breakpoints.up('md')) ? { width: 800, height: 600 } : sizes
    sizes = useMediaQuery(theme.breakpoints.up('lg')) ? { width: 959, height: 812 } : sizes

    const style = {
        position: 'absolute' as const,
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: sizes.width,
        height: sizes.height,
        display: 'block',
        bgcolor: '#FFFFFF',
        border: '1px solid #FFFFFF',
        borderRadius: 5,
        boxShadow: 24,
        p: 4,
        media: {
            width: "auto",
            paddingTop: "56.25%" // 16:9
        },
    };



    const handleClose = () =>{
        if(slide===1){
            setSlide(0)
        }
        props.handleClose()
    }



    return (

        <Modal
            open={props.open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >

            <Box sx={style}>
                <Grid container direction="column" textAlign="center" justifyContent="center" alignContent="center" >
                    {slideOptions[slide]}
                </Grid>

            </Box>
        </Modal>

    );
}