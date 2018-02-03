import React from 'react'
import renderer from 'react-test-renderer'
import { MemoryRouter } from 'react-router-dom'

import ProjectStore from '../../../stores/ProjectStore'
import ProjectList from '../../../views/project/ProjectList'

describe('view/<ProjectList />', () => {
  const projectStore = ProjectStore.create()
  it('should render the question header', () => {
    const component = renderer.create(
      <MemoryRouter>
        <ProjectList projectStore={projectStore} />
      </MemoryRouter>,
    )
    const json = component.toJSON()
    expect(json).toMatchSnapshot()
  })
})
