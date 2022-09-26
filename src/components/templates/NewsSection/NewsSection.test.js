import React from 'react';
import { screen } from '@testing-library/react';
import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';
import NewsSection, { query } from './NewsSection';
import { renderWithProviders } from 'helpers/renderWithProviders';

const mock = new MockAdapter(axios);

describe('News Section', () => {
  // Reset mock after each test so it doesn't use '/' path for every test
  afterEach(() => {
    mock.reset();
  });

  it('Displays error when the articles are not loaded correctly', async () => {
    // we query POST request which replies with error code 500
    mock.onPost(`https://graphql.datocms.com/`, { query }).reply(500);

    renderWithProviders(<NewsSection />);
    //findByText is used when we want to wait for async elements
    await screen.findByText(`Sorry, we couldn't load articles for you`);
  });

  it('Displays the articles', async () => {
    // we query POST request which replies with success code 200 and body (data)
    mock.onPost(`https://graphql.datocms.com/`, { query }).reply(200, {
      data: {
        allArticles: [
          { id: 1, title: 'Test', category: 'Test', content: 'Test' },
        ],
      },
    });

    renderWithProviders(<NewsSection />);
    //findByText is used when we want to wait for async elements
    await screen.findAllByText(/Test/);
  });
});
