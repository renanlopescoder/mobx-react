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

import color from '../../shared/colors.css'
import { Card } from '../../components'

@inject('projectStore')
@observer
class ProjectForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      _id: null,
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

  componentDidMount() {
    if (this.props.match.params.id) {
      this.initialState(this.props.match.params.id)
    }
  }

  initialState = _id => {
    const project = this.props.projectStore.projects.get(_id)
    this.setState({
      _id: project._id,
      author: project.author,
      demoLink: project.demoLink,
      description: project.description,
      authorLink: project.authorLink,
      githubLink: project.githubLink,
      project: project.project,
      status: project.status,
      technologies: project.technologies,
    })
  }

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
      if (this.props.match.params.id) {
        this.props.projectStore.updateProject(this.state).then(
          updated => this.props.history.push('/projects')
        )
      } else {
        this.props.projectStore.createProject(this.state).then(
          created => this.props.history.push('/projects')
        )
      }
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
        <Row>
          <Col mdOffset={3} md={6}>
            <Card>
            <CardTitle title='Project' />
            <CardText>
              <Row>
                <Col mdOffset={1} md={5}>
                  {this.inputJSX(this.state.project, 'Name', 'text', 'project')}
                </Col>
                <Col md={5}>
                  {this.inputJSX(this.state.description, 'Description', 'text', 'description')}
                </Col>
              </Row>
              <Row>
                <Col mdOffset={1} md={5}>
                  {this.inputJSX(this.state.author, 'Author', 'text', 'author')}
                </Col>
                <Col md={5}>
                  {this.inputJSX(this.state.technologies, 'Technologies', 'text', 'technologies')}
                </Col>
              </Row>
              <Row>
                <Col mdOffset={1} md={5}>
                  {this.inputJSX(this.state.status, 'Status', 'text', 'status')}
                </Col>
                <Col md={5}>
                  {this.inputJSX(this.state.demoLink, 'DEMO Link', 'text', 'demoLink')}
                </Col>
              </Row>
              <Row>
                <Col mdOffset={1} md={5}>
                  {this.inputJSX(this.state.githubLink, 'GutHub Link', 'text', 'githubLink')}
                </Col>
                <Col md={5}>
                  {this.inputJSX(this.state.authorLink, 'Author Profile', 'text', 'authorLink')}
                </Col>
              </Row>
              <Row>
                <Col xs={12} mdOffset={9}>
                  <Button className={color.primary} primary raised icon='save' onClick={() => this.register()} />
                </Col>
              </Row>
            </CardText>
          </Card>
          </Col>
        </Row>
        {this.snackbarJSX()}
      </Grid>
    )
  }
}

export default ProjectForm;
