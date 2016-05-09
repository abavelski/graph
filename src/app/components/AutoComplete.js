import React from 'react'
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';


const styles = {
  root: {
    display: 'inline-block',
    position: 'relative',
    width: 256,
  },
  menu: {
    width: '100%',
  },
  list: {
    display: 'block',
    width: 256,
  },
  innerDiv: {
    overflow: 'hidden',
  },
}

const txtField = <TextField autoComplete="off" hintText="Search" multiLine={false}/>;

const AutoComplete = () => (
  <div style={styles.root} >
    {txtField}
      <Paper>
      <Menu
        autoWidth={false}
        disableAutoFocus={true}
        style={styles}
        listStyle={styles.list}>
        <MenuItem innerDivStyle={styles.innerDiv} value="bla" primaryText="Bla"/>
        <MenuItem innerDivStyle={styles.innerDiv} value="bla1" primaryText="Bla1"/>
        <MenuItem innerDivStyle={styles.innerDiv} value="bla2" primaryText="Bl2"/>
        <MenuItem innerDivStyle={styles.innerDiv} value="bla3" primaryText="Bla3"/>
      </Menu>
    </Paper>
  </div>);

export default AutoComplete;
