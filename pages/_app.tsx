import '../styles/globals.css'
import type { AppProps } from 'next/app'
import SessionService from '../service/SessionService'
import { useEffect, useState } from 'react';

function Root({ Component, pageProps }: AppProps) {
  const [init,setInit] = useState(false);

  useEffect(()=>{
    SessionService.initSession();
    setInit(true);
  },[])
  return (
   init && <Component {...pageProps} />)
}

export default Root
