import type { GetStaticProps, NextPage } from 'next';

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      title: 'My Title',
    },
  };
};

const Index: NextPage<{ title: string }> = (props) => {
  return <div>{props.title}</div>;
};

export default Index;
