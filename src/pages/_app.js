import { useEffect } from 'react'
// import { CssBaseline } from '@material-ui/core/CssBaseline'
import AppBar from '../components/AppBar/Appbar'

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side')
    if(jssStyles) {
        jssStyles.parentElement.removeChild(jssStyles)
    }
  }, [])

  return (
    <>
      <AppBar>
        <Component {...pageProps} />
      </AppBar>
    </>
   )
}

export default MyApp
