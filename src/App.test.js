import { render, screen } from '@testing-library/react';
import App from './App';

test('renders portfolio headline', () => {
  render(<App />);
  expect(
    screen.getByRole('heading', {
      name: /olá! eu sou Marco Germano/i,
    })
  ).toBeInTheDocument();
});
