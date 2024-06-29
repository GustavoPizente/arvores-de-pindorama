import React from "react";

const Ficha = ({ isOpen, children, onClose, result }) => {
  if (!isOpen) return null;

  return (
    <div className="ficha">
     
     
      <ul className="resultado">
        {result.map((item, index) => (
          <li className="lista" key={index}>

            {JSON.stringify(item)}
          
          </li>
        ))}
      </ul>

      
      
      <button className="modal-close" onClick={onClose}>
        X
      </button>
   
   
   
    </div>
  );
};

export default Ficha;
