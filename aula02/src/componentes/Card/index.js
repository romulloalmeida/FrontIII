import './style.css'

const Card = ({ cartao }) => {


    return (
        <div className="card">
            <div className="nomeBox">
                <h1>{cartao.nome}</h1>
            </div>
            <div className="metadeCard">
                <div className="pontBox">
                    <h2>Pontuação de:</h2>
                    <h3>Personagem</h3>
                    <h3>Enredo</h3>
                    <h3>Conclusão</h3>
                    <h3>Abertura</h3>
                    <h3>Genero</h3>
                </div>
                <div className="imagemBox">
                    <img src={cartao.url} alt={cartao.nome} />
                </div>
            </div>
        </div>
    )

}

export default Card;