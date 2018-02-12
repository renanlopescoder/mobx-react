import React from 'react';
import { inject, observer } from 'mobx-react';
import { Grid } from 'react-flexbox-grid';
import { CardTitle, CardText, Table, TableHead, TableCell, TableRow } from 'react-toolbox';

import { Loader, Card, AddButton } from '../../components';

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
    </TableHead>
  );

  getTableBody = project => (
    <TableRow key={project._id}>
      <TableCell>{project._id}</TableCell>
      <TableCell>{project.project}</TableCell>
      <TableCell>{project.description}</TableCell>
      <TableCell>{project.githubLink}</TableCell>
      <TableCell>{project.author}</TableCell>
    </TableRow>
  );

  render() {
    return (
      <Grid fluid>
        <Card>
          <CardTitle title={`Project List`} />
          <CardText>
            <Loader loading={this.props.projectStore.loading}>
              <Table selectable={false}>
                {this.getTableHead()}
                {this.props.projectStore.projects.values().map(project => (
                  this.getTableBody(project)
                ))}
              </Table>
              <AddButton to='/projects/new'/>
            </Loader>
          </CardText>
        </Card>
      </Grid>
    );
  };
};

export default ProjectList;
