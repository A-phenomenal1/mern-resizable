import React from "react";
import ClientForm from "./components/ClientForm";
import ResizableComp from "./components/ResizableComp";

function Home2() {
  const clientForm = <ClientForm />;
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <ResizableComp width="100%" height="100vh" children={clientForm} />
    </div>
  );
}

export default Home2;
