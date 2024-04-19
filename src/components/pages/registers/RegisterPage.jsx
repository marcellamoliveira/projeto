import React, { useState } from 'react';
import './RegisterPage.css'
import { useNavigate } from 'react-router-dom';
import { CiUser ,CiLock } from "react-icons/ci";



function RegisterPage() {
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
  const goToLoginPage = () => {  //goToLoginPage
    navigate('/');          //navigate('/');
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
                    <div className='informaçao'>
                      { form.password.hasChanged && !form.password.value && <div className='obrigatorio' data-testeid="password-required">Senha obrigatória</div>}
                    </div>
                </div>

                 <button 
                    type="button" 
                    className='solid'
                    data-testid="cadastro-button"
                    disabled={ !form.password.value}>
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
                      data-testid='register-button'
                      onClick={goToLoginPage}>
                        Fazer Login
                      </button>
                  </div>
          </div>
      </div>
    </div>
  );
}
      

export default RegisterPage;

/*

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
                      { form.usuario.hasChanged && !form.usuario.value && <div data-testeid="usuario-required">Usuário obrigatório</div>}
                      </div>
                      

                      
                      

                      <div className='caixadeentrada'>
                          <input 
                          type="password" 
                          placeholder='SENHA' required
                          value={form.password.value}
                          onChange={event => setForm({...form, password: {hasChanged: true, value: event.target.value}})} 
                          data_testid='password'/>
                          <CiLock className='icone' />
                          <div className='informaçao'>
                            { form.password.hasChanged && !form.password.value && <div data-testeid="password-required">Senha obrigatória</div>}
                          </div>
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

*/