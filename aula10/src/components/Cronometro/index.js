import { Component } from 'react';
import './style.scss';

export default class Clock extends Component {
    constructor() {
        super();
        this.state = {
            tempo: 60,
        }
    }

    componentDidMount() {
        this.timerID = setInterval(() => this.reduzir(), 1000)

    }

    reduzir() {
        this.setState({ tempo: this.state.tempo - 10})
    }

    componentDidUpdate() {
        if (this.state.tempo === 0){
            clearInterval(this.timerID)
        }
      }


    mudar(){
        this.setState(
            function (state) {
                return ({ stop: !state.stop })
            }
        )
    }

    render() {
        return (
            <div className="d-flex flex-wrap flex-column justify-content-center align-items-center py-3 my-4" >
                <h2>0:{this.state.tempo}</h2>
            </div>
        )
    }
}