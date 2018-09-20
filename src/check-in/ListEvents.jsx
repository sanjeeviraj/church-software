import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
//import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
});

let id = 0;
function createData(name, calories, fat, carbs, protein) {
  id += 1;
  return { id, name, calories, fat, carbs, protein };
}

const data = [
  createData('21-July-2018', '9:00 AM', 'Texas Event'),
  createData('22-July-2018', '10:00 AM','San Antonio Event'),
  createData('23-July-2018', '11:00 AM', 'Texas Event' ),
  createData('24-July-2018', '12:00 AM', 'Newyork Event' ),
  createData('25-July-2018', '13:00 AM', 'Texas Conference' ),
];

class ListEvents extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      checkindialog : false
    }
  }
  onRowSelect = () =>{
    this.setState({
      checkindialog : true
    })
  }
render() {
  const { classes } = this.props;
  return (
    <Paper className={classes.root}>    
      <Table className={classes.table}>      
        <TableBody>
          {data.map(n => {
            return (
              <TableRow key={n.id} hover={true} onClick={this.props.onSelectEvent}>
                <TableCell component="th" scope="row">
                  {n.name}
                </TableCell>
                <TableCell numeric>{n.calories}</TableCell>
                <TableCell numeric>{n.fat}</TableCell>
                <TableCell numeric>{n.carbs}</TableCell>                
              </TableRow>
            );
          })}
        </TableBody>
      </Table>      
    </Paper>
  );
}
  
}

ListEvents.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ListEvents);
