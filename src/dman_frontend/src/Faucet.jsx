import React, { useState } from "react";
import { dman_backend } from "../../declarations/dman_backend";

function Faucet() {

  const [isDissabled, setIsDissabled] = useState(false);

  async function handleClick(event) {
    setIsDissabled(true);
    await dman_backend.payOut();
  }

  return (
    <div className="blue window">
      <h2>
        <span role="img" aria-label="tap emoji">
          🚰
        </span>
        Faucet
      </h2>
      <label>Get your free DHemanth tokens here! Claim 100 DMAN coins to your account.</label>
      <p className="trade-buttons">
        <button disabled={isDissabled} id="btn-payout" onClick={handleClick}>
          Gimme gimme
        </button>
      </p>
    </div>
  );
}

export default Faucet;
