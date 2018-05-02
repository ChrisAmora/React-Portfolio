import React from 'react';

export default () => (
    <React.Fragment>
      <header className='header'>
        <h1 className='header__title'>alert('Bem vindo ao meu site!')</h1>
        <h3 className='header__text'><span className='case'>switch</span> <span className='symbol'>(</span><span className='text'>'time'</span><span className='symbol'>)</span>
        <span className='symbol'>&#123;</span>
        <span className='case'>case</span> <span className='text'>'Profissão'<span className='symbol'>:</span></span>
        <span className='console'>console</span>.<span className='func'>log</span><span className='symbol'>(</span><span className='text'>'Web Developer'</span><span className='symbol'>)</span>;
        <span className='case'>case</span> <span className='text'>'Linguagem Favorita':</span>
        <span className='console'>console</span>.<span className='func'>log</span><span className='symbol'>(</span><span className='text'>'Javascript'</span><span className='symbol'>)</span>;
        <span className='case'>case</span> <span className='text'>'Library':</span>
        <span className='console'>console</span>.<span className='func'>log</span><span className='symbol'>(</span><span className='text'>'ReactJS'</span><span className='symbol'>)</span>;
        <span className='case'>case</span> <span className='text'>'Server':</span>
        <span className='console'>console</span>.<span className='func'>log</span><span className='symbol'>(</span><span className='text'>'Node.js'</span><span className='symbol'>)</span>;
        <span className='case'>default</span>: <span className='console'>console</span>.<span className='func'>log</span>(<span className='text'>'Full Stack, MERN'</span><span className='symbol'>)</span>;
        <span className='symbol'>&#125;</span>
        </h3>
      </header>
    </React.Fragment>
);

