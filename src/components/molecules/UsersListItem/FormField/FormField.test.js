import React, { useState } from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

const InputWithButton = () => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => setInputValue(e.target.value);

  return (
    <>
      <input
        vlaue={inputValue}
        onChange={handleInputChange}
        name="name"
        id="name"
        placeholder="Enter your name"
      />
      <button disabled={!inputValue}>Submit</button>
    </>
  );
};

describe('Input With Button', () => {
  it('Renders the component', () => {
    render(<InputWithButton />);
    screen.getByText('Submit');
  });

  it('Properly handles value change and button', () => {
    render(<InputWithButton />);

    const button = screen.getByText('Submit');
    expect(button).toBeDisabled();

    const input = screen.getByPlaceholderText('Enter your name');
    fireEvent.change(input, { target: { value: 'Roman' } });
    expect(input).toHaveValue('Roman');

    expect(button).not.toBeDisabled();
  });
});
