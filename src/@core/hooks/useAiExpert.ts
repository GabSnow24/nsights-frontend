import { useContext } from 'react'
import { AiExpertContextValue, AiExpertContext } from '../context/aiExpertContext'


export const useAiExpert = (): AiExpertContextValue => useContext(AiExpertContext)
