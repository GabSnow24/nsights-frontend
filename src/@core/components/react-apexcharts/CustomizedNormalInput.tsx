import * as React from 'react';
import Paper from '@mui/material/Paper';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import { Autocomplete, TextField } from '@mui/material';
import { useStartup } from 'src/@core/hooks/useStartup';
import { Row } from 'src/@core/context/startupData';

interface InputBaseProps {
    title: string
    filterField: string
}
export default function CustomizedInputBase(props: InputBaseProps) {

    const { searchData, cleanFilteredData, startupsData, saveFiltered, multipleFilterSearch, filteredData } = useStartup()
    const { title, filterField } = props
    const optionsList = startupsData.data.reduce((accumulator: Row[], current) => {
        if (!accumulator.find((item) => item[filterField as keyof Row] === current[filterField as keyof Row])) {
            accumulator.push(current);
        }

        return accumulator;
    }, []);


    const onChange = (items: Row[]) => {
        if (items.length === 0) {
            return cleanFilteredData(filterField)
        }
        let filter = {}
        items.forEach((item) => {
            const iterable = filter[filterField as keyof {}] ?? false
            if (iterable) {
                filter = { [filterField]: [...iterable, item[filterField as keyof Row]] }
            } else {
                filter = { [filterField]: [item[filterField as keyof Row]] }
            }
        })
        const dataToSave = multipleFilterSearch(filter)
        saveFiltered({ ...startupsData, data: dataToSave })
    }

    const onInputChange = (value: string) => {
        searchData(value, filterField)
    }


    return (

        <Paper
            component="form"
            sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width:"100%", maxWidth:300, minWidth:10 }}
        >

            <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                <SearchIcon />
            </IconButton>
            <Divider sx={{ height: 28, m: 0.5, mr: 2 }} orientation="vertical" />
            <Autocomplete
                multiple
                sx={{ width: "90%" }}
                id="tags-outlined"
                options={optionsList}
                getOptionLabel={(option) => option[filterField as keyof Row] as string ?? option.orgName}
                onInputChange={(e, value) => onInputChange(value)}
                onChange={(e, value) => onChange(value)}
                filterSelectedOptions
                defaultValue={filteredData.data.length < 8 ? filteredData.data : []}
                isOptionEqualToValue={(option, value) => option.orgName === value.orgName}
                renderInput={(params) => {
                    return (
                        <TextField
                            {...params}
                            variant="standard"
                            placeholder={`Search per ${title}`}


                        />
                    )
                }}
            />
        </Paper>
    );
}

