import "./App.css";
import Modal from "react-modal";
import React, { useState } from "react";
import Formulario from "./Formulario";
import Resultado from "./Resultado";
import FormularioCadastro from "./formularioCadastro";
import SvgMainPesquisar from "./SvgMainPesquisar";
import SvgMainCadastrar from "./SvgMainCadastrar";

//CONTROLA A ABERTURA DO MODAL//
function ConteudoPesquisa({isOpen, closePesquisar}) {

  
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalCadastroIsOpen, setModalCadastroIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const openModalCadastro = () => {
    setModalCadastroIsOpen(true);
  };

  const closeModalCadastro = () => {
    setModalCadastroIsOpen(false);
  };
  
  if (!isOpen) {
    return null; // Retorna null se não for para ser exibido
  }

  return (
    <main className="main">
      <div className="conteudo">
        
          <div className="caixaspan"> <span className="textospan">
            Encontre aqui registros de madeiras feitos por marceneiros de todo o
            país. <br></br>
          </span></div>
         

        <button className="botaopesquisar" onClick={() => openModal()}>
        <SvgMainPesquisar></SvgMainPesquisar>
        </button>
        <Modal
          className="modalpesquisar"
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel="ModalPesquisar"
        >
          <div className="conteudomodalpesquisar">
            <h2>Como é a madeira que procura?</h2>
            <Formulario></Formulario>
            <button className="botaoclosepesquisar" onClick={closeModal}>Close</button>
          </div>
        </Modal>

        <button className="botaocadastrar" onClick={() => openModalCadastro()}>
         <SvgMainCadastrar></SvgMainCadastrar>
        </button>
        <Modal
            className="modalcadastro"
            isOpen={modalCadastroIsOpen}
            onRequestClose={closeModalCadastro}
            contentLabel="ModalCadastro"
          >
            <div className="conteudomodalcadastro">
              <h2>Quais as características da madeira que quer casdastrar?</h2>
              <FormularioCadastro></FormularioCadastro>
              <button className="botaofecharmodalcadastro" onClick={() => { closeModalCadastro() }}>voltar</button>
            </div>
          </Modal>

          

          <button className="botaofecharpesquisar" onClick={closePesquisar}>Voltar</button>
      </div>
    </main>
  );
}

export default ConteudoPesquisa;
