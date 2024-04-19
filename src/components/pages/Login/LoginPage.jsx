
import React, { useState } from 'react';
import './LoginPage.css'
import { useNavigate } from 'react-router-dom';
import { CiUser ,CiLock } from "react-icons/ci";


function LoginPage() {
  //iniciação do usuario e sua senha
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

  //função de ir da página de login para a página de registro
  const navigate = useNavigate();
  const criarConta = () => {
    navigate('/register');
  }

  
  return (
    <div className='background'>

      <div className='pacotelogin'>
          <div className='interfacelogin'>
              <form action=''>
                  <h1>LOGIN</h1>

                  <div className='caixadeentrada'>
                      <input 
                      type="text" 
                      placeholder='USUÁRIO' required 
                      value={conta.usuario.value}
                      onChange={event => setForm({...conta, usuario: {hasChanged: true, value: event.target.value}})} 
                      data_testid='usuario'/>
                      <CiUser className='icone' />
                      { conta.usuario.hasChanged && !conta.usuario.value && <div className='obrigatorio' data-testeid="usuario-required">Usuário obrigatório</div>}
                  </div>
                  
                  <div className='caixadeentrada'>
                      <input 
                      type="password" 
                      placeholder='SENHA' required
                      value={conta.password.value}
                      onChange={event => setForm({...conta, password: {hasChanged: true, value: event.target.value}})} 
                      data_testid='password'/>
                      <CiLock className='icone' />
                      { conta.password.hasChanged && !conta.password.value && <div className='obrigatorio' data-testeid="password-required">Senha obrigatória</div>}
                  </div>
                      
                      
                      
                      
                  <button 
                      type="submit" 
                      className='solid'
                      data-testid="login-button"
                      disabled = {!conta.password.value}>
                        Entrar
                  </button>
              </form>
          </div>
        </div>

      <div className='pacotebemvindo'>
          <div className='interfacebemvindo'>
              <h1>BEM VINDO</h1>

              <div className='infos'>
                  <p>Crie sua lista de tarefas para organizar seus afazeres e gerenciar melhor seu tempo.</p>
              </div>

              <div className='registro'>
                  <p>Novo Login</p>

                  <button 
                    type="button" 
                    className='criarconta'
                    href='./'
                    data-testid='register-button'
                    onClick={criarConta}>
                      Criar conta
                  </button>
              </div>
          </div>
      </div>

    </div>
  );
}

export default LoginPage;