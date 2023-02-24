import Layout from '@/src/components/Layout/Layout';
import type { AppProps } from 'next/app';
import '@/src/styles/globals.scss';

const App = ({ Component, pageProps }: AppProps) => {
  return(
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default App