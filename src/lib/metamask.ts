import { ethers } from 'ethers';

export async function connectMetaMask(): Promise<string | null> {
  if (!window.ethereum) {
    alert('MetaMask not found');
    return null;
  }
  const provider = new ethers.BrowserProvider(window.ethereum);
  const accounts = await provider.send('eth_requestAccounts', []);
  return accounts[0] || null;
}

export function getProvider() {
  if (!window.ethereum) return null;
  return new ethers.BrowserProvider(window.ethereum);
}
