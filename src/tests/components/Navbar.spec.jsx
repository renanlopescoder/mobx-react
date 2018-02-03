import React from 'react'
import renderer from 'react-test-renderer'
import { MemoryRouter } from 'react-router-dom'

import Navbar from '../../../src/components/navbar/Navbar'

describe('components/<Navbar />', () => {
  it('should render the app navbar', () => {
    const component = renderer.create(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>,
    )
    const json = component.toJSON()
    expect(json).toMatchSnapshot()
  })
})
