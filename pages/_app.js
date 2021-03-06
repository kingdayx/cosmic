import "../styles/globals.css";
import { Anchor } from "ual-anchor";
import { Wax } from "@eosdacio/ual-wax";
import { wrapper } from "../redux/store";

const myChain = {
  chainId: "f16b1833c747c43682f4386fca9cbb327929334a762755ebec17f6f23c9b8a12",
  rpcEndpoints: [
    {
      protocol: "https",
      host: "testnet.wax.eosdetroit.io",
      port: "443",
    },
  ],
};

const anchor = new Anchor([myChain], { appName: "cpu4" });
const wax = new Wax([myChain], { appName: "cpu4" });

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default wrapper.withRedux(MyApp);
