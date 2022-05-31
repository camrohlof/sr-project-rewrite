import Header from '../components/header'
import '../styles/globals.css'
import "bootstrap/dist/css/bootstrap.min.css"

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  )

}

export default MyApp
