import React from 'react'
import { inject, observer } from 'mobx-react'
import { Row, Col, Grid } from 'react-flexbox-grid'
import {
  Input,
  CardTitle,
  CardText,
  DatePicker,
  Dropdown,
  Autocomplete,
  Button,
  Snackbar,
} from 'react-toolbox'
import { Link } from 'react-router-dom'

import { Card } from '../../components'

@inject('projectStore')
@observer
class ProjectForm extends React.Component {
  constructor(props) {
    super(props);
    this.state ={
      author: '',
      demoLink: '',
      description: '',
      authorLink: '',
      githubLink: '',
      project: '',
      status: '',
      technologies: '',
      activeSnackbar: false,
    };
  };

  handleState = (field, value) => {
    const newState = this.state;
    newState[field] = value;
    this.setState(newState);
  };

  handleSnackbarClick = () => {
    this.setState({ activeSnackbar: false });
  };


  validForm() {
    const { state } = this;
    return (
      state.author !== '' &&
      state.demoLink !== '' &&
      state.description !== '' &&
      state.authorLink !== '' &&
      state.githubLink !== '' &&
      state.project !== '' &&
      state.status !== '' &&
      state.technologies !== ''
    );
  };

  validateForm = () => {
    const valid = this.validForm();
    this.setState({ activeSnackbar: !valid });
    return valid;
  };

  register() {
    if (this.validateForm()) {
      this.props.projectStore.createProject(this.state).then(
        created => this.props.history.push('/projects')
      )
    }
  }

  snackbarJSX = () => (
    <Snackbar
      label='Todos os campos são obrigatórios'
      onClick={this.handleSnackbarClick}
      active={this.state.activeSnackbar}
      type='warning'
      action='Close'
    />
  );

  inputJSX = (value, label, type, state) => (
    <Input
      value={value}
      label={label}
      type={type}
      onChange={change => this.handleState(state, change)}
      required
    />
  );

  render() {
    return (
      <Grid fluid>
        <Card>
          <CardTitle title='Project' subtitle='New Project' />
          <CardText>
            <Row>
              <Col md={2}>
                {this.inputJSX(this.state.project, 'Name', 'text', 'project')}
              </Col>
              <Col md={4}>
                {this.inputJSX(this.state.description, 'Description', 'text', 'description')}
              </Col>
              <Col md={2}>
                {this.inputJSX(this.state.author, 'Author', 'text', 'author')}
              </Col>
              <Col md={4}>
                {this.inputJSX(this.state.technologies, 'Technologies', 'text', 'technologies')}
              </Col>
            </Row>
            <Row>
              <Col md={2}>
                {this.inputJSX(this.state.status, 'Status', 'text', 'status')}
              </Col>
              <Col md={4}>
                {this.inputJSX(this.state.demoLink, 'DEMO Link', 'text', 'demoLink')}
              </Col>
              <Col md={3}>
                {this.inputJSX(this.state.githubLink, 'GutHub Link', 'text', 'githubLink')}
              </Col>
              <Col md={3}>
                {this.inputJSX(this.state.authorLink, 'Author Profile', 'text', 'authorLink')}
              </Col>
            </Row>
            <Row>
              <Col mdOffset={5} xs={12} md={2}>
                <Button raised primary label='Cadastrar' onClick={() => this.register()} />
              </Col>
            </Row>
          </CardText>
          {this.snackbarJSX()}
        </Card>
      </Grid>
    )
  }
}

export default ProjectForm;
