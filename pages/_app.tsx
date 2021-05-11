import "../styles/globals.css";
import Layout from "../components/Layout/Layout";
import SearchContextProvider from "../src/store/SearchContext";
import SelectContextProvider from "../src/store/SelectContext";

function MyApp({ Component, pageProps }) {
  return (
    <SelectContextProvider>
      <SearchContextProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </SearchContextProvider>
    </SelectContextProvider>
  );
}

export default MyApp;
