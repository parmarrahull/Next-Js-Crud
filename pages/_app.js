import "@/styles/globals.css";
import { store } from "../store";
import { Provider } from "react-redux";
import NavBar from "@/components/NavBar";

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <NavBar />
      <Component {...pageProps} />
    </Provider>
  );
}
