import "@/styles/globals.css";
import Navbar from "../components/Layouts/Navbar";
import { SessionProvider } from "next-auth/react";
import { ProductProvider } from "../context/ProductContext";
import Footer from "@/components/Layouts/Footer";
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
          <Footer />
        </ProductProvider>
      </SessionProvider>
    </>
  );
}
