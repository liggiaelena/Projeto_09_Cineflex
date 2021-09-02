import "./PageFinished.css"

export default function PageFinished(){
    return(
        <div className="page">
            <h2>Pedido feito com sucesso!</h2>
            <div className="purchase-information">
                <h3>Filme e sessão</h3>
                <p>Enola Holmes</p>
                <p>Enola Holmes</p>
            </div>
            <div className="purchase-information">
                <h3>Filme e sessão</h3>
                <p>Enola Holmes</p>
                <p>Enola Holmes</p>
            </div>
            <div className="purchase-information">
                <h3>Filme e sessão</h3>
                <p>Enola Holmes</p>
                <p>Enola Holmes</p>
            </div>
            <button className="button-seats">Voltar pra Home</button>
        </div>
    );
}