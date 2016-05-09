import React from 'react';

import AutoComplete from '../AutoComplete';
import MenuItem from 'material-ui/MenuItem';


import styles from './styles';

const dataSource2 = [
  {text: 'Microsoft', value: 'msft'},
  {text: 'Google', value: 'googl'},
  {text: 'Apple', value: 'aapl'},
  {text: 'Amazon', value: 'amzn'},
]

const MainMenu = () => (
    <header>
        <div style={styles.div}>
            <AutoComplete style={{left:300}} open = {true} hintText="search" dataSource={dataSource2}/>

          </div>
    </header>);

export default MainMenu;
