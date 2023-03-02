/* eslint-disable jest/expect-expect */
import { render, screen } from '@testing-library/react';
import React from 'react';

import { Footer } from './index';

describe('Footer', () => {
  test('renders the component', () => {
    render(<Footer />);
  });

  test('renders the menu links', () => {
    render(<Footer />);
    expect(screen.getByText('Encontrar um(a) diarista')).toBeInTheDocument();
    expect(screen.getByText('Seja um Diarista')).toBeInTheDocument();
    expect(screen.getByText('Porque usar o E-diaristas?')).toBeInTheDocument();
    expect(screen.getByText('Principais Dúvidas')).toBeInTheDocument();
  });
});
