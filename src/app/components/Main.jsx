import React from 'react';
import MainMenu from './menu/MainMenu';
import ModalRoot from './modals/ModalRoot';

const Main = ({children}) =>  (
      <div>
        <MainMenu/>
        <section className="content">
            {children}
        </section>
        <ModalRoot/>
      </div>);

export default Main;
