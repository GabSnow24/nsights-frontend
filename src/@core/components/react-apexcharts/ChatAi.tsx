import * as React from 'react';
import { Divider, Grid, IconButton, InputBase, Paper, Typography } from '@mui/material';
import { ArrowLeft } from 'mdi-material-ui';
import { AiExpert } from 'src/@core/layouts/components/icons/AI'
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { useEffect, useState } from 'react';
import { useAiExpert } from 'src/@core/hooks/useAiExpert';
import SendIcon from '@mui/icons-material/Send';
import { MessageData } from 'src/@core/context/aiExpertContext';

export default function ChatAi(props: any) {
    const { textInput, messages, saveMessages } = useAiExpert()
    const [chatText, setChatText] = useState("")
    
    useEffect(() => {
        console.log(messages)
        if (messages.length === 1) {
            console.log("getting here")
            const requestOptions = {
                method: 'POST',
                body: JSON.stringify({
                    messages,
                })
            };
            fetch(`http://localhost:3000/api/chat`, requestOptions)
                .then(response => response.json())
                .then(data => {
                    saveMessages({ role: "aiExpert", content: data.message })
                })
        }

    }, [saveMessages])

    const handleChatText=(text: string)=>{
        setChatText(text)
    }

    const handleClick= async () =>{
        if(chatText === ""){
            return
        }
        saveMessages({role:"user", content: chatText})
        const messageToSave = {role:"user", content: chatText}
        const dataToSend = [...messages,  messageToSave]
        const requestOptions = {
            method: 'POST',
            body: JSON.stringify({
                messages: dataToSend,
            })
        };
        const response = await fetch(`http://localhost:3000/api/chat`, requestOptions)
        const data = await response.json()

        
        saveMessages({ role: "aiExpert", content: data.message })
    }

    return (
        <Grid container direction="column" justifyContent="center" alignItems="center" >
            <Grid container direction="row" justifyContent="space-between" alignItems="center" sx={{ borderBottom: "1px solid #ECECEC" }}>
                <IconButton onClick={props.onBack}>
                    <ArrowLeft sx={{ color: "black" }} />
                </IconButton>
                <Grid item sx={{ display: "flex" }}>
                    <Grid sx={{ mt: 3, mr: 3 }}>
                        <AiExpert color="#4B0181" width={40} height={40} />
                    </Grid>
                    <Grid container direction="column" justifyContent="flex-start" alignItems="flex-start">
                        <Typography sx={{ fontWeight: "bold", color: "#4B0181", fontSize: 24, ml: 2 }}>AI EXPERT</Typography>
                        <Typography sx={{ fontWeight: "bold", color: "#3ABF38", fontSize: 24, ml: 2 }}>• Online</Typography>
                    </Grid>
                </Grid>
                <Grid>
                    <Grid container direction="row" justifyContent="flex-start" alignItems="flex-start">
                        <IconButton>
                            <VolumeUpIcon sx={{ height: 30, width: 30, color: "black" }} />
                        </IconButton>
                        <IconButton onClick={props.onClose}>
                            <ExitToAppIcon sx={{ height: 30, width: 30, color: "black" }} />
                        </IconButton>
                    </Grid>
                </Grid>
            </Grid>
            <Grid sx={{ p: 10, overflowY: "scroll", maxHeight: "690px" }} container>
                {messages.map((message) => {
                    if (message.role === "user") {
                        return (
                            <Grid container alignItems="center" justifyContent="center" sx={{ backgroundColor: "#4B0181", p: 5, ml: 120, mt: 2, mb: 4, width: 369, borderBottomLeftRadius: 30, borderBottomRightRadius: 30, borderTopLeftRadius: 30, minHeight: 65 }}>
                                <Typography sx={{ color: "white", fontSize: 15, }}>{message.content}</Typography>
                            </Grid>
                        )
                    } else {
                        return (
                            <Grid container alignItems="center" justifyContent="center" sx={{ backgroundColor: "#EEEEEE", mr: 110, p: 5, mt: 2, mb: 4, width: 369, borderBottomLeftRadius: 30, borderBottomRightRadius: 30, borderTopRightRadius: 30, minHeight: 65 }}>
                                <Typography sx={{ color: "#656565", fontSize: 15, }}>{message.content}</Typography>
                            </Grid>
                        )
                    }

                })}

            </Grid>
            <Paper
                elevation={8}
                component="form"
                sx={{ p: '2px 4px', borderRadius: 4, display: 'flex', alignItems: 'center', width: "95%", position: 'fixed', bottom: 30, left: 30, right: 30 }}
            >
                <InputBase
                    onChange={(e)=>handleChatText(e.target.value)}
                    sx={{ ml: 4, flex: 1 }}
                    placeholder="Write your message "
                    inputProps={{ 'aria-label': 'write your message' }}
                />
                <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
                <IconButton color="primary" onClick={handleClick} sx={{ p: '10px' }} aria-label="send">
                    <SendIcon />
                </IconButton>
            </Paper>
        </Grid>
    )
}

