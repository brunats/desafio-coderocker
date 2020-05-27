import React from 'react';
import { render } from '@testing-library/react';

import Header from './header/Header';

test('renders Rockr Blog name', () => {
  const { getByText } = render(<Header />);
  const nameBlog = getByText("Rockr Blog");
  expect(nameBlog).toBeInTheDocument();
});
