import React from "react";
import ClientData from "./components/ClientData";
import ResizableComp from "./components/ResizableComp";
import SideBar from "./components/SideBar";

function Home1() {
  const clientData = <ClientData />;
  const clicksData = <SideBar />;
  return (
    <div
      className="fluid-container"
      style={{
        display: "flex",
      }}
    >
      <div>
        <ResizableComp
          width="30vw"
          height="100vh"
          maxWidth
          children={clicksData}
        />
      </div>
      <div>
        <ResizableComp width="70vw" height="100vh" children={clientData} />
      </div>
    </div>
  );
}

export default Home1;
