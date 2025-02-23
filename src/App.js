import './App.css';
import { useState } from  "react";
import MostrarCep from './MostrarCep';
import Banner from './Banner';
import Banner2 from './Banner footer';
import Footer from './Footer';

function App() {

  const [cepInput, setCepInput] = useState(''); // Estado pro valor digitado no input
  const [endereco, setEndereco] = useState({}); // Estado pro resultado da busca

// Função pra lidar com a mudança no input
  const handleCepChange = (evento) => {
    const valor = evento.target.value;
    // Só aceita números e limita a 8 dígitos
    if (/^\d{0,8}$/.test(valor)) {
      setCepInput(valor);
    }
  };

// Função pra buscar o CEP quando o botão é clicado
const manipularEndereco = (evento) => {
  evento.preventDefault(); // Previne comportamento padrão, caso esteja num form

  if (cepInput && cepInput.length === 8) {
    fetch(`https://viacep.com.br/ws/${cepInput}/json/`)
      .then((response) => response.json())
      .then((dados) => {
        if (dados.erro) {
          alert('CEP não encontrado!');
          setEndereco({});
        } else {
          setEndereco({
            cep: dados.cep,
            logradouro: dados.logradouro,
            bairro: dados.bairro,
            localidade: dados.localidade,
            uf: dados.uf,
            regiao: dados.regiao,
            ibge: dados.ibge,
            ddd: dados.ddd,
          });
        }
      })
      .catch((error) => {
        console.error('Erro ao buscar CEP:', error);
        alert('Erro ao consultar o CEP. Tente novamente.');
      });
  } else {
    alert('Digite um CEP válido com 8 dígitos!');
  }
};


  return (
    <div className="App">
      <header className="App-header">
        <Banner/>
        <input 
          className="cep"
          placeholder="Digite apenas os números do CEP"
          value={cepInput}
          onChange={handleCepChange}
        />  
        <button className="btn" onClick={ manipularEndereco }>Buscar</button>
        <MostrarCep endereco={endereco}/>
        <Banner2/> 
        <Footer/>
      </header>
      {/* {Object.keys(endereco).length > 0 && <MostrarCep endereco={endereco} />} */}
    </div>
  );
}

export default App;
