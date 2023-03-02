import { render, screen } from '@testing-library/react';
import React from 'react';

import { useIsMobile } from '@/data/hooks/useIsMobile';
import { mockRouter } from '@/tests/test.utils';

import Header from './index';

// Mock do useIsMobile
jest.mock('../../../../data/hooks/useIsMobile', () => ({
  useIsMobile: jest.fn(),
}));

describe('Header', () => {
  beforeEach(() => {
    mockRouter;
  });

  it('should render HeaderDesktop when is not mobile', async () => {
    // Simula que não é um dispositivo móvel
    (useIsMobile as jest.Mock).mockReturnValue(false);

    render(<Header />);

    const header = screen.getByRole('header-app-bar');

    expect(header).toBeInTheDocument();
  });

  it('should render HeaderMobile when is mobile', async () => {
    // Simula que é um dispositivo móvel
    (useIsMobile as jest.Mock).mockReturnValue(true);

    render(<Header />);
    const header = screen.getByRole('header-app-bar-mobile');

    expect(header).toBeInTheDocument();
  });
});
