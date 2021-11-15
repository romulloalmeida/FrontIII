import './style.scss'
import fundo from './fundo.jpg'

function Banner() {
    return (
        <>
            <div id="banner">
                <img src={fundo} alt="Fundo" />
                <p>Sou um desenvolvedor web que está entrando nesse novo mundo. Procurando agregar valor ao que gosto de fazer.</p>
                <p>Aprendendo a cada dia mais e mais, usando o que já aprendi para ver o melhor resultado possível.</p>
            </div>
        </>
    )
}

export default Banner;