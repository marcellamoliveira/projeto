import React from 'react'
import { useState } from 'react'
import { CiSquareCheck, CiEdit, CiTrash } from "react-icons/ci";
import { HiOutlinePencilSquare, HiOutlinePencil, HiOutlineTrash, HiOutlineCheck } from "react-icons/hi2";
import { IoIosAddCircle } from "react-icons/io";
import { FaRegSquare, FaRegSquareCheck } from "react-icons/fa6";


const Todo = ({ todo, apagarTodo, editarTodo, todoFeito }) => {
    const [editando, setEditando] = useState(false);
    const [novoTexto, setNovoTexto] = useState(todo.texto);
    const [novaDescricao, setNovaDescricao] = useState(todo.descricao);

    //função de salvar o todo depois de editado
    const salvarEdicao = () => {
        editarTodo(todo.id, novoTexto, novaDescricao);
        setEditando(false);
    };

    
    const [mudou, setMudou] = React.useState(false);
    
    

    

    // Função para botar um certinho no botão de feito 
    const mudando = () => {
        todoFeito(todo.id); // Chama a função todoFeito para marcar/desmarcar a tarefa como feita
        setMudou(!mudou); // Alterna o estado de checked
    };
    

    return (
    <div className='todo' style={{ textDecoration: todo.feito ? "line-through" : "" }}>
    
        <div>
            <button className='check'onClick={mudando}>
                {mudou ? <FaRegSquareCheck className='feito' /> : <FaRegSquare className='naoFeito' />}
            </button>
        </div>
        
       
        {editando ? (
            //caso mudou algo
            <div className='editor'>
                <div className='caixaedicao'>
                 <input className='novonome' value={novoTexto} onChange={(e) => setNovoTexto(e.target.value)} />
                </div>
                <div className='caixaedicao'>
                    <input className='novodescricao' value={novaDescricao} onChange={(e) => setNovaDescricao(e.target.value)} />
                </div>
                <button className='salvar' onClick={salvarEdicao}>Salvar</button>
            </div>
            ) : (
            //caso não mudar
            <div className='content'>
                <p>{todo.texto}</p>
                <p className='descricao'>{todo.descricao}</p> 
            </div>
            )
        }
        {

        }
            <div className='icones'>
                {!editando && <button className='editar' onClick={() => setEditando(true)}><HiOutlinePencil  className='lapis'/></button>}
                
                <button className='apagar' onClick={() => apagarTodo(todo.id)}><HiOutlineTrash className='lixeira'/></button>
            </div>
        </div>
    );
};
export default Todo