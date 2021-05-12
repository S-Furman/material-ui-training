import "../styles/globals.css";
import Layout from "../components/Layout/Layout";
import SearchContextProvider from "../src/store/SearchContext";
import SelectContextProvider from "../src/store/SelectContext";
import ThemeContextProvider from "../src/store/ThemeContext";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeContextProvider>
      <SelectContextProvider>
        <SearchContextProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </SearchContextProvider>
      </SelectContextProvider>
    </ThemeContextProvider>
  );
}

export default MyApp;
