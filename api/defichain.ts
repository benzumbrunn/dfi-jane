import axios from "axios";

export type DefiChainData = {
  tokens: {
    max: number;
    supply: {
      total: number;
      circulation: number;
      foundation: number;
      community: number;
    };
  };
};

export const fetchDefiChainStats = async (): Promise<DefiChainData> => {
  const response = await axios.get("https://api.defichain.io/v1/stats");

  return response.data;
};
