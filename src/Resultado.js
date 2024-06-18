

function Resultado ({isOpen,madeira,cor, localidade})
{

    if (!isOpen) {return null}
   
    return (


        <div className="resultado">

            <p>{madeira} </p>
            <p>{cor}</p>
            <p>{localidade}</p>
        </div>

    )
}

export default Resultado 