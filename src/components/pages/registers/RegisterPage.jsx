import React, { useState } from 'react';
import './RegisterPage.css'
import { useNavigate } from 'react-router-dom';
import { CiUser ,CiLock } from "react-icons/ci";



function RegisterPage() {
  const [conta, setForm] = useState({ 
    usuario: {
      hasChanged: false,
      value:""
    },
    password: {
      hasChanged: false,
      value:""
    }
  })

  const validar = (usuario) => {
    return /^[^\s]+$/.test(usuario);
  }

  const navigate = useNavigate();
  const irLogar = () => {  
    navigate('/');          
  }


  return (
    <div className='background'>

      <div className='pacotelogin'>
          <div className='interfacelogin'>

              <form action=''>
                <h1>CADASTRE-SE</h1>

                <div className='caixadeentrada'>
                    <input 
                    type="text" 
                    placeholder='USUÁRIO' required 
                    value={conta.usuario.value}
                    onChange={event => setForm({...conta, usuario: {hasChanged: true, value: event.target.value}})} 
                    //data_testid='usuario'
                    />
                    <CiUser className='icone' />
                    { conta.usuario.hasChanged && !conta.usuario.value && <div className='obrigatorio'>Usuário obrigatório</div>}
                    { conta.usuario.hasChanged && conta.usuario.value && !validar(conta.usuario.value) && <div className='obrigatorio'>Usuário inválido</div>}
                </div>

                <div className='caixadeentrada'>
                    <input 
                    type="password" 
                    placeholder='SENHA' required
                    value={conta.password.value}
                    onChange={event => setForm({...conta, password: {hasChanged: true, value: event.target.value}})} 
                    //data_testid='password'
                    />
                    <CiLock className='icone' />
                    <div className='informaçao'>
                      { conta.password.hasChanged && !conta.password.value && <div className='obrigatorio'>Senha obrigatória</div>}
                      { conta.password.hasChanged && conta.password.value && !validar(conta.password.value) && <div className='obrigatorio'>Senha inválida-Sem Espaçamento</div>}
                    </div>
                </div>

                 <button 
                    type="button" 
                    className='solid'
                    //data-testid="cadastro-button"
                    disabled={ !conta.password.value}
                    onClick={irLogar}>
                      Entrar
                  </button>

                 
              </form>
          </div>
    </div>

        <div className='pacotebemvindo'>
          <div className='interfacebemvindo'>
            <h1>BEM VINDO</h1>
              <div className='infos'>
                  <p>Mantenha sua lista de tarefas sempre atualizada para melhor gestão de afazeres.  </p>
              </div>
                  <div className='registro'>
                      <p>Já tem conta?</p>
                      <button 
                      type="button" 
                      className='criarconta'
                      href='./'
                      //data-testid='register-button'
                      onClick={irLogar}>
                        Fazer Login
                      </button>
                  </div>
          </div>
      </div>
    </div>
  );
}
      

export default RegisterPage;
