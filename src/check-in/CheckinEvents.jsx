import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import ListEvents from './ListEvents';
import AddCheckin from './AddCheckin';
import CheckinDialog from './CheckinDialog';
import '../templates/Common.css';
const styles = {
  root: {
    flexGrow: 1,
  },
};
function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};
class CheckinEvents extends React.Component {
  state = {
    value: 'events',
    openCheckinModal: false,
    openDialog:false
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };
  onSelectDialog = (param) => {
    console.log('onSelectDialog', param);
      if(param == 'checkin'){
        console.log('onSelectDialogs', param);
        this.setState({ openDialog:false,openCheckinModal:true });
      }
  }
  onSelectEvent = () => {    
      this.setState({ openDialog:true });  
  }
  render() {
    const { classes } = this.props;

    return (
      
      <Paper className={classes.root}>
        <Tabs
          value={this.state.value}
          onChange={this.handleChange}
          indicatorColor="primary"
          textColor="primary"
          centered
        >
          <Tab value = 'events' label="Events" />
          <Tab value = 'people' label="People" />
        </Tabs>
        {this.state.value === 'events' && 
          <TabContainer>
            <ListEvents onSelectEvent={this.onSelectEvent}/>
            <CheckinDialog openDialog={this.state.openDialog} onSelectDialog={this.onSelectDialog}/>
            <AddCheckin openCheckinModal={this.state.openCheckinModal} />
          </TabContainer>
        }
        {this.state.value === 'people' && <TabContainer>Item Two</TabContainer>}
      </Paper>
     
    );
  }
}

CheckinEvents.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CheckinEvents);
