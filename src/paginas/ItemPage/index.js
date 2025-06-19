import { useParams } from 'react-router-dom';
import estilos from './ItemPage.module.css';
import itens from '../../json/itens.json';
import ListagemItens from '../../componentes/ListagemItens';

function ItemPage() {
    const parametros = useParams()

    const item = itens.find((elemento) => (elemento.id === Number(parametros.id)))

    return (
        <div className={estilos.item}>
            <img src="/images/react.png" alt="Detalhes sobre o projeto" />
            <div>
                <h1> {item.descricao} </h1>
                <p>
                    {item.texto}
                </p>
                <small>Autor: {item.autor}</small>
            </div>
            <ListagemItens />
        </div>
    )
}

export default ItemPage;