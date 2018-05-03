import React from 'react';

export default () => (
    <div className="book">
      <div className="book__form">
        <form action="#" className="form">
            <h2 className="heading-secondary" id='form'>
              // Deixe Um Recado!
            </h2>
          <div className="form__group">
            <input type="text" className="form__input" placeholder="Full Name" id="name" required />
            <label htmlFor="name" className="form__label">Full Name</label>
          </div>
          <div className="form__group">
            <input type="email" className="form__input" placeholder="Email Adress" id="email" required />
            <label htmlFor="email" className="form__label">Email Adress</label>
          </div>
          <div className="form__group">
            <textarea type="text" className="form__input form__input--textarea" placeholder="Deixe Seu Recado" id="text" required />
            <label htmlFor="text" className="form__label">Recado</label>
          </div>
          <div className="form__group">
            <button className="btn btn--green">Next Step &rarr;</button>
          </div>
        </form>
      </div>
    </div>
);

