import { render, screen, waitFor } from '@testing-library/react';

import Presentation from './_presentation';

describe('Presentation', () => {
  test('renders section title with the word "diarista"', () => {
    render(<Presentation />);

    const sectionTitles = screen.queryAllByText(/diarista/i);
    const sectionTitle = sectionTitles[0]; // Use the first matching element

    expect(sectionTitle).toBeInTheDocument();
  });

  test('renders section subTitle with correct text', () => {
    render(<Presentation />);

    const sectionSubTitle = screen.queryByText(
      /São mais de 5.000 profissionais esperando por você!/i
    );

    expect(sectionSubTitle).toBeInTheDocument();
  });

  test('renders section Button', async () => {
    render(<Presentation />);
    await waitFor(() => {
      const sectionButton = screen.queryByText('Encontrar um(a) diarista');
      expect(sectionButton).toBeInTheDocument();
    });
  });

  test('renders section picture with alt text', () => {
    render(<Presentation />);

    const picture = screen.getByRole('img');
    expect(picture).toBeInTheDocument();
    expect(picture).toHaveAttribute('alt', 'cleaner-picture');
  });
});
