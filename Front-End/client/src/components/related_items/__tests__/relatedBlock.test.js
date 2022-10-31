import React from 'react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
// import renderer from 'react';
import { render, screen, cleanup, waitFor } from '@testing-library/react';
import RelatedBlock from '../RelatedBlock.jsx';

describe('Jest Test Module Related Block', function () {
  const user = userEvent.setup();

  test('should render Container Div', () => {
    render(<RelatedBlock productId={37890} />);
    const RelatedContainer = screen.getByTestId('outerBlock');
    expect(RelatedContainer).toBeInTheDocument();
  });

})


