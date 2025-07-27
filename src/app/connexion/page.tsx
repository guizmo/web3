'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function ConnectionPage() {
  const [account, setAccount] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const connectMetaMask = async () => {
    setError(null);
    if (typeof window.ethereum === 'undefined') {
      setError('MetaMask is not installed.');
      return;
    }
    try {
      const accounts = await window.ethereum.request({
        method: 'eth_requestAccounts'
      });
      setAccount(accounts[0]);
    } catch (err: unknown) {
      if (err && typeof err === 'object' && 'message' in err) {
        setError((err as { message: string }).message || 'Connection failed.');
      } else {
        setError('Connection failed.');
      }
    }
  };

  return (
    <div className='flex items-center justify-center min-h-screen bg-muted'>
      <Card className='w-full max-w-md'>
        <CardHeader>
          <CardTitle>Connect to MetaMask</CardTitle>
        </CardHeader>
        <CardContent>
          {account ? (
            <div className='mb-4'>
              <p className='text-green-600 font-medium'>Connected account:</p>
              <p className='break-all'>{account}</p>
            </div>
          ) : (
            <Button onClick={connectMetaMask} className='w-full'>
              Connect MetaMask
            </Button>
          )}
          {error && <p className='mt-4 text-red-600 text-sm'>{error}</p>}
        </CardContent>
      </Card>
    </div>
  );
}
