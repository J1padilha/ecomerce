

function Nome (props){
    return (
        <>
        <p>{props.children}</p>
        </>
    );
}

function Abacate (props){
    return (
        <>
        <p>{props.children}</p>
        </>
    )
}

function Abacaxi (props){
    return (
        <>
        <div>{props.nome}</div>
        <div>{props.descricao}</div>
        </>
    );
}

export { Nome, Abacate, Abacaxi };