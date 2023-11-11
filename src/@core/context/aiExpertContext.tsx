// ** React Imports
import { createContext, useState, ReactNode } from 'react'



export type AiExpertContextValue = {
  textInput: string
  messages: MessageData[]
  saveMessages: (updatedMessage: MessageData[]) => void
  saveMessage: (updatedMessage: MessageData) => void
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
  saveMessage: () => null,
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

  const saveMessages = (updatedMessages: MessageData[]) => {
    setMessages(messages.concat(updatedMessages))
  }

  const saveMessage = (updatedMessage: MessageData) => {
    setMessages([...messages, updatedMessage ])
  }

  const cleanMessages = () => {
    setMessages([])
  }




  return <AiExpertContext.Provider value={{ cleanMessages, messages, saveMessages, saveMessage, textInput, saveText }}>{children}</AiExpertContext.Provider>
}

export const StartupConsumer = AiExpertContext.Consumer