import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  //If you need to add some global styles or scripts, you can do it here, this includes the MainLayout component(Header, Navbar Footer, etc)
  return <Component {...pageProps} />;
}
