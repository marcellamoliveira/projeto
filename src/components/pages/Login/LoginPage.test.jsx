import React from 'react';
import { render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom'
import LoginPage from './LoginPage';
import RegisterPage from '../registers/RegisterPage';

describe('Login', () => {

    test('Usuario foi dado, depois esvaziado, mostra mensagem "Usuário Obrigatório"', async() => {
        render(<BrownserRouter><LoginPage/></BrownserRouter>);
        const usuario = screen.getByTestId('usuario');
        await userEvent.type(usuario, "anyValue");
        await userEvent.clear(usuario);
        const requiredError= screen.queryByTestId('usuario-required');
        expect(requiredError).not.toBeNull();
    })


    test('Usuário foi dado, não esvaziado, retirar mensagem "Usuário Obrigatório"', async() => {
        render(<BrownserRouter><LoginPage/></BrownserRouter>);
        const usuario = screen.getByTestId('usuario');
        await userEvent.type(usuario, "anyValue");
        const requiredError= screen.queryByTestId('usuario-required');
        expect(requiredError).toBeNull();
    })


    /*test('Usuario foi dado, não mudado, retirar mensagem "Usuário Obrigatório"', async() => {
        render(<BrownserRouter><LoginPage/></BrownserRouter>);
        const requiredError= screen.queryByTestId('usuario-required');
        expect(requiredError).toBeNull();
    })*/


    test('Senha foi dada, se esvaziada, mostrar mensagem "Senha Obrigatória"', async() => {
        render(<BrownserRouter><LoginPage/></BrownserRouter>);
        const password = screen.getByTestId('password');
        await userEvent.type(password, "anyValue");
        await userEvent.clear(password);
        const requiredError= screen.queryByTestId('password-required');
        expect(requiredError).not.toBeNull();
    })

    
    test('Senha foi dada, sem ser esvaziado, retirar mensagem "Senha Obrigatória"', async() => {
        render(<BrownserRouter><LoginPage/></BrownserRouter>);
        const password = screen.getByTestId('password');
        await userEvent.type(password, "anyValue");
        const requiredError= screen.queryByTestId('password-required');
        expect(requiredError).toBeNull();
    })


    //form = conjunto email e senha
    test('Form foi dado porém é inexistente, desabilitar botão Login', () => {
        render(<BrownserRouter><LoginPage/></BrownserRouter>);
        const loginButton = screen.getByTestId('login-button');
        expect(loginButton).not.toBeDisabled();
    })


    //given form valid, then enable login button
    /*test('Form dado existente, mostrar botão Login', () => {
        render(<BrownserRouter><LoginPage/></BrownserRouter>);
        const email = screen.getByTestId('email');
        userEvent.type(email, "valid$email.com")
        const password = screen.getByTestId('password');
        userEvent.type(password, "anyValue");
        const loginButton = screen.getByTestId('login-button');
        expect(loginButton).toBeDisabled();
    })*/


    //given use clicks on register button, then go to register page
    test('Apertar botão de registrar, ir para a página de registro', async () => {
        render(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<LoginPage/>}/>
                <Route path='/register' element={<RegisterPage/>}/>
            </Routes>
        </BrowserRouter>
        );
        const registerButton= screen.getByTestId('register-button');
        await userEvent.click(registerButton);
        expect(window.location.pathname).toEqual('/register');
    })





    test('Email dado, depois esvaziado, mostrar mensagem de erro', async() => {
        render(<BrownserRouter><LoginPage/></BrownserRouter>);
        const usuario = screen.getByTestId('usuario');
        await userEvent.type(usuario, "anyValue");
        await userEvent.clear(usuario);
        const requiredErrorUsuario= screen.queryByTestId('usuario-required');
        expect(requiredErrorUsuario).not.toBeNull();
        render(<BrownserRouter><LoginPage/></BrownserRouter>);
        const password = screen.getByTestId('password');
        await userEvent.type(password, "anyValue");
        await userEvent.clear(password);
        const requiredErrorPassword= screen.queryByTestId('password-required');
        expect(requiredErrorPassword).not.toBeNull();
    })

    

})