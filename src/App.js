import { Fragment, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import { Home } from "./pages/Home";
import {
  EthereumClient,
  w3mConnectors,
  w3mProvider,
} from "@web3modal/ethereum";
import { useWeb3ModalTheme, Web3Modal } from "@web3modal/react";
import { configureChains, createClient, WagmiConfig } from "wagmi";
import { goerli } from "wagmi/chains";
import { setGlobalState } from "./store";

const chains = [goerli];
const projectId = "749eb5afed3979cc3bc2175c60384ff5";

const { provider } = configureChains(chains, [w3mProvider({ projectId })]);
const wagmiClient = createClient({
  autoConnect: true,
  connectors: w3mConnectors({ projectId, version: 1, chains }),
  provider,
});

const ethereumClient = new EthereumClient(wagmiClient, chains);

function App() {
  const { setTheme } = useWeb3ModalTheme();

  setTheme({
    themeColor: "blue",
    themeMode: "light",
    themeBackground: "themeColor",
  });

  useEffect(() => {
    const loadBlockchain = async () => {
      const account = ethereumClient.getAccount();
      if (account.address) {
        setGlobalState("connectedAccount", account.address);
      }

      ethereumClient.watchAccount((account) => {
        if (account.address) {
          setGlobalState("connectedAccount", account.address);
        } else {
          setGlobalState("connectedAccount", "");
        }
      });
    };
    loadBlockchain();
  }, []);

  return (
    <Fragment>
      <WagmiConfig client={wagmiClient}>
        <Router>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
            </Routes>
          </Layout>
        </Router>
      </WagmiConfig>
      <Web3Modal projectId={projectId} ethereumClient={ethereumClient} />;
    </Fragment>
  );
}

export default App;
