import "@/styles/globals.css";
import Layout from "./Layout";
import "bootstrap/dist/css/bootstrap.min.css";
import "swiper/css";

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
