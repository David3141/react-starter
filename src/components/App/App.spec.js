import React from 'react'
import App from './App'
import { render } from 'react-testing-library'

describe('<App />', () => {
  it('renders correctly', () => {
    const { container } = render(<App />)
    expect(container).toMatchSnapshot()
  })
})
