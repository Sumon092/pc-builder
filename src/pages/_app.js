// import "@/styles/globals.css";

// export default function App({ Component, pageProps }) {
//   const getLayout = Component.getLayout || ((page) => page);
//   return <>{getLayout(<Component {...pageProps} />)}</>;
// }

import "@/styles/globals.css";
import Navbar from "../components/Layouts/Navbar";
import { SessionProvider } from "next-auth/react";
import { ProductProvider } from "./context/ProductContext";
export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <>
      <SessionProvider session={session}>
        <ProductProvider>
          <Navbar />
          <div style={{ padding: "24px" }}>
            <Component {...pageProps} />
          </div>
        </ProductProvider>
      </SessionProvider>
    </>
  );
}
