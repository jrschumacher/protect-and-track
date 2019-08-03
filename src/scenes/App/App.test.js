import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import { fireEvent } from '@testing-library/react';

describe('App', () => {
  test('renders loader if isLoading set as true', () => {
    const { getByText } = render(
      <App
        appIdBundle={false}
        setAppIdBundle={() => {}}
        isLoading={true}
        setIsLoading={() => {}}
        continueAnyway
      />,
    );
    expect(getByText('Protect & Track Demo')).toBeInTheDocument();
  });

  test('should trigger setContinueAnyway on button click', () => {
    const spy = jest.fn();
    const { getByText } = render(
      <App
        appIdBundle={false}
        setAppIdBundle={() => {}}
        isLoading={true}
        setIsLoading={() => {}}
        setContinueAnyway={spy}
      />,
    );
    fireEvent.click(getByText('Continue anyway'));
    expect(spy).toHaveBeenCalledTimes(1);
  });
});
