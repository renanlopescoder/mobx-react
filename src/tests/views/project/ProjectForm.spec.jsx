import React from 'react'
import renderer from 'react-test-renderer'
import { MemoryRouter } from 'react-router-dom'

import ProjectStore from '../../../stores/ProjectStore'
import ProjectForm from '../../../views/project/ProjectForm'

describe('view/<ProjectForm />', () => {
  const projectStore = ProjectStore.create()
  it('should render the question header', () => {
    const component = renderer.create(
      <MemoryRouter>
        <ProjectForm projectStore={projectStore} />
      </MemoryRouter>,
    )
    const json = component.toJSON()
    expect(json).toMatchSnapshot()
  })
})
