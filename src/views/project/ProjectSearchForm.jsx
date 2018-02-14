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
  IconButton,
} from 'react-toolbox'
import { Link } from 'react-router-dom'

import color from '../../shared/colors.css'

@inject('projectStore')
@observer
class ProjectSearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      _id: '',
      author: '',
      demoLink: '',
      description: '',
      authorLink: '',
      githubLink: '',
      project: '',
      status: '',
      technologies: '',
    };
  };

  clearSearch = () => {
    this.setState({
      _id: '',
      author: '',
      demoLink: '',
      description: '',
      authorLink: '',
      githubLink: '',
      project: '',
      status: '',
      technologies: '',
    })
    this.props.search({})
  }

  handleState = (field, value) => {
    const newState = this.state;
    newState[field] = value;
    this.setState(newState);
  };

  inputJSX = (value, label, type, state) => (
    <Input
      value={value}
      label={label}
      type={type}
      onChange={change => this.handleState(state, change)}
    />
  );

  render() {
    return (
      <Grid fluid style={{ marginBottom: 20}}>
        <Row>
          <Col md={2}>
            <Input
              value={this.state._id}
              label='ID'
              onChange={change => this.handleState('_id', change)}
              icon ='search'
            />
          </Col>
          <Col md={2}>
            {this.inputJSX(this.state.project, 'Name', 'text', 'project')}
          </Col>
          <Col md={2}>
            {this.inputJSX(this.state.description, 'Description', 'text', 'description')}
          </Col>
          <Col md={2}>
            {this.inputJSX(this.state.author, 'Author', 'text', 'author')}
          </Col>
          <Col md={2}>
            {this.inputJSX(this.state.technologies, 'Technologies', 'text', 'technologies')}
          </Col>
          <Col md={2}>
            {this.inputJSX(this.state.status, 'Status', 'text', 'status')}
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={1}>
            <Button warning raised icon='highlight_off' label='Clear' onClick={() => this.clearSearch()} />
          </Col>
          <Col xs={12} md={1}>
            <Button className={color.primary} raised icon='search' label='Search' onClick={() => this.props.search(this.state)} />
          </Col>
        </Row>
      </Grid>
    );
  };
};

export default ProjectSearchForm;
