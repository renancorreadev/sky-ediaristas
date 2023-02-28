import { render, screen } from '@testing-library/react';
import type { NextRouter } from 'next/router';
import { useRouter } from 'next/router';
import React from 'react';

import { HeaderDesktop } from './index';

jest.mock(
  'next/link',
  () =>
    ({ children }: { children: React.ReactNode }) =>
      children
);

jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}));

describe('HeaderDesktop component', () => {
  test('should render correctly', () => {
    const router = {
      basePath: '',
      pathname: '/',
      query: {},
      asPath: '',
    } as NextRouter;
    (useRouter as jest.Mock).mockReturnValue(router);

    render(<HeaderDesktop />);

    const logo = screen.getByAltText('logo e-diaristas');
    const button1 = screen.getByText('Seja um Diarista');
    const button2 = screen.getByText('Login');

    expect(logo).toBeInTheDocument();
    expect(button1).toBeInTheDocument();
    expect(button2).toBeInTheDocument();
  });
});
