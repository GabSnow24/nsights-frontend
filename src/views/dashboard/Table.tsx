// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Chip from '@mui/material/Chip'
import Table from '@mui/material/Table'
import TableRow from '@mui/material/TableRow'
import TableHead from '@mui/material/TableHead'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import Typography from '@mui/material/Typography'
import TableContainer from '@mui/material/TableContainer'
import CardHeader from '@mui/material/CardHeader'

// ** Types Imports
import { ThemeColor } from 'src/@core/layouts/types'

interface RowType {
  age: number
  name: string
  date: string
  email: string
  salary: string
  status: string
}

interface StatusObj {
  [key: string]: {
    color: ThemeColor
  }
}

const rows: RowType[] = [
  {
    age: 27,
    status: 'actived',
    date: '20.000',
    name: 'Wallace',
    salary: '420.000',
    email: 'Azul',
  },
  {
    age: 61,
    date: '420.000',
    salary: '0',
    status: 'deactived',
    name: 'Edson',
    email: 'Latam',
  },
  {
    age: 59,
    date: '10.000',
    name: 'Gabriel',
    status: 'actived',
    salary: '20.000',
    email: 'Smiles',
  },
  {
    age: 27,
    status: 'actived',
    date: '20.000',
    name: 'Wallace',
    salary: '420.000',
    email: 'Azul',
  },
  {
    age: 61,
    date: '420.000',
    salary: '0',
    status: 'deactived',
    name: 'Edson',
    email: 'Latam',
  },
  {
    age: 59,
    date: '10.000',
    name: 'Gabriel',
    status: 'actived',
    salary: '20.000',
    email: 'Smiles',
  },
]

const statusObj: StatusObj = {
  deactived: { color: 'warning' },
  actived: { color: 'success' }
}

const DashboardTable = () => {
  return (
    <Card>
      <CardHeader
        title="Meus CPF's gerenciados"
        subheader={
          <Typography variant='body2'>
          </Typography>
        }
      />
      <TableContainer>
        <Table sx={{ minWidth: 800 }} aria-label='table in dashboard'>
          <TableHead>
            <TableRow>
              <TableCell>Titular</TableCell>
              <TableCell>Programa</TableCell>
              <TableCell>Saldo</TableCell>
              <TableCell>Utilizado</TableCell>
              <TableCell>Custo Médio</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row: RowType) => (
              <TableRow hover key={row.name} sx={{ '&:last-of-type td, &:last-of-type th': { border: 0 } }}>
                <TableCell sx={{ py: theme => `${theme.spacing(0.5)} !important` }}>
                  <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <Typography sx={{ fontWeight: 500, fontSize: '0.875rem !important' }}>{row.name}</Typography>
                  </Box>
                </TableCell>
                <TableCell>{row.email}</TableCell>
                <TableCell>{row.date}</TableCell>
                <TableCell>{row.salary}</TableCell>
                <TableCell>{row.age}</TableCell>
                <TableCell>
                  <Chip
                    label={row.status}
                    color={statusObj[row.status].color}
                    sx={{
                      height: 24,
                      fontSize: '0.75rem',
                      textTransform: 'capitalize',
                      '& .MuiChip-label': { fontWeight: 500 }
                    }}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Card>
  )
}

export default DashboardTable
