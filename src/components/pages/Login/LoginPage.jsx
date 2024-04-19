
import React, { useState } from 'react';
import './LoginPage.css'
import { useNavigate } from 'react-router-dom';
import { CiUser ,CiLock } from "react-icons/ci";
//npm install react-icons


//{ form.usuario.hasChanged && !isEmailValid(form.usuario.value) && <div data-testeid="usuario-invalid">Usuário é inválido</div>}
/* <button 
      type="button" 
      className='clear'
      data-testid="recover-password-button"
      disabled={!isEmailValid(form.usuario.value)}>
        Recuperar Senha
      </button>
      
<button 
      type="button" 
      className='solid'
      data-testid="login-button"
      disabled={!isEmailValid(form.usuario.value) || !form.password.value}>
        Entrar
      </button>
      
      */ 
function LoginPage() {
  const [form, setForm] = useState({ 
    usuario: {
      hasChanged: false,
      value:""
    },
    password: {
      hasChanged: false,
      value:""
    }
  })

  const navigate = useNavigate();
  const goToRegisterPage = () => {
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
                      value={form.usuario.value}
                      onChange={event => setForm({...form, usuario: {hasChanged: true, value: event.target.value}})} 
                      data_testid='usuario'/>
                      <CiUser className='icone' />
                      { form.usuario.hasChanged && !form.usuario.value && <div className='obrigatorio' data-testeid="usuario-required">Usuário obrigatório</div>}
                      </div>
                      

                      
                      

                      <div className='caixadeentrada'>
                          <input 
                          type="password" 
                          placeholder='SENHA' required
                          value={form.password.value}
                          onChange={event => setForm({...form, password: {hasChanged: true, value: event.target.value}})} 
                          data_testid='password'/>
                          <CiLock className='icone' />
                          { form.password.hasChanged && !form.password.value && <div className='obrigatorio' data-testeid="password-required">Senha obrigatória</div>}
                          
                      </div>
                      
                      
                      
                      
                        <button 
                        type="submit" 
                        className='solid'
                        data-testid="login-button"
                        disabled = {!form.password.value}>
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
                      onClick={goToRegisterPage}>
                        Criar conta
                      </button>
                  </div>
          </div>
      </div>
    </div>
  );
}

export default LoginPage;


/*const Login = () => {
    return (
      <div className='pacote'>
        <div className='interfacelogin'>
          <form action=''>
            <h1>LOGIN</h1>
  
            <div className='caixadeentrada'>
              <input type='text' placeholder='USUÁRIO' required />
              <CiUser className='icone' />
            </div>
  
            <div className='caixadeentrada'>
              <input type='password' placeholder='******' required />
              <CiLock className='icone' />
            </div>
  
            <button type='submit'>Entrar</button>
          </form>
        </div>

        <div className='interfacebemvindo'>
          <div className='infos'>
            <h1>BEM VINDO</h1>
            <p>Crie sua lista de tarefas para organizar seus afazeres e gerenciar melhor seu tempo.</p>
          </div>
          <div className='registro'>
              <p>Novo Login</p>
              <a className='criarconta' href='#'>Criar conta</a>
          </div>
        </div>

      </div>
    )
  }
  
  export default Login
*/