import React, { useEffect, useState } from "react";
import Axios from "axios";

import config from "../config/development.json";

function SideBar() {
  const [clicks, setClicks] = useState({ addCount: 0, updateCount: 0 });
  const baseURL = config.baseURL;

  useEffect(async () => {
    try {
      await Axios.get(`${baseURL}/readCount`).then((response) => {
        setClicks(response.data[0]);
      });
    } catch (error) {
      alert("Connect to Internet");
    }
  }, []);
  return (
    <div>
      <div className="heading" style={{ margin: "0.3em", textAlign: "center" }}>
        Total Clicks
      </div>
      <div className="title2" style={{ width: "100%", textAlign: "center" }}>
        <label htmlFor="addClicks">Add Clicks :</label>
        <label htmlFor="addClicks">&nbsp;&nbsp;{clicks.addCount}</label>
      </div>
      <div className="title2" style={{ width: "100%", textAlign: "center" }}>
        <label htmlFor="updateClicks">Update Clicks :</label>
        <label htmlFor="updateClicks">&nbsp;&nbsp;{clicks.updateCount}</label>
      </div>
    </div>
  );
}

export default SideBar;
