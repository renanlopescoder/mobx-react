import React from 'react';
import { inject, observer } from 'mobx-react';
import { Card, CardTitle, CardText, Input, Button, Snackbar, Tabs, Tab } from 'react-toolbox';
import { Grid, Row, Col } from 'react-flexbox-grid';

import { Loader } from '../../components'
import style from './style.css';

@inject('userStore')
@observer
class LoginView extends React.Component {
  state = {
    email:'',
    password: '',
    username: '',
    nickname: '',
    photo: '',
    tabIndex: 0,
    snackbarActive: false,
    snackbarMessage: '',
  };

  signin() {
    this.props.userStore.signin(this.state.email, this.state.password).then(
      success => this.props.history.push('/home')
    ).catch((error) => {
      this.setState({ snackbarActive: true, snackbarMessage: 'Login or password mismatch' });
    });
  };

  signup() {
    this.props.userStore.signup(this.state).then(
      success => this.setState({tabIndex: 0})
    ).catch((error) => {
      this.setState({ snackbarActive: true, snackbarMessage: 'Error to create your user' });
    });
  };

  handleState(field, value) {
    const newState = this.state;
    newState[field] = value;
    this.setState(newState);
  };

  closeSnackbar = () => {
    this.setState({ snackbarActive: false });
  };

  keyPress = (e) => {
    if (e.key == "Enter")
      this.signin();
  };

  inputJSX = (attribute, label, icon) => (
    <Row>
      <Col xs={12} md={12}>
        <Input
          value={this.state[attribute]}
          type={attribute}
          label={label}
          onKeyPress={key => this.keyPress(key)}
          onChange={value => this.handleState(attribute, value)}
          icon={icon}
          autoComplete="new-password"
        />
      </Col>
    </Row>
  );

  handleTabChange = (index) => {
    this.setState({tabIndex: index});
  };

  render() {
    return (
      <Grid fluid className={style.background}>
        <Row>
          <Col xs={12} md={4} mdOffset={4}>
            <Card style={{marginTop: 100}}>
              <Tabs index={this.state.tabIndex} onChange={this.handleTabChange} fixed>
                <Tab label='Signin'>
                  <CardText>
                    <Loader loading={this.props.userStore.loading}>
                      {this.inputJSX('email', 'Email', 'account_circle')}
                      {this.inputJSX('password', 'Password', 'lock_outline')}
                      <Row>
                        <Col mdOffset={9}>
                          <Button raised primary label="Sign In" onClick={() => this.signin()} />
                        </Col>
                      </Row>
                    </Loader>
                  </CardText>
                </Tab>
                <Tab label='Signup'>
                <CardText>
                  <Loader loading={this.props.userStore.loading}>
                    {this.inputJSX('username', 'Name', 'person')}
                    {this.inputJSX('nickname', 'Nickname', 'contacts')}
                    {this.inputJSX('photo', 'Photo URL', 'insert_photo')}
                    {this.inputJSX('email', 'Email', 'account_circle')}
                    {this.inputJSX('password', 'Password', 'lock_outline')}
                    <Row>
                      <Col mdOffset={9}>
                        <Button raised primary label="Sign Up" onClick={() => this.signup()} />
                      </Col>
                    </Row>
                  </Loader>
                </CardText>
                </Tab>
              </Tabs>
            </Card>
          </Col>
        </Row>
        <Snackbar action='Close' label={this.state.snackbarMessage} onClick={this.closeSnackbar} active={this.state.snackbarActive} type='warning' />
      </Grid>
    );
  };
};

export default LoginView;
