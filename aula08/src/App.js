import { Component } from 'react';
import './App.scss';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      listaCompra: [
        {
          id: 1,
          imagem: "https://static.clubeextra.com.br/img/uploads/1/983/645983.png",
          nome: "café"
        },
        {
          id: 2,
          imagem: "https://static.clubeextra.com.br/img/uploads/1/219/528219.jpg",
          nome: "arroz"
        },
        {
          id: 3,
          imagem: "https://static.clubeextra.com.br/img/uploads/1/508/584508.jpg",
          nome: "pastel"
        },
        {
          id: 4,
          imagem: "https://static.clubeextra.com.br/img/uploads/1/614/644614.jpg",
          nome: "morango"
        },
        {
          id: 5,
          imagem: "https://static.clubeextra.com.br/img/uploads/1/141/12810141.jpg",
          nome: "banana"
        }
      ]
    };
  }

  removerItem = (idCompra) => {
    const lista = this.state.listaCompra.filter(({id}) =>{
      return id !== idCompra
    });
    this.setState({
      listaCompra: lista
    })

  }



  render() {

    return (
      <>
        <div className="d-flex flex-wrap flex-column justify-content-center align-items-center py-3 my-4">
          {
            this.state.listaCompra.map(({ id, imagem, nome}) => {
              return(
                <div key={id} onClick={() => this.removerItem(id)}>
                  <img src={imagem} alt={nome} />
                    <h2>{nome}</h2>
                </div>
              )
            })
          }
        </div>
      </>
    )
  }
}


