import { createConfig, http } from 'wagmi';
import { mainnet } from 'wagmi/chains';
import { WagmiWeb3ConfigProvider } from '@ant-design/web3-wagmi';
import { Address } from "@ant-design/web3";

const config = createConfig({
    chains: [mainnet],
    transports: {
        [mainnet.id]: http(),
    },
    });

export default function Web3() {
  return (
    <WagmiWeb3ConfigProvider config={config}>
        <Address format address="0xEcd0D12E21805803f70de03B72B1C162dB0898d9" />
    </WagmiWeb3ConfigProvider>
    
  );
};