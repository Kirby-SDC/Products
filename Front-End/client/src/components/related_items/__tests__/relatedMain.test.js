import React from 'react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
// import renderer from 'react';
import { render, screen, cleanup, waitFor } from '@testing-library/react';
import Related from '../Related_items.jsx';

describe('Jest Test, Main Component', function () {
  const user = userEvent.setup();

  test('should render the main div container', () => {

    render(<Related />);
    const RelatedMain = screen.getByTestId('mainComponent');
    expect(RelatedMain).toBeInTheDocument();
  });

});
