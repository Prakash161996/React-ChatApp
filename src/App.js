import React from "react";
import Chatbody from "./components/chatbody/Chatbody";
import Header from "./components/header/Header";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

const App = () => {
  const getData = (msg) => {
    console.log(msg);
  };

  return (
    <div className="container-fluid p-l-r-0">
      <div className="heading-box ">
        <Header />
      </div>
      <div className="chatbody-box ">
        <Chatbody messageAdd={getData} />
      </div>
    </div>
  );
};

export default App;
