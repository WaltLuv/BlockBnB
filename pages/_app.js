import '../styles/globals.css'
import { Provider } from '../context/context'
import '@rainbow-me/rainbowkit/styles.css'
import { chain, configureChains, createClient, WagmiConfig } from 'wagmi'

import {
  getDefaultWallets,
  RainbowKitProvider,
  darkTheme,
} from '@rainbow-me/rainbowkit'

import { infuraProvider } from 'wagmi/providers/infura'
import { jsonRpcProvider } from 'wagmi/providers/jsonRpc'

const { chains, provider } = configureChains(
  [chain.polygonMumbai, chain.localhost],
  [
    infuraProvider({ apiKey: process.env.NEXT_PUBLIC_INFURA_API_KEY, priority: 1 }),
    jsonRpcProvider({
      priority: 2,
      rpc: _chain => ({
        http: `http://127.0.0.1:7545`,
      }),
    }),
  ],
)

const { connectors } = getDefaultWallets({
  appName: 'Blockbnb',
  chains,
})

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
})

const MyApp = ({ Component, pageProps }) => {
  return (
    <Provider>
      <WagmiConfig client={wagmiClient}>
        <RainbowKitProvider chains={chains} theme={darkTheme()} coolMode>
        <Component {...pageProps} />
        </RainbowKitProvider>
      </WagmiConfig>
     
    </Provider>
  )
}

export default MyApp
