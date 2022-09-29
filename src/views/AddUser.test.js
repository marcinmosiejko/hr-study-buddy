import React from 'react';
import { render } from 'test-utils';
import { screen, fireEvent } from '@testing-library/react';
import AddUser from './AddUser';
import Dashboard from './Dashboard';
import { renderWithProviders } from 'helpers/renderWithProviders';
import '@testing-library/jest-dom/extend-expect';

describe('AddUser', () => {
  it('Adds new user to the list', () => {
    // Render component
    render(
      <>
        {/* <AddUser /> */}
        <Dashboard />
      </>
    );

    //   // Fill input fields
    //   fireEvent.change(screen.getByTestId('Name'), {
    //     target: { value: 'Grażyna' },
    //   });
    //   fireEvent.change(screen.getByTestId('Attendance'), {
    //     target: { value: '55%' },
    //   });
    //   fireEvent.change(screen.getByTestId('Average'), {
    //     target: { value: '4.5' },
    //   });

    //   // Checking consent
    //   fireEvent.click(screen.getByTestId('Consent'));

    //   // Fire Add button to submit form
    //   fireEvent.click(screen.getByText('Add'));

    //   // Check if there's an element with content put into input, which means there's a rendered user with that name, which means we successfully collected input data and added user
    //   screen.getByText('Grażyna');
    // });

    // it('Prevents adding new user to the list if the consent is not checked', () => {
    //   // Render component
    //   renderWithProviders(
    //     <>
    //       <AddUser />
    //       <Dashboard />
    //     </>
    //   );

    //   // Fill input fields
    //   fireEvent.change(screen.getByTestId('Name'), {
    //     target: { value: 'Grażyna' },
    //   });
    //   fireEvent.change(screen.getByTestId('Attendance'), {
    //     target: { value: '55%' },
    //   });
    //   fireEvent.change(screen.getByTestId('Average'), {
    //     target: { value: '4.5' },
    //   });

    //   // Fire Add button to submit form
    //   fireEvent.click(screen.getByText('Add'));

    //   // Check if there IS NOT an element with content put into input, which means there's a rendered user with that name, which means we successfully collected input data and added user
    //   const newUser = screen.queryByText('Grażyna'); // returns matching element or a null
    //   expect(newUser).not.toBeInTheDocument();
  });
});
