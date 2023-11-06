// ** React Imports
import { createContext, useState, ReactNode, useEffect } from 'react'



export type AiExpertContextValue = {
  textInput: string
  messages: MessageData[]
  saveMessages: (updatedMessage: MessageData) => void
  cleanMessages: () => void
  saveText: (updatedString: string) => void
}


export type MessageData = {
  role: 'aiExpert' | 'user'
  content: string
}





// ** Create Context
export const AiExpertContext = createContext<AiExpertContextValue>({
  saveText: () => null,
  saveMessages: () => null,
  cleanMessages: () => null,
  messages: [],
  textInput: ""

})


export const AiExpertProvider = ({ children }: { children: ReactNode }) => {
  // ** State
  const [textInput, setTextInput] = useState("")
  const [messages, setMessages] = useState<MessageData[]>([])



  const saveText = (updatedString: string) => {
    setTextInput(updatedString)
  }

  const saveMessages = (updatedMessage: MessageData) => {
    console.log(updatedMessage)
    setMessages([...messages, updatedMessage ])
  }

  const cleanMessages = () => {
    setMessages([])
  }




  return <AiExpertContext.Provider value={{ cleanMessages, messages, saveMessages, textInput, saveText }}>{children}</AiExpertContext.Provider>
}

export const StartupConsumer = AiExpertContext.Consumer
