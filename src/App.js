import "./App.css";
import Header from "./Header";
import Conteudo from "./Conteudo";
import Footer from "./Footer";
import React, { useState } from "react";
import Modal from "react-modal"

Modal.setAppElement('#root');



function App() {
 
  ;
 
  return (  
    <div className="App">
      <Header/>
      <Conteudo />
      <Footer />
    </div>
  );
}

export default App;
