/* eslint-disable testing-library/no-node-access */
/* eslint-disable testing-library/prefer-screen-queries */
/* eslint-disable import/no-extraneous-dependencies */
import { render } from '@testing-library/react';
import React from 'react';

import StoryThemeProvider from './StoryThemeProvider';
import theme from './theme';

describe('StoryThemeProvider', () => {
  it('should render correctly', () => {
    const mockStoryFn = jest.fn().mockReturnValue(<div>Mock Story</div>);
    const { container } = render(<StoryThemeProvider storyFn={mockStoryFn} />);
    // eslint-disable-next-line testing-library/no-node-access
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should provide the theme to child components', () => {
    const mockStoryFn = jest.fn().mockReturnValue(<div>Mock Story</div>);
    const { getByTestId } = render(
      <StoryThemeProvider storyFn={mockStoryFn}>
        <div data-testid="child-component" />
      </StoryThemeProvider>
    );
    expect(getByTestId('child-component')).toHaveStyle(`
      background-color: ${theme.palette.background.default};
      color: ${theme.palette.text.primary};
    `);
  });

  it('should wrap child components with MUI and Emotion theme providers', () => {
    const mockStoryFn = jest.fn().mockReturnValue(<div>Mock Story</div>);
    const { getByTestId } = render(
      <StoryThemeProvider storyFn={mockStoryFn}>
        <div data-testid="child-component" />
      </StoryThemeProvider>
    );
    expect(getByTestId('child-component').parentElement?.tagName).toEqual(
      'EMOTION-THEMEPROVIDER'
    );
    expect(
      getByTestId('child-component').parentElement?.parentElement?.tagName
    ).toEqual('MUI-THEMEPROVIDER');
  });
});
