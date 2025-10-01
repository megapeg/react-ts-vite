import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('renders the app with environment info', () => {
    render(<App />);

    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
});
