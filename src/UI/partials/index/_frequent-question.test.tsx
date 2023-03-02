import { render, screen } from '@testing-library/react';

import FrequestQuestion from './_frequent-question';

describe('FrequestQuestion component', () => {
  test('renders section title', () => {
    render(<FrequestQuestion />);
    const sectionTitle = screen.getByText(/Ainda está com dúvidas?/i);
    expect(sectionTitle).toBeInTheDocument();
  });

  test('renders section subtitle', () => {
    render(<FrequestQuestion />);
    const sectionSubtitle = screen.getByText(
      /Veja abaixo as perguntas frequentes/i
    );
    expect(sectionSubtitle).toBeInTheDocument();
  });
});
