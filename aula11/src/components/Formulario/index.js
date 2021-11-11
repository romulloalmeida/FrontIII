import {Component} from 'react'
import {Formik , Form, Field} from 'formik'
import Swal from 'sweetalert2'
import './style.scss'

export default class Formulario extends Component{
    handleSubmit = ({nome, telefone, email}) =>{
        if(nome === ''){
            Swal.fire({
                title: 'Aconteceu algo',
                icon: 'error',
                text: 'ih rapaz'
            });
        }
        else{
            Swal.fire({
                title: 'Deu certo',
                icon: 'success',
                html: `Seu nome é: ${nome}, seu telefone é: ${telefone} e seu email é ${email}`
            });
        }
    }

    render(){
        return(
            <>
            <Formik initialValues={{nome:'', telefone: 0, email:''}} onSubmit={this.handleSubmit}>
            <Form>
                <Field placeholder="Insira seu nome" type="text" name="nome" id="nome" className="form-control" />
                <Field type="text" name="telefone" id="telefone" className="form-control" />
                <Field type="email" name="email" id="email" />
                <button type="submit">Enviar</button>
            </Form>
            </Formik>
            </>
        )
    }
}