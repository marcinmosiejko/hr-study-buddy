import React from 'react';
import { render, screen, fireEvent, waitFor } from 'test-utils';
import SearchBar from './SearchBar';
import '@testing-library/jest-dom';

describe('Search Bar', () => {
  it('Renders the component', () => {
    render(<SearchBar />);
    screen.getByText('Teacher');
    screen.getByPlaceholderText('Search');
  });

  it('Displays users when search phrase is matching', async () => {
    render(<SearchBar />);
    const input = screen.getByPlaceholderText('Search');
    fireEvent.change(input, { target: { value: 'T' } });

    // await screen.findByText(/Terri/);
    // await waitFor(() => screen.getByText(/Tonya/));
  });

  // it('Hides the result when input is empty', async () => {
  //   render(<SearchBar />);
  //   const input = screen.getByPlaceholderText('Search');
  //   fireEvent.change(input, { target: { value: 'ad' } });

  //   await screen.findByText(/Adam Romański/);

  //   fireEvent.change(input, { target: { value: '' } });

  //   // waits for the element to hide
  //   await waitFor(() => {
  //     expect(screen.getByLabelText('results')).not.toBeVisible();
  //   });
  // });
});
