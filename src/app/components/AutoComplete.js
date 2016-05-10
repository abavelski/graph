import React from 'react'
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';


const styles = {
  root: {
    left:200,
    display: 'inline-block',
    position: 'relative',
    width: 256,
  }
}

const txtField = <TextField autoComplete="off" hintText="Search" multiLine={false}/>;

const AutoComplete = () => (
  <div style={styles.root} >
    {txtField}
      <Paper>
      <Menu desktop={true} width={256}>
        <MenuItem value="bla" primaryText="Bla"/>
        <MenuItem value="bla1" primaryText="Bla1"/>
        <MenuItem value="bla2" primaryText="Bl2"/>
        <MenuItem value="bla3" primaryText="Bla3"/>
      </Menu>
    </Paper>
  </div>);

export default AutoComplete;
