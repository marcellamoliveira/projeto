import React from 'react'

const Barra = ({busca, setBusca}) => {
    return(
        <div className="busca">
            <h2>Pesquisar:</h2>
            <input className='barradepesquisa'
                type='texto' 
                value={busca} 
                onChange={(e) => setBusca(e.target.value)} 
                placeholder="Pesquise seu to do.."/>
        </div>
    )
}
export default Barra