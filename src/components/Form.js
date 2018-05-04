import React from 'react';

export default () => (
    <div className="book">
      <div className="book__form">
        <form action="#" className="form">
            <h2 className="form__title comment" id='form'>
              // Deixe Um Recado!
            </h2>
          <div className="form__group">
            <input type="text" className="form__input" placeholder="Nome" id="Nome" required />
            <label htmlFor="Nome" className="form__label">Nome</label>
          </div>
          <div className="form__group">
            <input type="email" className="form__input" placeholder="Email" id="email" required />
            <label htmlFor="email" className="form__label">Email</label>
          </div>
          <div className="form__group">
            <textarea type="text" className="form__input form__input--textarea" placeholder="Mensagem" id="text" required />
            <label htmlFor="text" className="form__label">Mensagem</label>
          </div>
          <div className="form__group">
            <span className="button button--2">Enviar &rarr;</span>
          </div>
        </form>
      </div>
    </div>
);

