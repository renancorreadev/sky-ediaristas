import { fireEvent, render, screen } from '@testing-library/react';

import { mockRouter } from '@/tests/test.utils';

import { HeaderMobile } from './index';

describe('HeaderMobile component', () => {
  beforeEach(() => {
    mockRouter;
  });

  test('should open drawer when clicking on the menu button', () => {
    render(<HeaderMobile />);

    const menuButton = screen.getByLabelText('open drawer');
    fireEvent.click(menuButton);

    const loginLink = screen.getByText('Login');
    const diaristSignupLink = screen.getByText('Seja um(a) Diarista');

    expect(loginLink).toBeInTheDocument();
    expect(diaristSignupLink).toBeInTheDocument();
  });
});
