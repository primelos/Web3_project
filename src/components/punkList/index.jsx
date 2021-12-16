import React from "react";
import CollectionCard from "../collectionCard";
import "./PunkList.css";

const PunkList = ({ punkListData, setSelectedPunk }) => {
  return (
    <div className="punkList">
      {punkListData.map((punk) => (
        <div key={punk.token_id} onClick={() => setSelectedPunk(punk.token_id)}>
          {punkListData ? (
            <CollectionCard
              key={punk.token_id}
              id={punk.token_id}
              name={punk.name}
              traits={punk.traits}
              image={punk.image_url}
            />
          ) : (
            ""
          )}
        </div>
      ))}
    </div>
  );
};

export default PunkList;
