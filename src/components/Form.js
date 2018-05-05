import React from 'react';

export default () => {
  const formHandler = (e) => {
    e.preventDefault();
    const button = document.querySelector('#submitbutton');
    console.log(document.querySelectorAll('.form__input'));
    button.disabled = true;
    button.textContent = 'Obrigado!';
  };
  return (
    <div className="book">
    <div className="book__form">
      <form onSubmit={formHandler} action="#" className="form">
          <h2 className="form__title comment" id='form'>
            // Deixe Um Recado!
          </h2>
        <div className="form__group">
          <input type="text" className="form__input" placeholder="Nome" id="Nome" pattern=".{5,60}" maxLength="60" />
          <label htmlFor="Nome" className="form__label">Nome</label>
        </div>
        <div className="form__group">
          <input type="email" className="form__input" placeholder="Email" id="email" pattern=".{5,60}" maxLength="60" required />
          <label htmlFor="email" className="form__label">Email</label>
        </div>
        <div className="form__group">
          <textarea type="text" className="form__input form__input--textarea" placeholder="Mensagem" id="text" required maxLength="300" />
          <label htmlFor="text" className="form__label">Mensagem</label>
        </div>
        <div className="form__group">
          <button id="submitbutton" className="button button--2">Enviar &rarr;</button>
        </div>
      </form>
    </div>
  </div>
  );
};

