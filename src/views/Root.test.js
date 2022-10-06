import React from 'react';
import { render, screen, fireEvent, waitFor } from 'test-utils';
import '@testing-library/jest-dom';
import Root from './Root';

describe('Root component', () => {
  it('Renders the rooot component as unauthenticated user', () => {
    render(<Root />);
    screen.getByLabelText('login');
  });

  it('Displays error message when wrong credentials are passed', async () => {
    render(<Root />);
    const login = screen.getByLabelText('login');
    const password = screen.getByLabelText('password');

    fireEvent.change(login, { target: { value: 'Elo' } });
    fireEvent.change(password, { target: { value: 'Bombelo' } });

    fireEvent.click(screen.getByText('Sign in'));

    await waitFor(() => screen.getByText(/Oops/));
  });

  it('Displays authenticated application when correct credentials are passed', async () => {
    render(<Root />);
    const login = screen.getByLabelText('login');
    const password = screen.getByLabelText('password');

    fireEvent.change(login, { target: { value: 'teacher@studybuddy.com' } });
    fireEvent.change(password, { target: { value: 'Test123' } });

    fireEvent.click(screen.getByText('Sign in'));

    await waitFor(() => screen.getByText(/Roy/));
  });
});
