// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'

// ** Types Imports
import { Button, Grid, TextField } from '@mui/material'
import { DataGrid, GridEventListener, GridPaginationModel, GridRowId, GridToolbarColumnsButton, GridToolbarContainer, GridToolbarDensitySelector, GridToolbarExport, GridToolbarFilterButton } from '@mui/x-data-grid';

import React, { useEffect, useState } from 'react'
import { useStartup } from 'src/@core/hooks/useStartup'
import { AiExpert } from 'src/@core/layouts/components/icons/AI'
import AiExpertModal from './AiExpert'



const StartupDataGrid = (props: any) => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const mapPageToNextCursor = React.useRef<{ [page: number]: GridRowId }>({});
    const { searchData, startupsData, saveData, filteredData, saveFiltered, saveSelected, selectedData, saveSearchText, searchText } = useStartup()
    const [paginationModel, setPaginationModel] = useState({
        page: 0,
        pageSize: 8,
    });

    function CustomToolbar() {
        return (
            <GridToolbarContainer>
                <GridToolbarColumnsButton />
                <GridToolbarFilterButton />
                <GridToolbarDensitySelector />
                <GridToolbarExport />
                <Button onClick={handleOpen}>
                    <AiExpert />
                    <Typography sx={{ fontWeight: "500", color: "#9155FD", fontSize: '0.8rem', ml: 2 }}>AI EXPERT</Typography>
                </Button>
            </GridToolbarContainer>
        );
    }

    const [rowCountState, setRowCountState] = React.useState(
        startupsData?.total || 0,
    );

    const handlePaginationModelChange = (newPaginationModel: GridPaginationModel) => {

        if (newPaginationModel.page === 0 || mapPageToNextCursor.current[newPaginationModel.page - 1]) {
            setPaginationModel(newPaginationModel);
        } else {
            setPaginationModel({ ...paginationModel, page: paginationModel.page > newPaginationModel.page ? paginationModel.page - 1 : paginationModel.page + 1 })
        }
        setRowCountState((prevRowCountState: any) =>
            startupsData?.total !== undefined
                ? startupsData?.total
                : prevRowCountState,
        );

    };

    const handleEvent: GridEventListener<'cellClick'> = (
        params,
    ) => {
        if (selectedData.data.find((row) => row == params.row)) {
            const dataToSave = selectedData.data.filter((row) => {
                return row.id !== params.row.id
            })
            saveSelected({ ...selectedData, data: dataToSave })

            return
        }
        saveSelected({ ...selectedData, data: [...selectedData.data, params.row] })
    };

    const handleColumn = (
        params: any,
    ) => {
        if (params.field !== "__check__") return
        if (selectedData.data.length === 0) {
            saveSelected(startupsData)

            return
        }
        saveSelected({ ...selectedData, data: [] })
    };

    useEffect(() => {

        const { page, pageSize } = paginationModel

        if (searchText !== "") {

            setTimeout(()=>{
                searchData(searchText, page)
                setRowCountState((prevRowCountState: any) =>
                    filteredData.total !== undefined
                        ? filteredData.total
                        : prevRowCountState,
                );
            }, 1000)
            
return 
        }

        fetch(`https://app.n-sights.ai/backend-api/enterprises?limit=${pageSize}&page=${page + 1}`)
            .then(response => response.json())
            .then(data => {
                saveData(data)
                saveFiltered(data)
                setRowCountState((prevRowCountState: any) =>
                    data.total !== undefined
                        ? data.total
                        : prevRowCountState,
                );
            })
    }, [setRowCountState, paginationModel, searchText])

    return (
        <Card>
            <Grid container direction="column" justifyContent="center" alignItems="stretch">
                <Grid>
                    <CardContent sx={{ height: 70 }}>
                        <Grid container direction="row" justifyContent='flex-start' alignItems="center" >
                            <Typography sx={{ fontWeight: 'bold', color: "black", fontSize: '1.2rem', mr: 5 }}>Startups:</Typography>
                            <Grid>
                                <TextField
                                    size='small'
                                    sx={{ '& .MuiOutlinedInput-root': { borderRadius: 1, backgroundColor: "#FFFFFF" }, mr: 5, width: 400, }}
                                    placeholder="Search Starups via Company name or website"
                                    onChange={(e) => saveSearchText(e.target.value)}
                                />
                            </Grid>
                        </Grid>
                    </CardContent>
                </Grid>
                <Grid container direction="column" justifyContent="flex-start" alignItems="flex-start">
                    <CardContent sx={{ height: 600, width: "100%" }} >
                        <Box sx={{
                            height: "100%", width: "100%",
                        }}>
                            <DataGrid
                                sx={{ borderColor: "white" }}
                                rows={filteredData.data}
                                onCellClick={handleEvent}
                                onColumnHeaderClick={handleColumn}
                                rowCount={rowCountState}
                                paginationModel={paginationModel}
                                paginationMode="server"
                                onPaginationModelChange={handlePaginationModelChange}
                                columns={props.columns}
                                slots={{ toolbar: CustomToolbar }}
                                pageSizeOptions={[8]}
                                checkboxSelection
                                disableRowSelectionOnClick
                            />
                        </Box>
                    </CardContent>
                </Grid>
            </Grid>
            <AiExpertModal open={open} handleClose={handleClose} />
        </Card >

    )
}

export default StartupDataGrid

StartupDataGrid.defaultProps = {
    color: 'primary',
    trend: 'positive'
}
