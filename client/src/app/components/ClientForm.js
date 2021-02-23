import React, { useEffect, useState } from "react";
import Axios from "axios";

import "../../App.css";
import config from "../config/development.json";

function ClientForm() {
  const [clientDetails, setClientDetails] = useState({
    name: "",
    email: "",
    carName: "",
    carPrice: "",
    contactNo: "",
  });
  const [clicks, setClicks] = useState({});

  const [error, setError] = useState("");
  const baseURL = config.baseURL;

  const addClient = async () => {
    setClicks((prevState) => ({
      ...prevState,
      addCount: prevState.addCount + 1,
    }));
    try {
      await Axios.post(`${baseURL}/carClient`, clientDetails);
      window.location.reload(false);
    } catch (error) {
      setError("Error in details that you filled");
    }
  };

  const updateClient = async () => {
    setClicks((prevState) => ({
      ...prevState,
      updateCount: prevState.updateCount + 1,
    }));
    try {
      await Axios.patch(`${baseURL}/updateClient`, clientDetails);
      window.location.reload(false);
    } catch (error) {
      console.log("Check your network", clientDetails, error);
    }
  };

  useEffect(async () => {
    try {
      await Axios.get(`${baseURL}/client`).then((response) => {
        setClientDetails(response.data[0]);
      });
      await Axios.get(`${baseURL}/readCount`).then((response) => {
        setClicks(response.data[0]);
      });
    } catch (error) {
      alert("Check network Connection");
    }
  }, []);

  useEffect(async () => {
    try {
      await Axios.patch(`${baseURL}/updateCount`, clicks);
    } catch (error) {
      alert("Check network Connection");
    }
  }, [clicks]);

  return (
    <div className="formContainer">
      <div className="heading">Client Form</div>
      <div>
        <label htmlFor="name" className="title2">
          Name :
        </label>
        <input
          type="text"
          value={clientDetails.name}
          placeholder="Alice Jonson"
          className="input-field"
          onChange={(e) =>
            setClientDetails((prevState) => ({
              ...prevState,
              name: e.target.value,
            }))
          }
        />
      </div>
      <div>
        <label htmlFor="emailId" className="title2">
          Email Id :
        </label>
        <input
          type="text"
          value={clientDetails.email}
          placeholder="alice@example.com"
          className="input-field"
          onChange={(e) =>
            setClientDetails((prevState) => ({
              ...prevState,
              email: e.target.value,
            }))
          }
        />
      </div>
      <div>
        <label htmlFor="carName" className="title2">
          Car Name :
        </label>
        <input
          type="text"
          value={clientDetails.carName}
          placeholder="Tata Nexon EV XM"
          className="input-field"
          onChange={(e) =>
            setClientDetails((prevState) => ({
              ...prevState,
              carName: e.target.value,
            }))
          }
        />
      </div>
      <div>
        <label htmlFor="carPrice" className="title2">
          Car Price :
        </label>
        <input
          type="text"
          value={clientDetails.carPrice}
          placeholder="₹ 1350000"
          className="input-field"
          onChange={(e) =>
            setClientDetails((prevState) => ({
              ...prevState,
              carPrice: e.target.value,
            }))
          }
        />
      </div>
      <div>
        <label htmlFor="contactNo" className="title2">
          Contact No :
        </label>
        <input
          type="text"
          value={clientDetails.contactNo}
          placeholder="1112223334"
          className="input-field"
          onChange={(e) =>
            setClientDetails((prevState) => ({
              ...prevState,
              contactNo: e.target.value,
            }))
          }
        />
      </div>
      {error ? (
        <label htmlFor="error" style={{ fontSize: "0.5em", color: "red" }}>
          {error}
        </label>
      ) : null}
      <div className="btn-container">
        <button
          className="btn"
          style={{ backgroundColor: "lightblue", marginRight: "0.5em" }}
          onClick={addClient}
        >
          Add Client
        </button>
        <button
          className="btn"
          style={{ backgroundColor: "lightblue" }}
          onClick={updateClient}
        >
          Update Client
        </button>
      </div>
    </div>
  );
}

export default ClientForm;
