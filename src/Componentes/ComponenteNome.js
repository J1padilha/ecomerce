import { useEffect, useState } from "react";

function ComponenteNome(){
    const[nome, setNome] = useState("Valor inicial");

    useEffect(()=>{
        alert(`Alterado o nome para ${nome}`)
    }, [nome]);
  
    return(
      <div>
        <button onClick={()=> setNome("POLACO")}>Alterar para apelido</button>
        <button onClick={()=> setNome("JEFFERSON")}>Alterar para Nome</button>
  
        <p> Nome: {nome}</p>
      </div>
    )
  }




  export {ComponenteNome}