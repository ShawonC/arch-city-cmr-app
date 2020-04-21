import React, {Component} from 'react';
import { Button, Tooltip, Select, MenuItem} from '@material-ui/core';
import RecordComponent from '../components/displays/qRecordType';
import InquiryComponent from '../components/displays/inquirySelect';


class Questionnaire extends Component{
  state = {
    numRecords: 0
  }

  render(){
    const records = [];
    for (var i = 0; i < this.state.numRecords+1; i += 1){
      records.push(<RecordComponent key={i} number={i} />);
    };



    return (
      <div className='content'>
        <div className='odd'>
          <div className='question-header-box'>
            <div className='question-header'>
              Expungement Clinic: 
            </div>
            <div className='question-header'> 
              Information for Record Inquiry
            </div>
          </div>
        </div>
        <div className='even'>
          <div className='question-main'>
            1) What criminal records are you seeking to have expunged?
          </div>
          <div>
            {records}
          </div>
          <div>
            <Button variant='contained'
              fullWidth='false'
              onClick={() => this.setState({numRecords: this.state.numRecords + 1})}>
                Add Another Record
            </Button>
          </div>
        </div>
        <div className='odd'>
          <div className='question-main'>
            2) Have you ever been granted an expungement in Missouri?
          </div>
          <div>
            <InquiryComponent/>
          </div>
        </div>
        <div className='even'>
          <div className='question-main'>
            3) Have you ever applied for an expungement in Missouri?
          </div>
          <div>
            <InquiryComponent/>
          </div>
        </div>
        <div className='odd'>
          <div className='question-main'>
            4) Have you ever been granted an expungement anywhere other than Missouri?
          </div>
          <div>
            <InquiryComponent/>
          </div>
        </div>
        <div className='even'>
          <div className='question-main'>
            5) Have you ever applied for an expungement anywhere other than Missouri?
          </div>
          <div>
            <InquiryComponent/>
          </div>
        </div>
        <div className='odd'>
          <div className='question-main'>
            6) Please list any known records (Including charges/tickets that are completed, sealed, or pending) in:
          </div>
          <div className='question-main'>a) St. Louis Region</div>
          <div>
            <RecordComponent/>
          </div>
          <div className='question-main'>b) Missouri (excluding St. Louis Region)</div>
          <div>
            <RecordComponent/>
          </div>
          <div className='question-main'>c) United States (excluding Missouri)</div>
          <div>
            <RecordComponent/>
          </div>
          <div className='question-main'>d) Outside of United States</div>
          <div>
            <RecordComponent/>
          </div>
        </div>
      </div>
  );
  }
  onAddRecord = () => {
    this.setState({numRecords: this.state.numRecords + 1
    });
  }
}


export default Questionnaire;