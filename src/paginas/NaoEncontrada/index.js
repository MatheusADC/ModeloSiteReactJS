import estilos from './NaoEncontrada.module.css';

function NaoEncontrada() {
    return (
        <div className={estilos.error}>
            <img src="/images/react.png" alt="Pagina nao encontrada" />
            <div>
                <h1>Página não encontrada</h1>
                <p>
                    Lamentavelmente não reconhecemos o link ou a página que você deseja acessar. Favor revisar a página anterior.
                </p>
            </div>
        </div>
    )
}

export default NaoEncontrada;