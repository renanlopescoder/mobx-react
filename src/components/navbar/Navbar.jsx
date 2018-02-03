import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, IconButton, Navigation, FontIcon, IconMenu, MenuItem, MenuDivider, Avatar } from 'react-toolbox';

import style from './style.css';
import color from '../../shared/colors.css';

class Navbar extends React.Component {
  render() {
    return (
      <AppBar theme={style}>
        <IconMenu icon='menu' position='topLeft' menuRipple>
          <Link to='/' className={style.link}>
            <MenuItem value='home' icon='home' caption='Home' />
          </Link>
          <Link to='/projects/new' className={style.link}>
            <MenuItem value='register' icon='create' caption='Register' />
          </Link>
          <Link to='/projects' className={style.link}>
            <MenuItem value='projects' icon='format_align_left' caption='Projects' />
          </Link>
          <Link to='/' className={style.link}>
            <MenuItem value='configuration' icon='settings' caption='Configuration' />
          </Link>
          <MenuDivider />
          <Link to='/logout' className={style.link}>
            <MenuItem value='logout' icon='reply' caption='Logout' />
          </Link>
        </IconMenu>
        <h1>
          MobX React
        </h1>
        <Navigation type="horizontal">
          <Avatar className={[style.userInfo, color.primary]} icon="person" title='Renan Lopes'/>
        </Navigation>
      </AppBar>
    )
  };
};

export default Navbar;
