import Layout from '@/layouts/Layout';
import '@/styles/styles.scss';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { useState } from 'react';

export default function App({ Component, pageProps }) {

  const [hasShownLoader, setHasShownLoader] = useState(false);

  return (
    <Layout >
      <Component {...pageProps} hasShownLoader={hasShownLoader} setHasShownLoader={setHasShownLoader} />
    </Layout>
  )
}
