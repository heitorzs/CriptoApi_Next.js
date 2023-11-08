import { create } from "zustand";
import axios from "axios";

const homeStore = create((set) => ({
    coins: [],

    fetchCoins: async ()=> {
        const res = await axios.get('https://api.coingecko.com/api/v3/search/trending' );
        console.log(res)
        const coins = res.data.coins.map(coin => {
            return {
                name: coin.item.name,
                img: coin.item.large,
                id: coin.item.id,
                priceBTC: coin.item.price_BTC
            }
        })

        set({coins: coins})
        console.log(coins)
    }
}))

export default homeStore;