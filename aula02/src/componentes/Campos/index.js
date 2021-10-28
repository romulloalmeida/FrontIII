import Card from '../Card'
import './style.css'
import batata from "../img/nogame.jpg"


const anime = {
    nome: "shou",
    demografia: "shoujo",
    url: batata
  }

const Campo = ({ tipo }) => {
    const campo = (i) => {
        if(i===1){
            return `${tipo}`
        }
        return tipo.toLowerCase();
    }
    return (
        <fieldset className="campo">
                <legend>{campo(1)}</legend>
                <div id={campo(0)}>
                    <Card cartao={anime} />
                </div>
            </fieldset>
    )
}

export default Campo;

