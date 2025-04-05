import React from "react";
import Header from "./Header.jsx";
import Faucet from "./Faucet.jsx";
import Balance from "./Balance.jsx";
import Transfer from "./Transfer.jsx";

function App() {

  return (
    <div id="screen">
      <Header />
      <Faucet />
      <Balance />
      <Transfer />
    </div>
  );
}

export default App;
