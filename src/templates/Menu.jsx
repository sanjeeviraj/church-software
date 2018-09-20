import React from 'react';
import './Common.css';
import Person from '@material-ui/icons/Person';
import FolderShared from '@material-ui/icons/FolderShared';
import CalendarToday from '@material-ui/icons/CalendarToday';
import Event from '@material-ui/icons/Event';
import AttachMoney from '@material-ui/icons/AttachMoney';
class Menu extends React.Component{
    render(){
        return(
            <nav className="icon-bar box-field">
  <a className="active" href="#"> <Person /></a> 
  <a href="#"> <FolderShared /></a> 
  <a href="#"> <CalendarToday /></a> 
  <a href="#"> <Event /></a>  
  <a href="#"> <AttachMoney /></a> 
</nav>
        );
    }
};

export default Menu;