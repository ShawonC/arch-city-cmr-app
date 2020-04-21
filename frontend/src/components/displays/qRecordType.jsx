import React from 'react';
import { Tooltip, Select, MenuItem, TextField} from '@material-ui/core';
import {KeyboardDatePicker,MuiPickersUtilsProvider} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import Grid from '@material-ui/core/Grid';


export default function RecordComponent() {
    
    const [recordType, setRecordType] = React.useState('');
    const handleRecordType = (event) => {
        setRecordType(event.target.value);
    }

    const [selectedDate, setSelectedDate] = React.useState(new Date());

    const handleDateChange = (date) => {
      setSelectedDate(date);
    };
    
    return (
        <div className="questionnaire-content">
            <h5>
                Record Information
            </h5>
            <div style={{padding: 8}}>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <Grid container spacing={3}>
                        <Grid item xs={3.5}>
                            <div>RELEVANT DATE (edit)</div>
                            <KeyboardDatePicker
                            disableToolbar
                            variant="inline"
                            format="MM/dd/yyyy"
                            margin="normal"
                            id="date-picker-inline"
                            value={selectedDate}
                            onChange={handleDateChange}
                            KeyboardButtonProps={{
                            'aria-label': 'change date',
                            }}
                            />
                        </Grid>
                        <Grid item xs={5}>
                            <div>
                                <div className='inline-text'>If known, please indicate whether this record was {' '}</div>
                                <div className='inline-text'><Tooltip title="Arrested, but did not (i) go to court or (ii) enter a plea agreement"><div className='hover-text'>arrest only </div></Tooltip></div>
                                <div className='inline-text'>or a{' '}</div>
                                <div className='inline-text'><Tooltip title="Plead or ruled guilty in court"><div className='hover-text'>conviction </div></Tooltip></div>
                                <div className='inline-text' style = {{padding:'0px'}}>.</div>
                            </div>
                            <Select value={recordType}
                                    onChange={handleRecordType}
                                    displayEmpty
                                    >
                                <MenuItem value='' disabled><div className='PLACEHOLDER'>Record Type</div></MenuItem>
                                <MenuItem value={1}>Arrest Only</MenuItem>
                                <MenuItem value={2}>Conviction</MenuItem>
                            </Select>
                        </Grid>
                        <Grid item xs={3.5}>
                            <div>Jurisdiction (if known)</div>
                            <TextField 
                                variant="outlined"
                                style={{background: "white"}}/>
                        </Grid>
                        <Grid item xs={12}>
                        <div>Please provide any additional details</div>
                        <TextField 
                            variant="outlined"
                            style={{background: "white"}}
                            multiline
                            rowsMax={6}
                            fullWidth/>
                        </Grid>
                    </Grid>
                </MuiPickersUtilsProvider>
            </div>
        </div>
            
    
  
    );
}