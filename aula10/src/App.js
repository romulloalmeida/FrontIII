import { Component } from 'react';
import Increment from './components/Increment';
import Toggler from './components/Toggler';
import RemoveItemFromList from './components/RemoveItemFromList';
import Clock from './components/Clock';
import Cronometro from './components/Cronometro'

import './App.scss';

export default class App extends Component {
  render() {
    return (
      <>
        <Increment />
        <Toggler />
        <RemoveItemFromList />
        <Cronometro />
      </>
    )
  }
}