import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
//import DialogContent from '@material-ui/core/DialogContent';
//import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import withMobileDialog from '@material-ui/core/withMobileDialog';
//import AttachMoney from '@material-ui/icons/AttachMoney';
class ResponsiveDialog extends React.Component {
 /* state = {
    open: false,
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };*/
  constructor(props){
    super(props);    
  }
  render() {
    const { fullScreen } = this.props;

    return (
      <div>
       
        <Dialog
          fullScreen={fullScreen}
          open={this.props.openDialog}
         
          aria-labelledby="responsive-dialog-title"
        >
          <DialogTitle id="responsive-dialog-title">{"Choose the below action for selected event"}</DialogTitle>
         
          <DialogActions>
            <Button autoFocus variant="contained" color="primary" onClick={()=>this.props.onSelectDialog('checkin')}>
              Check In
            </Button>
            <Button variant="contained" color="secondary" >
              Check Out
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

ResponsiveDialog.propTypes = {
  fullScreen: PropTypes.bool.isRequired,
};

export default withMobileDialog()(ResponsiveDialog);
