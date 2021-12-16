import { useState, useEffect } from "react";
import "./App.css";
import CollectionCard from "./components/collectionCard";
import Header from "./components/Header";
import axios from "axios";
import PunkList from "./components/punkList";
import Main from "./components/main";
require("dotenv").config();

function App() {
  const [punkListData, setPunkListData] = useState([]);
  const [selectedPunk, setSelectedPunk] = useState(0);
  console.log(process.env.REACT_APP_WALLET_ID);
  useEffect(() => {
    const getMyNFTs = async () => {
      const openSeaData = await axios.get(
        `https://testnets-api.opensea.io/assets?asset_contract_address=${process.env.REACT_APP_WALLET_ID}&order_direction=asc`
      );
      console.log(openSeaData.data.assets);
      setPunkListData(openSeaData.data.assets);
    };
    return getMyNFTs();
  }, []);

  return (
    <div className="app">
      <Header />
      {punkListData.length > 0 && (
        <>
          <Main punkListData={punkListData} selectedPunk={selectedPunk} />
          <PunkList
            punkListData={punkListData}
            setSelectedPunk={setSelectedPunk}
          />
        </>
      )}
    </div>
  );
}

export default App;
