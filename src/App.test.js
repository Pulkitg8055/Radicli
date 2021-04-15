import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Todo-list', () => {
    render(<App />);
    const linkElement = screen.getByText(/Todo List/i);
    expect(linkElement).toBeInTheDocument();
});
