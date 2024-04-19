
import React, {useState} from 'react'

const Novo = ({novoTodo}) => {
    const [value, setValue] = useState("");
    
    const [descricao, setDescricao] = useState("");

    const submitar = (e) => {
        e.preventDefault()
        if(!value) return;//aqui eu poderia colocar || !descricao mas a descricao não é obrigatoria
        setValue("")
        
        setDescricao("")
        novoTodo(value, descricao)
        
    }
    return(
        <div className='novo'>
            <h2>Criar Tarefa:</h2>
            <form onSubmit={submitar}>
                <input 
                    type='texto' 
                    placeholder='Digite o titulo:' 
                    value= {value}
                    onChange={(e) => setValue(e.target.value)}
                />
                
                <input
                    type='descricao'
                    placeholder='Escreva a descrição do seu to do:'
                    value = {descricao}
                    onChange={(e) => setDescricao(e.target.value)}
                />
                <button type='submit'>Criar Tarefa</button>
            </form>
        </div>
    )
}
export default Novo