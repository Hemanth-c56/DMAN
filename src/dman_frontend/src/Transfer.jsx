import React, { useState } from "react";
import { dman_backend, createActor, canisterId } from "../../declarations/dman_backend";
import { Principal } from "@dfinity/principal";
import { AuthClient } from "@dfinity/auth-client";

function Transfer() {
    
  const [toPrincipalId, setToPrincipalId] = useState("");
  const [amount, setAmount] = useState("");
  const [feedback, setFeedback] = useState("");

  async function handleClick() {
    const principal = Principal.fromText(toPrincipalId);
    const amountToTransfer = Number(amount);

    const authClient = await AuthClient.create();
    const identity = await authClient.getIdentity();

    const authenticatedCanister = createActor(canisterId, {
      agentOptions: {
        identity
      }
    })

    const result = await authenticatedCanister.transfer(principal, amountToTransfer);

    setFeedback(result);
    setToPrincipalId("");
    setAmount("");
  }

  return (
    <div className="window white">
      <div className="transfer">
        <fieldset>
          <legend>To Account:</legend>
          <ul>
            <li>
              <input
                type="text"
                id="transfer-to-id"
                value={toPrincipalId}
                onChange={(e)=>{setToPrincipalId(e.target.value)}}
                />
            </li>
          </ul>
        </fieldset>
        <fieldset>
          <legend>Amount:</legend>
          <ul>
            <li>
              <input
                type="number"
                id="amount"
                value={amount}
                onChange={(e)=>{setAmount(e.target.value)}}
              />
            </li>
          </ul>
        </fieldset>
        <p className="trade-buttons">
          <button id="btn-transfer" onClick={handleClick} >
            Transfer
          </button>
        </p>
        <p>{feedback}</p>
      </div>
    </div>
  );
}

export default Transfer;
