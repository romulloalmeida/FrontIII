import './style.css'

const Campo = ({ tipo,children }) => {
        return (
        <fieldset className="campo">
                <legend>{children}</legend>
                <div id={tipo}>
                    <h1>Sem itens</h1>
                </div>
            </fieldset>
    )
}

export default Campo;

