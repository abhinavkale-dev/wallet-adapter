import './App.css'
import { useMemo } from 'react';
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import { UnsafeBurnerWalletAdapter } from '@solana/wallet-adapter-wallets';
import {
    WalletModalProvider,
    WalletDisconnectButton,
    WalletMultiButton
} from '@solana/wallet-adapter-react-ui';
import { clusterApiUrl } from '@solana/web3.js';
import { Airdrop } from './components/Airdrop';
import '@solana/wallet-adapter-react-ui/styles.css';
import { ShowSolBalance } from './components/ShowSolBalance';
import { SendTokens } from './components/SendToken';
import { SignMessage } from './components/SignMessage';

function App() {
  const network = WalletAdapterNetwork.Devnet;
  const endpoint = useMemo(() => clusterApiUrl(network), [network]);
  const wallets = useMemo(() => [new UnsafeBurnerWalletAdapter()], []);

  return (
    <>
      <ConnectionProvider endpoint={endpoint}>
          <WalletProvider wallets={wallets} autoConnect>
              <WalletModalProvider>
                      <WalletMultiButton />
                      <WalletDisconnectButton />
                  <div>
                      <Airdrop />
                      <ShowSolBalance />
                      <SendTokens />
                      <SignMessage />
                  </div>
              </WalletModalProvider>
          </WalletProvider>
        </ConnectionProvider>
    </>
  )
}

export default App
