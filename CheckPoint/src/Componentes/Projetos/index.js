import Card from '../Card'
import './style.scss'

 const pCafe = "Projeto feito em parceria com colegas de curso para nos inspirar a ficar bem acordados!"; 
 const pAnime = "Projeto feito com a finalidade de vizualizar minhas preferêncais de animes.";
 const pLua = "Site feito assim que comecei a vida de dev, para que mesmo sabendo que eu não sou tão bom, me lembrar que já fui bem pior.";

function Projetos() {
    return(
        <>
        <div id="projeto">
            <a href="https://vinnymendes.github.io/EstacaoCafe/" target="_blank" rel="noopener noreferrer"><Card titulo ="Café" paragrafo = {pCafe} /></a>
            <a href="https://listasanime.vercel.app/" target="_blank" rel="noopener noreferrer"><Card titulo = "Animes" paragrafo = {pAnime} /></a>
            <a href="https://romulloalmeida.github.io/site_frontend_I/ProjetoLua/" target="_blank" rel="noopener noreferrer"><Card titulo = "Lua" paragrafo = {pLua} /></a>
        </div>
        </>
    )
}

export default Projetos;