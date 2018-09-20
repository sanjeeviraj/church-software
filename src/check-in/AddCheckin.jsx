import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
//import Button from '@material-ui/core/Button';
import AddCheckinTab from './AddCheckinTab';

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 10;
 // const left = 20;

  return {
    /*top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,*/
    top: `${top}%`,
   // left: `${left}%`,
    margin:'auto'
  };
}

const styles = theme => ({
  paper: {
    position: 'relative',
    width: '60%',    
    backgroundColor: 'white',
    //boxShadow: theme.shadows[5],
    //padding: theme.spacing.unit * 4,
  },
  button: {
    margin: theme.spacing.unit,
  },
  closeImage:{cursor:'pointer', float:'right', marginTop: '5px', width: '20px'}
});

class SimpleModal extends React.Component {
  
  constructor(props) {
      super(props);
  }

  render() {
    const { classes } = this.props;

    return (
      <div> 
        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={this.props.openCheckinModal} 
          style={{alignItems:'center',justifyContent:'center'}}         
        >        
          <div style={getModalStyle()} className={classes.paper}>
          
          <AddCheckinTab/>
          </div>
        </Modal>
      </div>
    );
  }
}

SimpleModal.propTypes = {
  classes: PropTypes.object.isRequired,
};

// We need an intermediary variable for handling the recursive nesting.
const SimpleModalWrapped = withStyles(styles)(SimpleModal);

export default SimpleModalWrapped;