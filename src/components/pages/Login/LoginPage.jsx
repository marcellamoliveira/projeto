
import React, { useState } from 'react';
import './LoginPage.css'
import { useNavigate } from 'react-router-dom';
import { CiUser ,CiLock } from "react-icons/ci";
import { HiOutlineUser, HiOutlineLockClosed } from "react-icons/hi2";


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

 

  const validar = (usuario) => {
    return /^[^\s]+$/.test(usuario);
  }

  //função de ir da página de login para a página de registro
  const navigate = useNavigate();
  const irRegistrar = () => {
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
                      //data_testid='usuario'
                      />
                      <HiOutlineUser className='icone' />
                      { conta.usuario.hasChanged && !conta.usuario.value && <div className='obrigatorio' >Usuário obrigatório</div>}
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
                      <HiOutlineLockClosed className='icone' />
                      { conta.password.hasChanged && !conta.password.value && <div className='obrigatorio' data-testeid="password-required">Senha obrigatória</div>}
                      { conta.password.hasChanged && conta.password.value && !validar(conta.password.value) && <div className='obrigatorio'>Senha inválida-Sem Espaçamento</div>}
                  </div>
                      
                      
                      
                      
                  <button 
                      type="submit" 
                      className='solid'
                      //data-testid="login-button"
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
                    //data-testid='register-button'
                    onClick={irRegistrar}>
                      Criar conta
                  </button>
              </div>
          </div>
      </div>

    </div>
  );
}

export default LoginPage;