import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders without crashing', () => {
  render(<App />);
});

test('Players is found', () => {
  const { getByText } = render(<App />);

  getByText(/players/i);
});

test('Brazil is found', () => {
  const { getByText } = render(<App />);

  getByText(/brazil/i);
});

test('Main header is found', () => {
  const { getByTestId } = render(<App />);

  getByTestId(/main-header/i);
});
