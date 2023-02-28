/* eslint-disable testing-library/prefer-screen-queries */
// Header.test.tsx

import { render } from '@testing-library/react';
import React from 'react';

import { useIsMobile } from '@/hooks/useIsMobile';
import { mockRouter } from '@/tests/mocks';

import Header from './Header';

// Mock do useIsMobile
jest.mock('@/hooks/useIsMobile', () => ({
  useIsMobile: jest.fn(),
}));

describe('Header', () => {
  beforeEach(() => {
    mockRouter;
  });

  it('should render HeaderDesktop when is not mobile', async () => {
    // Simula que não é um dispositivo móvel
    (useIsMobile as jest.Mock).mockReturnValue(false);

    const { findByRole } = render(<Header />);
    const header = await findByRole('header-app-bar');

    expect(header).toBeInTheDocument();
  });

  it('should render HeaderMobile when is mobile', async () => {
    // Simula que é um dispositivo móvel
    (useIsMobile as jest.Mock).mockReturnValue(true);

    const { findByRole } = render(<Header />);
    const header = await findByRole('header-app-bar-mobile');

    expect(header).toBeInTheDocument();
  });
});
