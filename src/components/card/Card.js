import React from 'react';
import { Card } from 'react-toolbox';

import style from './style.css';

export default props => (
  <Card className={style.card}>
    {props.children}
  </Card>
);
