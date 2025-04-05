import React, { useState } from "react";
import { dman_backend } from "../../declarations/dman_backend";
import { Principal } from "@dfinity/principal";

function Balance() {

  const [inputValue, setInputValue] = useState();
  const [balanceResult, setBalanceResult] = useState("---");
  const [tokenSymbol, setTokenSymbol] = useState("");
  const [isHidden, setIsHidden] = useState(true)
  
  async function handleClick() {

    const principal = Principal.fromText(inputValue);
    const balance = await dman_backend.balanceOf(principal);
    const symbol = await dman_backend.getSymbol();

    setTokenSymbol(symbol);
    setBalanceResult(balance.toLocaleString());
    setInputValue('');
    setIsHidden(false);
  }


  return (
    <div className="window white">
      <label>Check account token balance:</label>
      <p>
        <input
          id="balance-principal-id"
          type="text"
          placeholder="Enter a Principal ID"
          value={inputValue}
          onChange={(e)=>{setInputValue(e.target.value)}}
        />
      </p>
      <p className="trade-buttons">
        <button
          id="btn-request-balance"
          onClick={handleClick}
        >
          Check Balance
        </button>
      </p>
      <p hidden={isHidden}>{`This account has a balance of ${balanceResult} ${tokenSymbol}.`}</p>
    </div>
  );
}

export default Balance;
