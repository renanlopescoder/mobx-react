import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Navigation, IconMenu, MenuItem, MenuDivider, Avatar } from 'react-toolbox';

import { SessionService } from '../../services';
import color from '../../shared/colors.css';
import style from './style.css';

class Navbar extends React.Component {
  render() {
    return (
      <AppBar theme={style}>
        <IconMenu icon='menu' position='topLeft' menuRipple className={style.menuIcon}>
          <Link to='/home' className={style.link}>
            <MenuItem value='home' icon='home' caption='Home' />
          </Link>
          <Link to='/projects' className={style.link}>
            <MenuItem value='projects' icon='format_align_left' caption='Projects' />
          </Link>
          <Link to='/users' className={style.link}>
            <MenuItem value='users' icon='people' caption='Users' />
          </Link>
          <Link to='/user/form' className={style.link}>
            <MenuItem value='configuration' icon='settings' caption='Configuration' />
          </Link>
          <MenuDivider />
          <Link to='/' className={style.link} onClick={() => SessionService.clear()}>
            <MenuItem value='logout' icon='reply' caption='Logout' />
          </Link>
        </IconMenu>
        <h1>
          MobX React
        </h1>
        <Navigation type="horizontal">
          <label className={style.usernameInfo}>{SessionService.get('username')}</label>
          <label className={style.nicknameInfo}><small>{SessionService.get('nickname')}</small></label>
          <Avatar className={[style.userPhoto, color.primary].join(' ')} icon="person" title={SessionService.get('username')} image={SessionService.get('photo')} />
        </Navigation>
      </AppBar>
    );
  };
};

export default Navbar;
