/* eslint-disable testing-library/prefer-screen-queries */
import { fireEvent, render } from '@testing-library/react';
import type { NextRouter } from 'next/router';
import { useRouter } from 'next/router';

import { HeaderMobile } from './index';

jest.mock(
  'next/link',
  () =>
    ({ children }: { children: React.ReactNode }) =>
      children
);

jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}));

describe('HeaderMobile component', () => {
  test('should open drawer when clicking on the menu button', () => {
    const router = {
      basePath: '',
      pathname: '/',
      query: {},
      asPath: '',
    } as NextRouter;
    (useRouter as jest.Mock).mockReturnValue(router);

    const { getByLabelText, getByText } = render(<HeaderMobile />);

    const menuButton = getByLabelText('open drawer');
    fireEvent.click(menuButton);

    const loginLink = getByText('Login');
    const diaristSignupLink = getByText('Seja um(a) Diarista');

    expect(loginLink).toBeInTheDocument();
    expect(diaristSignupLink).toBeInTheDocument();
  });
});
