import { render, screen } from '@testing-library/react';
import React from 'react';

import { mockRouter } from '@/tests/test.utils';

import { HeaderDesktop } from './index';

describe('HeaderDesktop component', () => {
  beforeEach(() => {
    mockRouter;
  });

  test('should render correctly', () => {
    render(<HeaderDesktop />);

    const logo = screen.getByAltText('logo e-diaristas');
    const button1 = screen.getByText('Seja um Diarista');
    const button2 = screen.getByText('Login');

    expect(logo).toBeInTheDocument();
    expect(button1).toBeInTheDocument();
    expect(button2).toBeInTheDocument();
  });
});
