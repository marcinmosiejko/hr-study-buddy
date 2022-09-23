import React from 'react';
import { screen, fireEvent } from '@testing-library/react';
import AddUser from './AddUser';
import Dashboard from './Dashboard';
import { renderWithProviders } from 'helpers/renderWithProviders';
import '@testing-library/jest-dom/extend-expect';

describe('AddUser', () => {
  it('Renders the component', () => {
    // Render component
    renderWithProviders(
      <>
        <AddUser />
        <Dashboard />
      </>
    );

    // Fill input fields
    fireEvent.change(screen.getByTestId('Name'), {
      target: { value: 'Grażyna' },
    });
    fireEvent.change(screen.getByTestId('Attendance'), {
      target: { value: '55%' },
    });
    fireEvent.change(screen.getByTestId('Average'), {
      target: { value: '4.5' },
    });

    // Fire Add button to submit form
    fireEvent.click(screen.getByText('Add'));

    // Check if there's an element with content put into input, which means there's a rendered user with that name, which means we successfully collected input data and added user
    screen.getByText('Grażyna');
  });
});
