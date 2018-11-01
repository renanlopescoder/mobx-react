import React from 'react'
import { inject, observer } from 'mobx-react'
import { Row, Col, Grid } from 'react-flexbox-grid'
import {
  Input,
  CardTitle,
  CardText,
  Button,
  Snackbar,
  Avatar,
} from 'react-toolbox'

import color from '../../../shared/colors.css'
import style from './style.css'
import { Card, Loader } from '../../atoms'
import { SessionService } from '../../../services'

@inject('userStore')
@observer
class UserForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      _id: SessionService.get('_id'),
      username: SessionService.get('username'),
      nickname: SessionService.get('nickname'),
      email: SessionService.get('email'),
      photo: SessionService.get('photo'),
      password: '',
      activeSnackbar: false,
    }
  }

  handleState = (field, value) => {
    const newState = this.state
    newState[field] = value
    this.setState(newState)
  }

  handleSnackbarClick = () => {
    this.setState({ activeSnackbar: false })
  }

  validForm() {
    const { state } = this
    return (
      state._id !== '' &&
      state.username !== '' &&
      state.nickname !== '' &&
      state.email !== '' &&
      state.password !== '' &&
      state.photo !== ''
    )
  }

  validateForm = () => {
    const valid = this.validForm()
    this.setState({ activeSnackbar: !valid })
    return valid
  }

  update() {
    if (this.validateForm()) {
      this.props.userStore.updateUser(this.state).then(
        updated => this.props.history.push('/users')
      )
    }
  }

  snackbarJSX = () => (
    <Snackbar
      label='All fields required'
      onClick={this.handleSnackbarClick}
      active={this.state.activeSnackbar}
      type='warning'
      action='Close'
    />
  )

  inputJSX = (value, label, type, state) => (
    <Input
      value={value}
      label={label}
      type={type}
      onChange={change => this.handleState(state, change)}
      required
    />
  )

  render() {
    return (
      <Grid fluid className={style.userCard}>
        <Row>
          <Col mdOffset={3} md={6}>
            <Card>
            <CardTitle title='Profile'  subtitle={this.state.username} />
              <CardText>
                <Row>
                  <Col xsOffset={4} mdOffset={4} md={2} xs={2}>
                    <Avatar className={style.userImage} image={this.state.photo} />
                  </Col>
                </Row>
                <Loader loading={this.props.userStore.loading}>
                  <Row>
                    <Col mdOffset={1} md={5}>
                      {this.inputJSX(this.state.username, 'Name', 'text', 'username')}
                    </Col>
                    <Col md={5}>
                      {this.inputJSX(this.state.nickname, 'Nickname', 'text', 'nickname')}
                    </Col>
                  </Row>
                  <Row>
                    <Col mdOffset={1} md={5}>
                      {this.inputJSX(this.state.email, 'Email', 'text', 'email')}
                    </Col>
                    <Col md={5}>
                      {this.inputJSX(this.state.photo, 'Photo URL', 'text', 'photo')}
                    </Col>
                  </Row>
                  <Row>
                    <Col mdOffset={1} md={5}>
                      {this.inputJSX(this.state.password, 'Password', 'password', 'password')}
                    </Col>
                  </Row>
                  <Row>
                    <Col xs={12} mdOffset={9}>
                      <Button className={color.primary} primary raised icon='save' onClick={() => this.update()} />
                    </Col>
                  </Row>
                </Loader>
              </CardText>
          </Card>
          </Col>
        </Row>
        {this.snackbarJSX()}
      </Grid>
    )
  }
}

export default UserForm
