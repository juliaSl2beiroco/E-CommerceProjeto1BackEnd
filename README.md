# Projeto 1 – Programação Web Back-End  

Este projeto foi desenvolvido como parte da disciplina **Programação Web Back-End** e tem como objetivo implementar uma **biblioteca de acesso a SGBDs utilizando Node.js**.  

A temática escolhida foi **E-commerce**, com foco no armazenamento e busca de informações de **usuários, vendedores e produtos** em uma loja virtual.  

---

## 🚀 Funcionalidades  

- Representação de entidades do banco de dados em **classes JavaScript**.  
- Métodos para **inserção, busca e deleção** de dados no MongoDB.  
- **Validação de dados** antes de salvar:  
  - **Usuário:** nome apenas com letras, CPF com 11 números (ou `X`), email válido e senha mínima de 4 caracteres.  
  - **Vendedor:** nome apenas com letras, CNPJ com 14 números, email válido.  
  - **Produto:** título obrigatório, preço numérico positivo e descrição mínima.  
- **Verificação de duplicidade** de CPF e CNPJ antes da inserção.  
- **Tratamento de exceções** com registro em arquivo de log (`log.txt`).  
- Casos de uso implementados:  
  - Cadastrar usuário  
  - Cadastrar vendedor  
  - Postar produto  
  - Associar produto a vendedor  

  ## Tecnologias Utilizadas  

- **Node.js**  
- **MongoDB** (com driver oficial `mongodb`)  
- **MongoDB Compass** para visualização dos dados 

## ▶️ Como Executar  

1. **Clone este repositório**  
   ```bash
   git clone https://github.com/seu-usuario/projeto-ecommerce.git


2. Acesse a pasta do projeto
  ```bash
  cd projeto-ecommerce

3. Instale a dependência necessária (driver oficial do MongoDB)
  ```bash
  npm install mongodb

4. Configure a conexão com o banco de dados
  - Abra o arquivo database.js.
  - Substitua a URL de conexão pelo seu endereço local ou do MongoDB Atlas, por exemplo:

    ```js
    const uri = "mongodb://localhost:27017";
    const dbName = "ecommerce";

5. Execute o projeto
  ```js
  node index.js

6. Visualize os dados no banco de dados
