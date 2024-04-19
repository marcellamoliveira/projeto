import React from 'react'
import { useState } from 'react'
import { CiSquareCheck, CiEdit, CiTrash } from "react-icons/ci";

const Todo = ({ todo, apagarTodo, editarTodo, todoFeito }) => {
    const [editando, setEditando] = useState(false);
    const [novoTexto, setNovoTexto] = useState(todo.texto);
    
    const [novaDescricao, setNovaDescricao] = useState(todo.descricao);

    //função de salvar o todo depois de editado
    const salvarEdicao = () => {
        editarTodo(todo.id, novoTexto, novaDescricao);
        setEditando(false);
    };
    

    return (
    <div className='todo' style={{ textDecoration: todo.feito ? "line-through" : "" }}>
        <div className='icone_edicao'>
            <button className='check' onClick={() => todoFeito(todo.id)}><CiSquareCheck className='certinho'/></button>
         </div>
        {editando ? (
            //caso mudou algo
            <div className='editor'>
                <input className='nomeTodo' value={novoTexto} onChange={(e) => setNovoTexto(e.target.value)} />
               
                <input className='descricaoTodo' descricao={novaDescricao} onChange={(e) => setNovaDescricao(e.target.descricao)} />
                <button onClick={salvarEdicao}>Salvar</button>
            </div>
            ) : (
            //caso não mudar
            <div className='content'>
                <p>{todo.texto}</p>
                
                <p className='descricao'>{todo.descricao}</p> 
            </div>
            )
        }
            <div>
                {!editando && <button className='editar' onClick={() => setEditando(true)}><CiEdit className='lapis'/></button>}
                
                <button className='apagar' onClick={() => apagarTodo(todo.id)}><CiTrash className='lixeira'/></button>
            </div>
        </div>
    );
};
export default Todo