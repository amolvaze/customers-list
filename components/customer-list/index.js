import React, { useState, useEffect } from "react";
import "./index.css";
import Alert from "./Alert";

// Function to add new customers to the list
function CustomerList() {
  const [customers, setCustomers] = useState([]);
  const [customer, setCustomer] = useState("");

  const deleteItem = (index) => {
    const newCustomer = [...customers];
    newCustomer.splice(index, 1);
    setCustomers(newCustomer);
    // code to remove item from the local storage and update the state
    localStorage.setItem("customer", JSON.stringify(newCustomer));
  };

  const addCustomer = () => {
    if (customer.trim() === "") {
      Alert("Please enter input. It cannot be blank", "danger");
      return;
    }

    setCustomers([...customers, customer]);
    setCustomer("");
    localStorage.setItem("customer", JSON.stringify([...customers, customer]));
  };

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("customer"));
    if (items) {
      setCustomers(items);
    }
  }, []);

  return (
    <div className="mt-75 layout-column justify-content-center align-items-center">
      <section className="layout-row align-items-center justify-content-center">
        <input
          type="text"
          className="large"
          placeholder="Name"
          data-testid="app-input"
          value={customer}
          onChange={(e) => setCustomer(e.target.value)}
          onKeyUp={(e) => {
            if (e.key === "Enter") {
              addCustomer();
            }
          }}
        />
        <button
          type="submit"
          className="ml-30"
          data-testid="submit-button"
          onClick={addCustomer}
        >
          Add Customer
        </button>
      </section>

      {customers.length > 0 ? (
        <ul className="styled mt-50" data-testid="customer-list">
          {customers.map((customer, index) => (
            <li
              className="slide-up-fade-in"
              data-testid={"list-item" + index}
              key={"list-item" + index}
              onClick={deleteItem.bind(this, index)}
            >
              {customer}
            </li>
          ))}
        </ul>
      ) : (
        " "
      )}
    </div>
  );
}

export default CustomerList;
