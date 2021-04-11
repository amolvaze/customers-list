import React from "react";
import "./App.css";
import CustomerList from "./components/customer-list/index.js";
import "h8k-components";

const title = "Customer List";

const App = () => {
  return (
    <div className="container">
      <h8k-navbar header={title} />
      <CustomerList />
    </div>
  );
};

export default App;
