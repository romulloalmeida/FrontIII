import { Component } from "react";
import chamarAnime from '../img/index.js';

export default class Card extends Component {
    constructor() {
        super();
        this.state = this.props;
    }

    render(){
        return(
            <>
            {this.state.map((card) => (
                <div className="card" key={card.index}>
                    <div className="nomeBox">
                        <h1>{card.nome}</h1>
                    </div>
                    <div className="metadeCard">
                        <div className="pontBox">
                            <h2>Pontuação de:</h2>
                            <h3>Personagem {card.personagem}</h3>
                            <h3>Enredo {card.enredo}</h3>
                            <h3>Conclusão {card.conclusao}</h3>
                            <h3>Abertura {card.abertura}</h3>
                            <h3>Genero {card.genero}</h3>
                        </div>
                        <div className="imagemBox">
                            <img src={chamarAnime(card.imagem)} alt={card.nome} />
                        </div>
                    </div>
                </div>
            ))}
        </>
        );
    }
}