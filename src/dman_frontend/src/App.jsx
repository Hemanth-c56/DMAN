import React from "react";
import Header from "./Header.jsx";
import Faucet from "./Faucet.jsx";
import Balance from "./Balance.jsx";
import Transfer from "./Transfer.jsx";

function App(props) {

  return (
    <div id="screen">
      <Header />
      <Faucet userPrincipal={props.loggedInPrincipal}/>
      <Balance />
      <Transfer />
    </div>
  );
}

export default App;
