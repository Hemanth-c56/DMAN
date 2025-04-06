import React, { useState } from "react";
import { dman_backend, canisterId, createActor } from "../../declarations/dman_backend";
import { AuthClient } from "@dfinity/auth-client";

function Faucet(props) {

  const [isDissabled, setIsDissabled] = useState(false);
  const [text, setText] = useState("Gimme gimme");

  async function handleClick(event) {
    setIsDissabled(true);

    const authClient = await AuthClient.create();
    const identity = await authClient.getIdentity();

    const authenticatedCanister = createActor(canisterId, {
      agentOptions: {
        identity,
      }
    });

    const result = await authenticatedCanister.payOut();

    setText(result);
  }

  return (
    <div className="blue window">
      <h2>
        <span role="img" aria-label="tap emoji">
          🚰
        </span>
        Faucet
      </h2>
      <label>Claim your free 100 DMAN tokens into your {props.userPrincipal}.</label>
      <p className="trade-buttons">
        <button disabled={isDissabled} id="btn-payout" onClick={handleClick}>
          {text}
        </button>
      </p>
    </div>
  );
}

export default Faucet;
