// ** React Imports
import { ReactNode } from 'react'

// ** Types
import { ThemeColor } from 'src/@core/layouts/types'

export type CardStatsVerticalProps = {
  title: string
  enableTrend?:boolean
  stats: string
  icon?: ReactNode
  subtitle?: string
  color?: ThemeColor
  trendNumber?: string
  trend?: 'positive' | 'negative',
  chart: ReactNode
}
