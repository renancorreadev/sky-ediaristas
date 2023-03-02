import { render, screen } from '@testing-library/react';
import React from 'react';

import Advantages from './_advantages';

describe('Advantages Component', () => {
  test('renders advantages component', () => {
    render(<Advantages />);
    const sectionTitle = screen.getByText('Por que usar o E-diaristas?');
    expect(sectionTitle).toBeInTheDocument();
  });

  test('renders all advantages list items', () => {
    render(<Advantages />);
    const listItems = screen.getAllByRole('listitem');
    expect(listItems.length).toBe(6);
  });

  test('renders list item titles', () => {
    render(<Advantages />);
    const titleElements = screen.getAllByText(
      /Diversidade|Confiabilidade|Rastreabilidade|Segurança|Controle|Experiência/
    );
    expect(titleElements.length).toBe(6);
  });

  test('renders list item descriptions', () => {
    render(<Advantages />);
    const descriptionElements = screen.getAllByText(
      /São mais de 5.000 profissionais esperando por você!|Todos os profissionais são verificados|Você pode acessar todo o histórico do\(a\) profissional|Seguro sobre qualquer possível dano|O pagamento é realizado somente quando o\(a\) profissional está na sua casa|Mais de 50.000 diárias realizadas/
    );
    expect(descriptionElements.length).toBe(6);
  });
});
