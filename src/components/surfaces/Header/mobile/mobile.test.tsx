/* eslint-disable testing-library/prefer-screen-queries */
import { fireEvent, render } from '@testing-library/react';

import { mockRouter } from '@/tests/mocks';

import { HeaderMobile } from './index';

describe('HeaderMobile component', () => {
  beforeEach(() => {
    mockRouter;
  });

  test('should open drawer when clicking on the menu button', () => {
    const { getByLabelText, getByText } = render(<HeaderMobile />);

    const menuButton = getByLabelText('open drawer');
    fireEvent.click(menuButton);

    const loginLink = getByText('Login');
    const diaristSignupLink = getByText('Seja um(a) Diarista');

    expect(loginLink).toBeInTheDocument();
    expect(diaristSignupLink).toBeInTheDocument();
  });
});
