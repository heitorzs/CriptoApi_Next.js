'use client'
import homeStore from './stores/homeStore';
import { useEffect } from 'react';

export default function Home() {

  const store = homeStore();

  useEffect(() => {
    store.fetchCoins();

  }, [])

  return (
    <div>{store.coins.map(coin => {
      return (
        <div key={coin.id}>
          <p>{coin.name}</p>
        </div>
      )
    })}</div>
  )
}
