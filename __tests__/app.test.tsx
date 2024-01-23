import React from 'react'
import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import  Home  from '../src/app/page'
import { mockAllIsIntersecting } from 'react-intersection-observer/test-utils';
 
describe('Page', () => {
  
  it('renders a heading', () => {
    mockAllIsIntersecting(true);
    render(<Home />)
  })
})