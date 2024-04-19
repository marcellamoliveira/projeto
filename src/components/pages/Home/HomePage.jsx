import React from 'react'
import './HomePage.css'
import {useState} from 'react'
import Barra from './Helper/Barra'
import Filtro from './Helper/Filtro'
import Todo from './Helper/Todo'
import Novo from './Helper/Novo'
import { useNavigate } from 'react-router-dom';
import { CiLogout } from "react-icons/ci";




function HomePage(){

    //iniciação
    const[todos, setTodos] = useState([
        /*{    Exemplo:
                id: 1,
                texto: "Criar funcionalidade X no sistema",
                categoria: "Trabalho",
                descricao
                feito: false, 
        },*/
        {
            id: 1,
            texto: "Criar funcionalidade X no sistema",
            descricao: "ir a",
            feito: false,
        },
        {
            id: 2,
            texto: "Criar funcionalidade X no sistema",
            descricao: "ir a",
            feito: false,
        },
        {
            id: 3,
            texto: "Criar funcionalidade X no sistema",
        
            descricao: "ir a",
            feito: false,
        },
        {
            id: 4,
            texto: "Criar funcionalidade X no sistema",
        
            descricao: "ir a",
            feito: false,
        }
    ]);


    //criar to do
    const novoTodo =(texto, descricao) => {
        const conjunto = [
            ...todos, 
            {
                id: Math.floor(Math.random() * 100),
                texto,
            
                descricao,
                feito: false,
            },
        ];
        setTodos(conjunto);
    };


    /*const updateTodo = (todoid, novoTodo) => {
        setTodos(prev.map(item =>(item.id === todo.id ? novoTodo : item)));
    }; */

    //apagar um todo
    const apagarTodo = (id) => {
        const conjunto = [...todos]
        const averiguados = conjunto.filter(todo => todo.id !== id ? todo : null);
        setTodos(averiguados)
    };


    //check do to do
    const todoFeito = (id) => {
        const conjunto = [...todos]
        conjunto.map((todo) => todo.id === id ? todo.feito = !todo.feito : todo)
        setTodos(conjunto)
    }

    //editar um to do
    const editarTodo = (id, novoTexto, novaCategoria, novaDescricao) => {
        const novoTodos = todos.map(todo =>
            todo.id === id ? { ...todo, texto: novoTexto, descricao: novaDescricao } : todo
        );
        setTodos(novoTodos);
    };

    const [busca, setBusca] = useState("");         //barra de busca
    const [filtro, setFiltro] = useState("todas")   //filtro das to do
    const [ordem, setOrdem] = useState("Asc")       //ordem das todos
    
    const navigate = useNavigate();    //importação da função de mudança de página
    //função do logout
    const logout = () => {
        navigate('/');
    }

    /*const ref = useRef(null);
    
    const handleClick = () => {
        ref.current?.scrollIntoView({behavior: 'smooth'});
    };*/

    return (
        <div className='home'>
            <div classNome='interfacelista'>

                <div className="esquerda">
                    <Barra busca={busca} setBusca={setBusca}/>
                    <Filtro filtro={filtro} setFiltro={setFiltro} setOrdem={setOrdem}/>
                    <div className='logout'>
                        <button onClick={logout}>Logout<CiLogout className='iconelogout'/></button>
                    </div>
                </div>

                <div className='direita'>
                    <div className='direitacima'>   
                        <h1>Lista de Tarefas</h1>
                    </div>

                    <div className='direitameio'>
                        <div style={{tesxtAlign: 'center'}}>
                            <div className='todo-list'>
                                {todos
                                .filter((todo) => //filtro 
                                    filtro === "todas"                        //se no filtro tá todas
                                    ? true                                    //declara true
                                    : filtro === "feito"                      // senão se o filtro tá em feito
                                    ? todo.feito                              //retorna as todos feitas
                                    : !todo.feito)                            //senão retorna as todos não feitas
                                .filter((todo) => todo.texto.toLowerCase().includes(busca.toLowerCase()))  //representação da busca
                                .sort((a, z) =>  //ordem
                                    ordem === "Asc" 
                                    ? a.texto.localeCompare(z.texto) 
                                    : z.texto.localeCompare(a.texto))
                                .map((todo) => (   //particularidade de cada to do
                                    <Todo 
                                    key={todo.id} 
                                    todo={todo} 
                                    apagarTodo={apagarTodo} 
                                    todoFeito={todoFeito}
                                    editarTodo={editarTodo} />
                                ))}
                            </div>
                        </div>
                    </div>
                

                    <div className='direitabaixo'>
                        <Novo novoTodo={novoTodo}/>
                    </div>
                    
                </div>

                
            
        </div>  
    </div>
    );
}
export default HomePage;
