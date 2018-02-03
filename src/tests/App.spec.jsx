import React from 'react'
import { shallow } from 'enzyme'
import App from '../main/App'

it('renders without crashing', () => {
  shallow(<App />)
})
