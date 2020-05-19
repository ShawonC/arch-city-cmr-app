import React from 'react';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

export default function dashboard() {
	return (
    <div className='content'>
      <div className='release'>
        <ExpansionPanel>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            
            
          >
            <h3>Expansion Panel 1</h3>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
              sit amet blandit leo lobortis eget.
            </p>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </div>
      <div className='release'>
        <ExpansionPanel>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            
            
          >
            <h3>Expansion Panel 1</h3>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
              sit amet blandit leo lobortis eget.
            </p>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </div>
      <div className='release'>
        <ExpansionPanel>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            
            
          >
            <h3>Expansion Panel 1</h3>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
              sit amet blandit leo lobortis eget.
            </p>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </div>
      <div className='release'>
        <ExpansionPanel>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            
            
          >
            <h3>Expansion Panel 1</h3>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
              sit amet blandit leo lobortis eget.
            </p>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </div>
      <div className='release'>
        <ExpansionPanel>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            
            
          >
            <h3>Expansion Panel 1</h3>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
              sit amet blandit leo lobortis eget.
            </p>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </div>
      
    </div>
  );
};