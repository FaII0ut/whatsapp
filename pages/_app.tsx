// import 'raf/polyfill'
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layouts from '../components/layout/Layouts';
import { useEffect, useState } from 'react';
import { RecoilRoot } from 'recoil';
import Router from "next/router";
import { useRouter } from "next/router";

type routeParams = {
  shallow: object
}

function MyApp({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  // useEffect(() => {
  //   const handleStart = (url: string, extra:routeParams) => {
  //     // console.log(url); // Will log the path to the page being navigated to
  //     !extra.shallow ? setLoading(true) : null;
  //   };
  //   const handleComplete = () => setLoading(false);
  //   router.events.on('routeChangeStart', handleStart);
  //   router.events.on('routeChangeComplete', handleComplete);
  //   router.events.on('routeChangeError', handleComplete);

  //   // Cleanup event listeners
  //   return () => {
  //     router.events.off('routeChangeStart', handleStart);
  //     router.events.off('routeChangeComplete', handleComplete);
  //     router.events.off('routeChangeError', handleComplete);
  //   }
  // }, [router]);


  useEffect(() => {
    if (localStorage.theme == "dark") {
      document.documentElement.classList.add('dark')
    }
  }, [])

  return (
    <RecoilRoot>
      {/* <Snackbar /> */}
      <>
        {router.pathname == "/login" ?
          <Component {...pageProps} />
          :
          <Layouts>
            <Component {...pageProps} />
          </Layouts>
        }
        <div
          className={`loading fixed top-0 right-0 left-0 bottom-0 justify-center items-center  gap-4 bg-white dark:bg-gray-800 ${loading ? "flex" : "hidden"
            }`}
          style={{ zIndex: "11" }}
        >
          <div className="flex gap-4 items-center  pl-64">
            loading
          </div>
        </div>
      </>
    </RecoilRoot>
  )
}

export default MyApp
