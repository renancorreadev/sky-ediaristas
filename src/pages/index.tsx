import type { GetStaticProps, NextPage } from 'next';
import React from 'react';

import Advantages from '@/UI/partials/index/_advantages';
import FrequestQuestion from '@/UI/partials/index/_frequent-question';
import Presentation from '@/UI/partials/index/_presentation';

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      title: 'My Title',
    },
  };
};

const Index: NextPage<{ title: string }> = () => {
  return (
    <React.Fragment>
      <Presentation />
      <Advantages />
      <FrequestQuestion />
    </React.Fragment>
  );
};

export default Index;
