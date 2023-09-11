import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SignUp from './SignUp'; 
import axios from 'axios';

// Mocking the axios post method
jest.mock('axios');

describe('<SignUp />', () => {
  it('should hash the password before sending', async () => {
    const password = 'myPassword';

    render(<SignUp />);

    userEvent.type(screen.getByTestId('username-input'), 'testuser');
    userEvent.type(screen.getByTestId('email-input'), 'test@test.com');
    userEvent.type(screen.getByTestId('password-input'), password);
    userEvent.type(screen.getByTestId('confirmPassword-input'), password);
    userEvent.click(screen.getByTestId('submit-button'));

    // Wait for Axios POST request to be called
    await waitFor(() => {
      expect(axios.post).toHaveBeenCalledTimes(1);
    }, { timeout: 5000 }); // Adjust the timeout value (in milliseconds) as needed
    

    // This assertion checks that the password was sent.
    expect(axios.post.mock.calls[0][1].password).toBe(password);
  });
});
