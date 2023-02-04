import React, { useState } from 'react';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
//import MaterialUIPickers from './Calendar';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import BasicModal from './POPUP';
import dayjs, { Dayjs } from 'dayjs';
import Stack from '@mui/material/Stack';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
// import Grid from '@mui/material/Grid';
// import { MonthPicker } from '@mui/x-date-pickers/MonthPicker';
// import { CalendarPicker } from '@mui/x-date-pickers/CalendarPicker';
// import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';

export default function MediaCard(props) {
    const [status, setStatus] = React.useState('');
    const [title, setTitle] = React.useState('');
    const [title1, setTitle1] = React.useState('');
    const [submit, setSubmit] = React.useState(false)
    const [todo, setTodo] = React.useState(false)
    const [description, setDescription] = React.useState("");

    // const minDate = dayjs('2020-01-01T00:00:00.000');
    // const maxDate = dayjs('2034-01-01T00:00:00.000');
    // const [date, setDate] = useState(dayjs('2022-04-07'));
    //const [date, setDate] = useState(dayjs('2022-04-07'))

    const [value, setValue] = React.useState(
        dayjs(""),
    );
    const [value1, setValue1] = React.useState(
        dayjs(""),
    );

    const handleChange1 = (newValue) => {
        setValue(newValue);
    };
    const handleChangeEndDate = (newValue) => {
        setValue1(newValue);
    };
    const handleChange = (event) => {
        setStatus(event.target.value);
    };
    const handletitle = () => {
        props.handletitles(!title)
        setTitle(!title)
    }
    const handlesubmit = () => {
        if (title1.length > 0) {
            setSubmit(true)
            setTitle(false)
        }
    }
    const handletodo = () => {
        setTodo(!todo)
    }
    const handletitle1 = (event) => {
        setTitle1(event.target.value);
        if (title1.length > 0) {
            setSubmit(false)
        }
    }
    const handledescription = (event) => {
        setDescription(event.target.value);
    };
    const handleCancel = (cancel) => {
        setTodo(cancel)
    }
    return (
        <div className='space'>
            {
                props.Description === "Addtask" ? <h3 className='p'>To do</h3> : props.Description === "Progress" ? <h3 className='p1'>Progress</h3> : <h3 className='p2'>Done</h3>
            }
            <Card sx={{ maxWidth: 345 }} className="hover1" onClick={() => handletitle()}>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div" className='card1'>
                        {props.name}
                    </Typography>
                </CardContent>
            </Card>
            {
                title ?
                    <Card sx={{ maxWidth: 345 }}>
                        <CardContent>
                            <TextField id="outlined-required" label="Title" className='status' onChange={(e) => handletitle1(e)} />
                            <Typography variant="body2">
                                <TextField id="outlined-required" label="Description" className='status' onChange={(e) => handledescription(e)} />
                            </Typography>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Status</InputLabel>
                                <Select className='status'
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={status}
                                    label="Status"
                                    onChange={handleChange}
                                >
                                    <MenuItem value={10}>To do</MenuItem>
                                    <MenuItem value={20}>Progress</MenuItem>
                                    <MenuItem value={30}>Done</MenuItem>
                                </Select>
                            </FormControl>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <Stack spacing={3}>
                                    <DesktopDatePicker className='status'
                                        label="Start Date"
                                        inputFormat="MM/DD/YYYY"
                                        value={value}
                                        onChange={handleChange1}
                                        renderInput={(params) => <TextField {...params} />}

                                    />
                                    <DesktopDatePicker className='status'
                                        label="End Date"
                                        inputFormat="MM/DD/YYYY"
                                        value={value1}
                                        onChange={handleChangeEndDate}
                                        renderInput={(params) => <TextField {...params} />}
                                        disablePast={true}
                                        minDate={value}
                                    />
                                </Stack>
                            </LocalizationProvider>
                            {/* <MaterialUIPickers /> */}
                        </CardContent>
                        <CardActions >
                            <Button size="small" className="hover1" onClick={() => handlesubmit()}> + Addtask</Button>
                        </CardActions>
                    </Card> : null
            }
            {
                submit ?
                    <Card sx={{ maxWidth: 345 }} onClick={() => handletodo()}>
                        <CardContent>
                            <Typography variant="h3" color="text.secondary">
                                {
                                    title1
                                }
                            </Typography>
                        </CardContent>
                    </Card> : null
            }
            {
                submit && (
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <Stack spacing={3}>
                            <DesktopDatePicker className='status2'
                                label=""
                                inputFormat="MM/DD/YYYY"
                                value={value}
                                onChange={handleChange1}
                                renderInput={(params) => <TextField {...params} />}
                            />
                        </Stack>
                    </LocalizationProvider>
                )
            }
            {
                todo ?
                    <BasicModal todos={todo} title1={title1} description1={description} status1={status} startdate1={value} enddate1={value1} handleCancel1={handleCancel}></BasicModal>
                    : null
            }
        </div>
    );
}