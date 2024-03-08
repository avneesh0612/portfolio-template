import data from '@/data';
import '@/styles/globals.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { NextSeo } from 'next-seo';
import { AppProps } from 'next/app';

const App = ({ Component, pageProps }: AppProps) => {
  if (typeof window === 'object') {
    AOS.init();
  }

  return (
    <>
      <NextSeo
        canonical={data.website}
        defaultTitle={data.name}
        description={data.about}
        openGraph={{
          url: data.website,
          title: data.name,
          description: data.about,
          images: [
            {
              url: '/About.png',
              width: 800,
              height: 420,
              alt: data.name,
            },
          ],
          profile: {
            firstName: data.name.split(' ')[0],
            gender: 'Male',
            lastName: data.name.split(' ')[1],
            username: data.username,
          },
        }}
        title={data.name}
        titleTemplate={data.name}
        twitter={{
          handle: `@${data.username}`,
          site: `@${data.username}`,
          cardType: 'summary_large_image',
        }}
      />
      <Component {...pageProps} />
    </>
  );
};

export default App;
