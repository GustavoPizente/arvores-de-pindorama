import React, { useState } from "react";

function Resultado ({isOpen})
{

    if (!isOpen) {return null}
   
    return (


        <div className="resultado">

            <p>Aqui o reultado 1 </p>
            <p>aqui o resultado 2 </p>
            <p>Aqui o resultado 3</p>
        </div>

    )
}

export default Resultado 