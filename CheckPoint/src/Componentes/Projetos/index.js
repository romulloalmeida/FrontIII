import Card from '../Card'
import './style.scss'

const listaProjeto= [
    {
        link: "https://vinnymendes.github.io/EstacaoCafe/",
        titulo: "Café",
        p: "Projeto feito em parceria com colegas de curso para nos inspirar a ficar bem acordados!"
    },
    {
        link: "https://listasanime.vercel.app/",
        titulo: "Animes",
        p: "Projeto feito com a finalidade de vizualizar minhas preferêncais de animes."
    },
    {
        link: "https://romulloalmeida.github.io/site_frontend_I/ProjetoLua/",
        titulo: "Lua",
        p: "Site feito assim que comecei a vida de dev, para que mesmo sabendo que eu não sou tão bom, me lembrar que já fui bem pior."
    }
]

function Projetos() {
    return(
        <>
        <div id="projeto">
            {
                listaProjeto.map((card) =>(
                    <a href={card.link} target="_blank" rel="noopener noreferrer"><Card titulo ={card.titulo} paragrafo = {card.p} /></a>
                ))
            }
        </div>
        </>
    )
}

export default Projetos;