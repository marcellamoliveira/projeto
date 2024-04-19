

const Filtro = ({filtro, setFiltro, setOrdem}) => {
    return(
        <div className="filtro">
            <h2>Filtrar:</h2>
                <div className="filtro-opçoes">
                    <div>
                        <p>Classificação:</p>
                        <select className='classes' value={filtro} onChange={(e) => setFiltro(e.target.value)}>
                            <option value="todas">Todas</option>
                            <option value="feito">Completas</option>
                            <option value="livres">Incompletas</option>
                        </select>
                    </div>
                <div className="ordemalfabetica">
                    <div>
                        <p>Ordem alfabética:</p>
                        <button className="alfabetico" onClick={() => setOrdem("Asc")}>Asc</button>
                        <button className="alfabetico" onClick={() => setOrdem("Desc")}>Desc</button>
                    </div>
                </div>
                </div>
        </div>
    )
}
export default Filtro