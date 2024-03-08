import Layout from '@/Layout/Main.Layout';
import { About, Blog, Contact, Intro, Projects } from '@/components';
import data from '@/data';
import { PostType } from '@/types';
import getPosts from '@/utils/getPosts';
import { GetStaticProps } from 'next';
import { FC } from 'react';

interface IHomeProps {
  Posts: [PostType];
}

const Home: FC<IHomeProps> = ({ Posts }) => {
  return (
    <Layout>
      <Intro />
      <About />
      <Projects />
      <Blog Posts={Posts} />
      <Contact />
    </Layout>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const Posts = await getPosts(data.username);

  return {
    props: {
      Posts: Posts,
    },
    revalidate: 60 * 60 * 24,
  };
};
