import { useMediaQuery, useTheme } from '@mui/material';

import { useIsMobile } from './useIsMobile';

jest.mock('@mui/material', () => ({
  useTheme: jest.fn(),
  useMediaQuery: jest.fn(),
}));

describe('useIsMobile', () => {
  test('should return true if theme breakpoints is down md', () => {
    (useTheme as jest.Mock).mockReturnValue({
      breakpoints: { down: jest.fn(() => 'md') },
    });
    (useMediaQuery as jest.Mock).mockReturnValue(true);

    expect(useIsMobile()).toBe(true);
  });

  test('should return false if theme breakpoints is above md', () => {
    (useTheme as jest.Mock).mockReturnValue({
      breakpoints: { down: jest.fn(() => 'md') },
    });
    (useMediaQuery as jest.Mock).mockReturnValue(false);

    expect(useIsMobile()).toBe(false);
  });
});
