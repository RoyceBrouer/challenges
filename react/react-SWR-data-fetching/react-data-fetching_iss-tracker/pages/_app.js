import GlobalStyle from "../styles";
import { SWRConfig } from "swr";

export default function App({ Component, pageProps }) {
  //const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const fetcher = async (url) => {
    const res = await fetch(url);
    if (!res.ok) {
      const error = new Error("An error occurred while fetching the data.");
      error.info = await res.json();
      error.status = res.status;
      throw error;
    }

    return res.json();
  };

  return (
    <>
      <SWRConfig value={{ fetcher, refreshInterval: 5000 }}>
        <GlobalStyle />
        <Component {...pageProps} />
      </SWRConfig>
    </>
  );
}
