import type { GetStaticProps, NextPage } from 'next';

import Presentation from '@/UI/partials/index/_presentation';

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      title: 'My Title',
    },
  };
};

const Index: NextPage<{ title: string }> = () => {
  return <Presentation />;
};

export default Index;
