import React from 'react';

import AutoComplete from '../AutoComplete';
import MenuItem from 'material-ui/MenuItem';


import styles from './styles';


const MainMenu = () => (
    <header>
        <div style={styles.div}>
            <AutoComplete/>

          </div>
    </header>);

export default MainMenu;
