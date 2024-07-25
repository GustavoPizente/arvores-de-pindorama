import "./App.css";
import Header from "./Header";
import ConteudoPesquisa from "./ConteudoPesquisa";
import Footer from "./Footer";
import React, { useState } from "react";
import Modal from "react-modal"
import Main from "./Main";

Modal.setAppElement('#root');



function App() {
 
  ;
 
  return (  
    <div className="App">
      <Header/>
      <Main/>
      <Footer />
    </div>
  );
}

export default App;
