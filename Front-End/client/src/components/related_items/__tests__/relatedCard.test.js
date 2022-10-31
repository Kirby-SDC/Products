import React from 'react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
// import renderer from 'react';
import { render, screen, cleanup, waitFor } from '@testing-library/react';
import RelatedCard from '../RelatedCard.jsx';

describe('Jest Test Module Related Items', function () {
  const user = userEvent.setup();

  test('should render cards on screen', () => {
    const image = "https://images.unsplash.com/photo-1532244769164-ff64ddeefa45?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80";
    render(<RelatedCard productImage={image} />);
    const cardElement = screen.getByTestId('cardOne');
    expect(cardElement).toBeInTheDocument();
  });

})


