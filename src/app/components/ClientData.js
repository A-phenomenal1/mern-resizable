import React, { useEffect, useState } from "react";
import Axios from "axios";

import config from "../config/development.json";

function ClientData() {
  const [clientDetails, setClientDetails] = useState({});
  const baseURL = config.baseURL;

  useEffect(async () => {
    await Axios.get(`${baseURL}/client`)
      .then((response) => {
        setClientDetails(response.data[0]);
      })
      .catch((e) => {
        alert("Check Your Network....");
      });
  }, []);

  return (
    <>
      <div className="heading">Client Data</div>
      <div>
        <label className="title2" htmlFor="name">
          Name:{" "}
        </label>
        <label className="title2" htmlFor="name">
          {clientDetails.name}
        </label>
      </div>
      <div>
        <label className="title2" htmlFor="email">
          Email Id:{" "}
        </label>
        <label className="title2" htmlFor="email">
          {clientDetails.email}
        </label>
      </div>
      <div>
        <label className="title2" htmlFor="carName">
          Car Name:{" "}
        </label>
        <label className="title2" htmlFor="carName">
          {clientDetails.carName}
        </label>
      </div>
      <div>
        <label className="title2" htmlFor="carPrice">
          Car Price:{" "}
        </label>
        <label className="title2" htmlFor="carPrice">
          ₹ {clientDetails.carPrice}
        </label>
      </div>
      <div>
        <label className="title2" htmlFor="contactNo">
          Contact No:{" "}
        </label>
        <label className="title2" htmlFor="contactNo">
          {clientDetails.contactNo}
        </label>
      </div>
    </>
  );
}

export default ClientData;
