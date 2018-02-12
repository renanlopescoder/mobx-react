import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'react-toolbox'

import style from './style.css'
import color from '../../shared/colors.css'

export default props => (
  <Link to={props.to}>
    <Button className={[style.fixedButton, color.green].join(' ')} icon='add' floating />
  </Link>
)
