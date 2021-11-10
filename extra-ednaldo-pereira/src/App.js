import {Component} from 'react';
import Header from "./Header";
import Banner from "./Banner";
import Footer from "./Footer"
import Galeria from "./Galeria";

import './App.scss';
export default class App extends Component {

  constructor(){
    super();
    this.state = {
      temaEscuro: true
    }
  }

  nomeEmpresa = 'Ednaldo Pereira';

  alternaTema = () => {
    this.setState()
  }

  render(){
  return (
    <div>
      <Header empresa={this.nomeEmpresa} temaEscuro={this.state.temaEscuro} />
      <img src="https://cdn-icons-png.flaticon.com/512/702/702814.png" alt="Alterna Cor" onClick={this.alternaTema} />
      <main>
        <Banner>
          <h2>O que é Ednaldo Pereira</h2>
          <ul>
            <li>Para o cego, é a luz.</li>
            <li>Para o faminto, é o pão.</li>
            <li>Para o sedento, é a fonte de água viva.</li>
            <li>Para o morto, é a vida.</li>
            <li>Para o enfermo, é a cura.</li>
            <li>Para o prisioneiro, é a liberdade.</li>
            <li>Para o solitário, é o companheiro.</li>
            <li>Para o viajante, é o caminho.</li>
            <li>Para o sábio, é a sabedoria.</li>
          </ul>
        </Banner>
        <Galeria />
      </main>
      <Footer empresa={this.nomeEmpresa} />
    </div>
  );
}}

