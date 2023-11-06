import { useContext } from 'react'
import { StartupContext, StartupContextValue } from '../context/startupData'

export const useStartup = (): StartupContextValue => useContext(StartupContext)
