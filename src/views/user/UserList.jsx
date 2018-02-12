import React from 'react';
import { inject, observer } from 'mobx-react';
import { Grid } from 'react-flexbox-grid';
import { CardTitle, CardText, List, ListItem, ListSubHeader } from 'react-toolbox';

import { Loader, Card } from '../../components';

@inject('userStore')
@observer
class UserList extends React.Component {
  constructor(props) {
    super(props);
    props.userStore.fetchUserList();
  };

  render() {
    return (
      <Grid fluid>
        <Card>
          <CardText>
            <Loader loading={this.props.userStore.loading}>
              <List selectable ripple>
                <ListSubHeader caption='Users' />
                {this.props.userStore.users.values().map(user => (
                  <ListItem
                    key={user._id}
                    avatar={user.photo}
                    caption={user.username}
                    legend={`Nickname: ${user.nickname} | E-mail: ${user.email}`}
                    rightIcon='fingerprint'
                  />
                ))}
              </List>
            </Loader>
          </CardText>
        </Card>
      </Grid>
    );
  };
};

export default UserList;
