import * as React from 'react';
import { Divider, Grid, IconButton, InputBase, Paper, Typography, useMediaQuery, useTheme } from '@mui/material';
import { ArrowLeft } from 'mdi-material-ui';
import { AiExpert } from 'src/@core/layouts/components/icons/AI'
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { useEffect, useState } from 'react';
import { useAiExpert } from 'src/@core/hooks/useAiExpert';
import SendIcon from '@mui/icons-material/Send';

export default function ChatAi(props: any) {
    const { messages, saveMessages, saveMessage } = useAiExpert()
    const [chatText, setChatText] = useState("")
    const theme = useTheme();
    let size = useMediaQuery(theme.breakpoints.up('sm')) ? { message: 60, chatInput:20, maxHeight:  "480px" } : {}
    size = useMediaQuery(theme.breakpoints.up('md')) ? { message: 60, chatInput:20, maxHeight: "480px" } : size
    size = useMediaQuery(theme.breakpoints.up('lg')) ? { message: 120, chatInput:30, maxHeight: "690px" } : size

    useEffect(() => {
        if (messages.length === 1) {
            const requestOptions = {
                method: 'POST',
                body: JSON.stringify({
                    messages,
                })
            };
            fetch(`https://app.n-sights.ai/api/chat`, requestOptions)
                .then(response => response.json())
                .then(data => {
                    saveMessage({ role: "aiExpert", content: data.message })
                })
        }

    }, [saveMessages])

    const handleChatText = (text: string) => {
        setChatText(text)
    }

    const handleClick = async () => {

        if (chatText === "") {
            return
        }
        setChatText("")
        saveMessage({ role: "user", content: chatText })
        const messageToSave = { role: "user", content: chatText }
        const dataToSend = [...messages, messageToSave]
        const requestOptions = {
            method: 'POST',
            body: JSON.stringify({
                messages: dataToSend,
            })
        };
        fetch(`https://app.n-sights.ai/api/chat`, requestOptions)
            .then((response) => response.json())
            .then((data) => {
                saveMessages([{ role: "user", content: chatText }, { role: "aiExpert", content: data.message }])
            })



    }

    return (
        <Grid key={props.key} container direction="column" justifyContent="center" alignItems="center" >
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
                        <IconButton onClick={props.onClose}>
                            <ExitToAppIcon sx={{ height: 30, width: 30, color: "black" }} />
                        </IconButton>
                    </Grid>
                </Grid>
            </Grid>
            <Grid sx={{ p: 10, overflowY: "scroll", maxHeight: size.maxHeight }} container>
                {messages.map((message) => {
                    if (message.role === "user") {
                        return (
                            <Grid container alignItems="center" justifyContent="center" sx={{ backgroundColor: "#4B0181", p: 5, ml: size.message, mt: 2, mb: 4, width: 369, borderBottomLeftRadius: 30, borderBottomRightRadius: 30, borderTopLeftRadius: 30, minHeight: 65 }}>
                                <Typography sx={{ color: "white", fontSize: 15, }}>{message.content}</Typography>
                            </Grid>
                        )
                    } else {
                        return (
                            <Grid container alignItems="center" justifyContent="center" sx={{ backgroundColor: "#EEEEEE", p: 5, mt: 2, mb: 4, width: 369, borderBottomLeftRadius: 30, borderBottomRightRadius: 30, borderTopRightRadius: 30, minHeight: 65, minWidth:369 }}>
                                <Typography sx={{ color: "#656565", fontSize: 15, }}>{message.content}</Typography>
                            </Grid>
                        )
                    }

                })}

            </Grid>
            <Paper
                onSubmit={(e: any) => { e.preventDefault() }}
                elevation={8}
                component="form"
                sx={{ p: '2px 4px', borderRadius: 4, display: 'flex', alignItems: 'center', width: "95%", position: 'fixed', bottom: size.chatInput, left: size.chatInput, right: 30 }}
            >
                <InputBase
                    onChange={(e) => handleChatText(e.target.value)}
                    value={chatText}
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
