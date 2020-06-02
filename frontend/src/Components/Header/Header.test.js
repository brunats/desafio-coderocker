import React from 'react'
import { render } from '@testing-library/react'

import Header from './Header'

test('renders Rockr Blog name', () => {
  const { getByText } = render(<Header />)
  const nameBlog = getByText("Rockr Blog")
  expect(nameBlog).toBeInTheDocument()
})

test('renders button Posts', () => {
  const { getByText } = render(<Header />)
  const posts = getByText("Posts")
  expect(posts).toBeInTheDocument()
})

test('renders button Contact', () => {
  const { getByText } = render(<Header />)
  const contact = getByText("Contact")
  expect(contact).toBeInTheDocument()
})
