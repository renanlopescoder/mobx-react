import React from 'react';
import { inject, observer } from 'mobx-react';
import { Link } from 'react-router-dom';
import { Grid } from 'react-flexbox-grid';
import { CardTitle, CardText, Table, TableHead, TableCell, TableRow, IconButton } from 'react-toolbox';

import ProjectSearchForm from './ProjectSearchForm';
import { Loader, Card, AddButton } from '../../components';
import color from '../../shared/colors.css';

@inject('projectStore')
@observer
class ProjectList extends React.Component {
  constructor(props) {
    super(props);
    props.projectStore.fetchProjectList();
  };

  getTableHead = () => (
    <TableHead>
      <TableCell>ID</TableCell>
      <TableCell>Name</TableCell>
      <TableCell>Description</TableCell>
      <TableCell>GitHub Link</TableCell>
      <TableCell>Author</TableCell>
      <TableCell>Action</TableCell>
    </TableHead>
  );

  getTableBody = project => (
    <TableRow key={project._id}>
      <TableCell>{project._id}</TableCell>
      <TableCell>{project.project}</TableCell>
      <TableCell>{project.description}</TableCell>
      <TableCell>{project.githubLink}</TableCell>
      <TableCell>{project.author}</TableCell>
      <TableCell>
        <Link to={`/project/form/${project._id}`}>
          <IconButton className={color.secondaryText} icon='edit'  />
        </Link>
        <IconButton style={{color: '#9A338E'}} icon='delete' onClick={() => this.props.projectStore.deleteProject(project._id)}  />
      </TableCell>
    </TableRow>
  );

  render() {
    return (
      <Grid fluid>
        <Card>
          <CardTitle title='Project List' />
          <CardText>
            <Loader loading={this.props.projectStore.loading}>
              <Table selectable={false}>
                {this.getTableHead()}
                {this.props.projectStore.projects.values().map(project => (
                  this.getTableBody(project)
                ))}
              </Table>
              <AddButton to='/project/form' />
            </Loader>
          </CardText>
        </Card>
      </Grid>
    );
  };
};

export default ProjectList;
