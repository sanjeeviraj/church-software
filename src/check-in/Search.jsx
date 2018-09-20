import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
//import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import TrendingFlatRounded from '@material-ui/icons/TrendingFlatRounded';
import Typography from '@material-ui/core/Typography';
import logo from '../logo.svg';
import Avatar from '@material-ui/core/Avatar';
//
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/AddRounded';
import SearchIcon from '@material-ui/icons/SearchRounded';
//
import IconButton from '@material-ui/core/IconButton';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    
    margin:'auto'
  },
  avatar: {
    margin: 2,
  },
  textField:{
    width:'60%',
    marginLeft:'10px',
    marginTop:'5px'
  },
  searchLabel:{
    marginLeft:'10px'
  },
  avatarColumn :{
    paddingRight:'0px',
    paddingLeft:'0px',    
  },
  avatarNameColumn :{    
    paddingLeft:'1px',
    marginLeft:'0px'
  }
});

let id = 0;
function createData(name, calories, fat, carbs, protein) {
  id += 1;
  return { id, name, calories, fat, carbs, protein };
}

const data = [
  createData('Meshak Vaithiyalingam', 'San Antonio', 6.0, 'Regular'),
  createData('John', 'San Antonio', 9.0, 'Regular'),
  createData('Ryan', 'San Antonio', 7.0, 'Regular'),
  createData('Gerry', 'San Antonio', 10.7, 'Regular'),  
];

function SimpleTable(props) {
  const { classes } = props;

  return (
         
    <div>
        <TextField
          id="search"
          label="Search for members to checkin for this event"
          type="search"
          className={classes.textField}
          margin="normal"
          fullwidth
          helperText=""
        /> 
        &nbsp;&nbsp;&nbsp;
        <IconButton >
          <SearchIcon color="primary" />
        </IconButton>
        <IconButton >
          <AddIcon color="secondary" />
        </IconButton>                
        
       
        
      <Table className={classes.table} padding='none'>
        <TableHead>
          <TableRow>
          <TableCell  className={classes.avatarColumn}></TableCell>
            <TableCell  className={classes.avatarNameColumn}>Name</TableCell>
            <TableCell className={classes.avatarColumn} >Location</TableCell>
            <TableCell className={classes.avatarColumn} >Time</TableCell>
            <TableCell className={classes.avatarColumn}>Member Type</TableCell>
            <TableCell className={classes.avatarColumn}>Action</TableCell>        
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map(n => {
            return (
              <TableRow key={n.id} hover={true}>
                <TableCell padding='none' component="td" scope="row" className={classes.avatarColumn}>
                <Avatar alt="logo" src={logo} className={classes.avatar} />
                </TableCell>
                <TableCell padding='none' className={classes.avatarNameColumn}>
               {n.name}
                </TableCell>
                <TableCell className={classes.avatarColumn} >{n.calories}</TableCell>
                <TableCell className={classes.avatarColumn}>{n.fat}</TableCell>
                <TableCell className={classes.avatarColumn}>{n.carbs}</TableCell>
                <TableCell className={classes.avatarColumn}>{n.protein}<TrendingFlatRounded color="action"/></TableCell>                
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
}

SimpleTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleTable);
