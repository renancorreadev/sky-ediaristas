/* eslint-disable testing-library/prefer-screen-queries */
// Header.test.tsx

import { render } from '@testing-library/react';
import type { NextRouter } from 'next/router';
import { useRouter } from 'next/router';
import React from 'react';

import { useIsMobile } from '@/hooks/useIsMobile';

import Header from './Header';

jest.mock(
  'next/link',
  () =>
    ({ children }: { children: React.ReactNode }) =>
      children
);

jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}));

// Mock do useIsMobile
jest.mock('@/hooks/useIsMobile', () => ({
  useIsMobile: jest.fn(),
}));

describe('Header', () => {
  it('should render HeaderDesktop when is not mobile', async () => {
    const router = {
      basePath: '',
      pathname: '/',
      query: {},
      asPath: '',
    } as NextRouter;
    (useRouter as jest.Mock).mockReturnValue(router);

    // Simula que não é um dispositivo móvel
    (useIsMobile as jest.Mock).mockReturnValue(false);

    const { findByRole } = render(<Header />);
    const header = await findByRole('header-app-bar');

    expect(header).toBeInTheDocument();
  });

  it('should render HeaderMobile when is mobile', async () => {
    const router = {
      basePath: '',
      pathname: '/',
      query: {},
      asPath: '',
    } as NextRouter;
    (useRouter as jest.Mock).mockReturnValue(router);

    // Simula que é um dispositivo móvel
    (useIsMobile as jest.Mock).mockReturnValue(true);

    const { findByRole } = render(<Header />);
    const header = await findByRole('header-app-bar-mobile');

    expect(header).toBeInTheDocument();
  });
});
