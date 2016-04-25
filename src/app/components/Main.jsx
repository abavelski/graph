import React from 'react';
import MainMenu from './menu/MainMenu';

const Main = ({children}) =>  (
      <div>
        <MainMenu/>
        <section className="content">
            {children}
        </section>
      </div>);

export default Main;
