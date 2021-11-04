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
    const id = (t) =>{
        return "id" + t;
    } 
    return (
        <fieldset className="campo" id={id(campo(0))}>
                <h1>{campo(1)}</h1>
                <div id={campo(0)}>
                    <Card cartao={demografia(tipo)} />
                </div>
            </fieldset>
    )
}

export default Campo;

