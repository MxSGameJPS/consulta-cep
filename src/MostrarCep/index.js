import "./MostrarCep.css";

const MostrarCep = ({ endereco }) => {
    return (
        <div className="mostrar-cep">
            <ul>
                <li>CEP: {endereco.cep}</li>
                <li>Logradouro: {endereco.logradouro || "Não informado"}</li>                
                <li>Bairro: {endereco.bairro || "Não informado"}</li>
                <li>Cidade: {endereco.localidade}</li>
                <li>UF: {endereco.uf}</li>
                <li>Região: {endereco.regiao}</li>
                <li>IBGE: {endereco.ibge}</li>                
                <li>DDD: {endereco.ddd}</li>                          
            </ul>
        </div>
    );
};

export default MostrarCep;
