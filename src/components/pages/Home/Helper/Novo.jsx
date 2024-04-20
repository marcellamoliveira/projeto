
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
            <h2>Criar To Do:</h2>
            <form onSubmit={submitar}>
                <div className='caixaTexto'>
                    <input 
                        type='texto' 
                        placeholder='Digite o título:' 
                        value= {value}
                        onChange={(e) => setValue(e.target.value)}
                    />
                </div>
                
                <div className='caixaDescricao'>
                    <input
                        type='descricao'
                        placeholder='Escreva a descrição do seu to do:'
                        value = {descricao}
                        onChange={(e) => setDescricao(e.target.value)}
                    />
                </div>
                <div className='criar'>
                    <button type='criar'>Adicionar To Do</button>
                </div>
            </form>
        </div>
    )
}
export default Novo