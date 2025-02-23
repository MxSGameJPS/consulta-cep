# Consulta CEP

Um buscador de CEP simples e funcional, construído com React, que consulta a API ViaCEP para exibir informações detalhadas de endereços com base em um CEP informado.

## Descrição
Este projeto permite que os usuários insiram um CEP (com 8 dígitos) em um input, cliquem no botão "Buscar" e vejam informações como logradouro, bairro, cidade, estado, região, IBGE e DDD. No topo, há um banner promocional para divulgar serviços de front-end e UI design, destacando a criação de sites responsivos e designs impactantes.

## Demonstração
[Insira aqui um link pra demo, se tiver hospedado online, ou veja a screenshot abaixo.]

![Screenshot do Consulta CEP](https://github.com/MxSGameJPS/consulta-cep/blob/main/imagem_2025-02-23_123637866.png?raw=true)

## Funcionalidades
- **Busca de CEP**: Digite um CEP válido (ex.: 01001000) e veja os detalhes do endereço em tempo real.
- **Validação de entrada**: Aceita apenas 8 dígitos numéricos e exibe alertas para CEPs inválidos ou não encontrados.
- **Interface responsiva**: Design que se adapta a dispositivos mobile, tablet e desktop.
- **Banner promocional**: Exibe um banner no topo para promover serviços de front-end e UI design.

## Pré-requisitos
- Node.js (versão 18 ou superior, recomendada a LTS mais recente)
- npm ou yarn
- Um editor de código (recomendado: Visual Studio Code)

## Instalação
1. Clone este repositório:
```
   git clone https://github.com/MxSGameJPS/consulta-cep.git
```
2. Entre na pasta do projeto:
```
   cd consulta-cep
```
3. Instale as dependências:

```
   npm install
```
4. Rode o projeto localmente:
```
   npm start
```

## Uso
- Acesse http://localhost:3000 no seu navegador.
- Digite um CEP válido no campo de input e clique em "Buscar" para visualizar os dados do endereço.
- Navegue pelo banner promocional para saber mais sobre os serviços de front-end e UI design.

## Skills Utilizadas (Tecnologias)

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
Para criar os componentes interativos e gerenciar o estado da aplicação (usando hooks como useState).

![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
Para estilização responsiva, incluindo media queries e classes para layout.

![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
Para lógica de manipulação de eventos, chamadas à API e tratamento de dados.


- API ViaCEP: Para consultar e integrar dados de CEPs em tempo real.

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
Para estruturação semântica da interface.

## Estrutura do Projeto
- /src/components: Contém os componentes React, como Banner, InputCEP, e MostrarCep.
- /src/assets: Imagens e arquivos estáticos, como a banner.png.
- /src/styles: Arquivos CSS para estilização do banner, inputs e lista de resultados.

## Como Contribuir
- Este é um projeto pessoal, mas se quiser contribuir com melhorias (ex.: novos recursos, correções de bugs), siga estas etapas:

## Faça um fork deste repositório.
- Crie uma branch para suas alterações:
- git checkout -b minha-alteracao
- Faça commit das suas mudanças:
- git commit -m "Descreva sua alteração"

## Envie para o repositório remoto:
- git push origin minha-alteracao
- Abra um pull request.

Licença
Este projeto está sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.

## Autor
Saulo Pavanello 

## 🌎 Conecte-se comigo  
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=flat&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/saulopavanello/) 
[![Portfólio](https://img.shields.io/badge/Portfolio-000000?style=flat&logo=web&logoColor=white)](https://github.com/MxSGameJPS) 
[![Instagram](https://img.shields.io/badge/Instagram-E4405F?style=flat&logo=instagram&logoColor=white)](https://www.instagram.com/mxsgamejps/)


Agradecimentos
Agradeço à API ViaCEP por fornecer os dados de CEP, às bibliotecas React e às comunidades open-source que inspiraram este projeto.
