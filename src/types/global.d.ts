export {};
import type { Ethereum } from 'ethers';

declare global {
  interface Window {
    ethereum?: Ethereum;
  }
}
