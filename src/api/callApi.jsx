import axios from "axios";

export default axios.create({
  baseUrl: `https://testnets-api.opensea.io/`,
  headers: {
    Authorization: `X-API-KEY ${process.env.REACT_APP_WALLET_ID}`,
  },
});
