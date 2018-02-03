import React from 'react'
import renderer from 'react-test-renderer'
import { MemoryRouter } from 'react-router-dom'

import SampleStore from '../../stores/SampleStore'
import SampleList from '../../views/sample/SampleList'

describe('view/<SampleList />', () => {
  const sampleStore = SampleStore.create()
  it('should render the question header', () => {
    const component = renderer.create(
      <MemoryRouter>
        <SampleList sampleStore={sampleStore} />
      </MemoryRouter>,
    )
    const json = component.toJSON()
    expect(json).toMatchSnapshot()
  })
})
