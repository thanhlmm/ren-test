import { providers } from "ethers";
import Head from "next/head";
import { WagmiConfig, createClient, configureChains, chain } from "wagmi";

import Demo from "../components/Demo";

// const { chains, provider } = configureChains(defaultChains, [
//   alchemyProvider({ alchemyId }),
//   publicProvider(),
// ])

const client = createClient({
  autoConnect: true,
  provider(config) {
    return new providers.AlchemyProvider(config.chainId, process.env.NEXT_PUBLIC_ALCHEMMY_KEY);
  },
});

function App() {
  return (
    <WagmiConfig client={client}>
      <Head>
        <title>Ren test</title>
      </Head>
      <div className="container min-h-screen mx-auto">
        <Demo />
      </div>
      <footer className="p-10 footer bg-base-200 text-base-content">
        <div>
          <p>
            Built with ❤️ from{" "}
            <a className="link" target="_blank" href="https://thanhle.blog">
              Thanh Le
            </a>
          </p>
        </div>
      </footer>
    </WagmiConfig>
  );
}

export default App;