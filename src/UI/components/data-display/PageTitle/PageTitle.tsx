import React from 'react';

import {
  PageSubTitle,
  PageTitleContainer,
  PageTitleStyled,
} from './PageTitle.styled';

export interface PageTitleProps {
  title: string;
  subtitle?: string;
}
const PageTitle: React.FC<PageTitleProps> = ({
  title,
  subtitle,
}: PageTitleProps) => {
  return (
    <PageTitleContainer>
      <PageTitleStyled>{title} </PageTitleStyled>
      <PageSubTitle>{subtitle}</PageSubTitle>
    </PageTitleContainer>
  );
};

export default PageTitle;
