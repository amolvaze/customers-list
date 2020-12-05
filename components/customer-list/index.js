import React, { useState } from "react";
import "./index.css";

// function to dynamically display alert message which vanishes after 3 secs.
function showAlert(message, className) {
  const div = document.createElement("div");
  div.className = `alert alert-${className}`;
  div.appendChild(document.createTextNode(message));
  const container = document.querySelector(".container");
  const form = document.querySelector("#book-form");
  container.insertBefore(div, form);

  // Vanish in 3 seconds
  setTimeout(() => document.querySelector(".alert").remove(), 3000);
}

// Function to add new customers to the list
function CustomerList() {
  const [customers, setCustomers] = useState([]);
  const [customer, setCustomer] = useState("");
  const addCustomer = () => {
    if (customer.trim() === "") {
      showAlert("Please enter input. It cannot be blank", "danger");
      return;
    }

    setCustomers([...customers, customer]);
    setCustomer("");
  };

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
