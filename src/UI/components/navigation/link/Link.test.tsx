/* eslint-disable import/extensions */
import { render, screen } from '@testing-library/react';

import { mockRouter } from '@/tests/test.utils';

import Link from './Link';

describe('Test Link component', () => {
  beforeEach(() => {
    mockRouter;
  });

  test('should render a link with href and children', () => {
    render(<Link href="/home">Home</Link>);

    const link = screen.getByRole('link', { name: 'Home' });

    expect(link).toHaveAttribute('href', '/home');
    expect(link).toHaveTextContent('Home');
  });

  test('should render a button link with MuiLinkProps', () => {
    render(
      <Link href="/contact" mui={{ variant: 'contained' }}>
        Contact Us
      </Link>
    );

    const buttonLink = screen.getByRole('link', { name: 'Contact Us' });

    expect(buttonLink).toHaveAttribute('href', '/contact');
    expect(buttonLink).toHaveTextContent('Contact Us');
    expect(buttonLink).toHaveClass(
      'MuiTypography-root MuiTypography-contained MuiLink-root MuiLink-underlineAlways css-1ps4owl-MuiTypography-root-MuiLink-root '
    );
  });
});
