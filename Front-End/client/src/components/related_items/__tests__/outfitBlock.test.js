import React from 'react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
// import renderer from 'react';
import { render, screen, cleanup, waitFor } from '@testing-library/react';
import OutfitBlock from '../OutfitBlock.jsx';

describe('Jest Test Module Outfit Block', function () {
  const user = userEvent.setup();

  test('should render Container Div', () => {
    render(<OutfitBlock />);
    const OutfitBlockContainer = screen.getByTestId('outfitOuter');
    expect(OutfitBlockContainer).toBeInTheDocument();
  });

})