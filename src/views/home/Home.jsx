import React from 'react';
import { Grid, Col, Row } from 'react-flexbox-grid';
import { CardTitle, CardText, List, ListItem, ListSubHeader } from 'react-toolbox';

import { Card } from '../../components';
import { SessionService } from '../../services';

class Home extends React.Component {
  constructor(props) {
    super(props);
  };

  render() {
    return (
      <Grid fluid>
        <Row>
          <Col md={6}>
            <Card>
              <CardText>
                <List selectable ripple>
                  <ListSubHeader caption={`${SessionService.get('username')} welcome to MobX React App`} />
                    <ListItem
                      key={SessionService.get('_id')}
                      avatar={SessionService.get('photo')}
                      caption={SessionService.get('username')}
                      legend={`Nickname: ${SessionService.get('nickname')} | E-mail: ${SessionService.get('email')}`}
                      rightIcon='fingerprint'
                    />
                </List>
              </CardText>
            </Card>
          </Col>
        </Row>
      </Grid>
    );
  };
};

export default Home;
