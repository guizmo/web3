'use client';

import { useState } from 'react';
import { ethers } from 'ethers';
import { connectMetaMask, getProvider } from '../lib/metamask';
import { Button } from './ui/button';

const USDT_ADDRESS = '0xdAC17F958D2ee523a2206206994597C13D831ec7';
const ERC20_ABI = ['function balanceOf(address owner) view returns (uint256)', 'function decimals() view returns (uint8)'];

export function UsdtBalance() {
  const [address, setAddress] = useState<string | null>(null);
  const [balance, setBalance] = useState<string | null>(null);

  async function handleConnect() {
    const addr = await connectMetaMask();
    setAddress(addr);
    if (addr) {
      const provider = getProvider();
      if (provider) {
        const contract = new ethers.Contract(USDT_ADDRESS, ERC20_ABI, provider);
        const raw = await contract.balanceOf(addr);
        setBalance((Number(raw) / 1e6).toString());
      }
    }
  }

  return (
    <div>
      {!address ? (
        <Button onClick={handleConnect}>Connect MetaMask</Button>
      ) : (
        <div>
          <div>Address: {address}</div>
          <div>USDT Balance: {balance ?? 'Loading...'}</div>
        </div>
      )}
    </div>
  );
}
