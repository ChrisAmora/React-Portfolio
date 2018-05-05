import React from 'react';
import axios from 'axios';

export default class Form extends React.Component {
  state = {
    name: '',
    text: '',
    email: ''
  }
  submitButton = React.createRef();
  onFormSubmit = (e) => {
    e.preventDefault();
    return axios.post(`/email`, { name: this.state.name, emailer: this.state.email, text: this.state.text })
    .then(response => {
      this.submitButton.current.disabled = true;
      this.submitButton.current.textContent = 'Obrigado!';
      this.setState(({name: '', text: '', email: ''}))
    })
  }
  onInputChange = (e) => {
    this.setState( { [e.target.name]: e.target.value} )
  }
  render() {
    return (
      <div className="book">
      <div className="book__form">
        <form onSubmit={this.onFormSubmit} action="#" className="form">
            <h2 className="form__title comment" id='form'>
              // Deixe Um Recado!
            </h2>
          <div className="form__group">
            <input value={this.state.name} onChange={this.onInputChange} name='name' type="text" className="form__input" placeholder="Nome" id="name" pattern=".{1,100}" maxLength="100" required />
            <label htmlFor="name" className="form__label">Nome</label>
          </div>
          <div className="form__group">
            <input value={this.state.email} onChange={this.onInputChange} name='email' type="email" className="form__input" placeholder="Email" id="email" pattern=".{1,100}" maxLength="100" required />
            <label htmlFor="email" className="form__label">Email</label>
          </div>
          <div className="form__group">
            <textarea value={this.state.text} onChange={this.onInputChange} name='text' type="text" className="form__input form__input--textarea" placeholder="Mensagem" id="text" required maxLength="1000" />
            <label htmlFor="text" className="form__label">Mensagem</label>
          </div>
          <div className="form__group">
            <button ref={this.submitButton} id="submitbutton" className="button button--2">Enviar &rarr;</button>
          </div>
          <div className='form__contact'>
            <a className="form__contact__email" href="mailto:christiano.amora@gmail.com">christiano.amora@gmail.com</a>
          </div>
        </form>
      </div>
    </div>
    );
  }
}

