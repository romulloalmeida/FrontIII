import Card from '../Card';
import './style.css';
import demografia from '../JSON';


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
                    <Card cartao={demografia(tipo)} />
                </div>
            </fieldset>
    )
}

export default Campo;

