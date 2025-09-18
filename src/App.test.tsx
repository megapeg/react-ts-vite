import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('renders the app with initial count', () => {
    render(<App />);

    expect(screen.getByText(/count is 1/i)).toBeInTheDocument();
  });

  it('increments count when button is clicked', () => {
    render(<App />);

    const button = screen.getByRole('button', { name: /count is 0/i });
    fireEvent.click(button);

    expect(screen.getByText(/count is 1/i)).toBeInTheDocument();
  });
});
