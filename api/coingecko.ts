import axios from "axios";

export const fetchDfiPriceFromCoinGecko = async (): Promise<{
  defichain: {
    usd: number;
    btc: number;
  };
}> => {
  const response = await axios.get(
    "https://api.coingecko.com/api/v3/simple/price?ids=defichain&vs_currencies=USD,BTC"
  );

  console.log(response.data);

  return response.data;
};
