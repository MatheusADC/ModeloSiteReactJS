import ItemCard from '../ItemCard';
import estilos from './ListagemItens.module.css';
import itens from '../../json/itens.json';

function ListagemItens() {
    return (
        <div className={estilos.listagem}>
            <h1>Listagem de Itens</h1>
            <div className={estilos.carrousel}>
                <ul>
                    {
                        itens.map((elemento) => 
                            (<ItemCard key={elemento.id} dados={elemento} />)
                        )
                    }
                </ul>
            </div>
        </div>
    );
}

export default ListagemItens;