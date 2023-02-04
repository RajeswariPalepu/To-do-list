import * as React from 'react';
import Modal from '@mui/material/Modal';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import dayjs, { Dayjs } from 'dayjs';
import Stack from '@mui/material/Stack';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import SubComponentsPickers from './Calendar';

const style = {
  position: 'relative',
  top: '45%',
  left: '15%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function BasicModal(props) {
  const [open, setOpen] = React.useState(props.todos);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
   props.handleCancel1(false)
  }

  return (
    <div>

      <Modal className='carddwn'
        open={open}
     
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Card sx={{ maxWidth: 345 }}>
       
                                 <h3 className="cancel"onClick={()=>handleClose()}>X</h3>  
                                
                            <CardContent>
                                <TextField id="standard-basic" label="Title" className='status' value={props.title1} variant="standard" />
                                <Typography variant="body2" color="text.secondary">
                                    <TextField id="standard-basic" label="Description" className='status' value={props.description1} variant="standard" />
                                </Typography>
                                <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Status</InputLabel>
        <Select className='status'
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={props.status1}
                                    label="Status"

                                >
                                    <MenuItem value={10}>ToDO</MenuItem>
                                    <MenuItem value={20}>Progress</MenuItem>
                                    <MenuItem value={30}>Done</MenuItem>
                                </Select>
      </FormControl>
                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <Stack spacing={3}>
                                        <DesktopDatePicker className='status'
                                            label="Start Date"
                                            inputFormat="MM/DD/YYYY"
                                            value={props.startdate1}
                                            renderInput={(params) => <TextField {...params} />}
                                        />
                                        <DesktopDatePicker className='status'
                                            label="End Date"
                                            inputFormat="MM/DD/YYYY"

                                            value={props.enddate1}
                                            renderInput={(params) => <TextField {...params} />}
                                        />
                                    </Stack>
                                </LocalizationProvider>
                                
                                {/* <SubComponentsPickers/> */}
                                {/* <MaterialUIPickers /> */}
                            </CardContent>
                            <CardActions>
                                <Button size="small" className="hover1">Update</Button>
                            </CardActions>
                        </Card>
      </Modal>
    </div>
   
  );
}