import { Global } from "@emotion/react";
import { globalStyles } from "../src/styles/globalStyle"

export default function App({ Component, pageProps }) {
  return (
    <>
      <Global styles={globalStyles} />
      <Component {...pageProps} />;
    </>
  )
}
