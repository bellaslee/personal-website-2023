import 'bootstrap/dist/css/bootstrap-grid.css'
import '@/styles/css/styles.css'
import Nav from '@/components/Nav';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Nav />
      <Component {...pageProps} />
    </>
  )
}
