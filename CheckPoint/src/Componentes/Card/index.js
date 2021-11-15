import './style.scss'

function Card ({titulo, paragrafo}){
    return(
        <>
        <div className="card" id={titulo}>
            <h1>{titulo}</h1>
            <p>{paragrafo}</p>
        </div>
        </>
    )

}

export default Card;