import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Search from './Search';
import SubmitCheckin from './SubmitCheckin';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

function TabContainer(props) {
  return (
    <Typography component="div">
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

const styles = theme => ({
  root: {
   
  },
});

class SimpleTabs extends React.Component {
  state = {
    value: 0,
    checkinFinal:'disabled'
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };
  hit = () =>{
    alert('asdf');
  }
  render() {
    const { classes } = this.props;
    const { value ,checkinFinal} = this.state;
    console.log('checkinFinal', checkinFinal);
    return (
      <div className={classes.root}>
        <AppBar position="static">
        
        
          <Tabs value={value} onChange={this.handleChange}>
            <Tab label="Search Members" />
            <Tab label="Add Check-In"  /> 
                        
          </Tabs>
                     
        </AppBar>
        {value === 0 && <TabContainer><Search/></TabContainer>}
        {value === 1 && <TabContainer><SubmitCheckin/></TabContainer>}       
      </div>
    );
  }
}

SimpleTabs.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleTabs);
