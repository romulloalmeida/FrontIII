import { Component } from 'react';
import { Formik, Form, Field } from 'formik';
import Swal from 'sweetalert2';
import api from './services/api';
import './App.scss';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      repositorios: {}
    }
  }

  async componentDidMount() {
    this.handleSubmit({cep: "02555090"})
  }

  handleSubmit = async ({ cep }) => {
    if (cep !== '') {
      try {
        const response = await api.get(`${cep}`);
        this.setState({ repositorios: response.data });
      } catch (error) {
        Swal.fire({
          title: error,
          icon: 'error',
          text: error
        });
      }
    }
  }

  render() {
    return (
      <>
        <main>
          <div className="col-md-4 col-sm-6 my-3 container text-center">
            <h2>Procure um Cep</h2>
            <Formik initialValues={{ cep: '' }} onSubmit={this.handleSubmit}>
              <Form>
                <Field placeholder="Insira o cep" required type="text" name="cep" id="cep" className="form-control" />
                <button type="submit" className="btn btn-primary my-4">Pesquisar</button>
              </Form>
            </Formik>
            <ul>
              <li>{this.state.repositorios.cep}</li>
              <li>{this.state.repositorios.uf}</li>
              <li>{this.state.repositorios.complemento}</li>
            </ul>
          </div>
        </main>
      </>
    );
  }
}