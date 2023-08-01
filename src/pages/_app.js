// import "@/styles/globals.css";

// export default function App({ Component, pageProps }) {
//   const getLayout = Component.getLayout || ((page) => page);
//   return <>{getLayout(<Component {...pageProps} />)}</>;
// }

import "@/styles/globals.css";
import Navbar from "../components/Layouts/Navbar";
import { SessionProvider } from "next-auth/react";
export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <>
      <SessionProvider session={session}>
        <Navbar />
        <Component {...pageProps} />
      </SessionProvider>
    </>
  );
}
