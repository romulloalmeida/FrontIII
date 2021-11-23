import { Component } from "react";
import { Link } from "react-router-dom";

export default class Repository extends Component {
    render(){
        return(
            <>
            <Link to="/">Ir para home</Link>
            <h1>hello world</h1>
            </>
        )
        }
}