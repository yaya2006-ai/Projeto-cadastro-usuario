# 🧾 Cadastro de Usuários

Projeto completo com **Front-end e Back-end** desenvolvido para praticar integração entre interface e API.

---

## 🚀 Tecnologias utilizadas

### Front-end:

* React
* HTML, CSS, JavaScript
* Axios (para chamadas à API)

### Back-end:

* Node.js
* Express
* MongoDB
* dotenv

---

## 📂 Estrutura do projeto

```
cadastro-usuario/
│
├── backend/     # API Node.js (rotas, controllers, banco)
│
└── frontend/    # Interface React (formulários e telas)
```

---

## ⚙️ Como executar o projeto

### 🔹 Clonar o repositório:

```bash
git clone https://github.com/YasminRibeiroDev/cadastro-usuario.git
```

### 🔹 Entrar na pasta:

```bash
cd cadastro-usuario
```

---

### 🔹 Instalar e rodar o MongoDB no Windows/VS Code:

1. Baixe e instale o **MongoDB Community Server**:
   👉 [https://www.mongodb.com/try/download/community](https://www.mongodb.com/try/download/community)

2. Após instalar, abra o terminal e inicie o serviço MongoDB:

```bash
mongod
```

3. Em outro terminal, abra o shell do MongoDB:

```bash
mongo
```

4. Para **ver todos os bancos de dados existentes**, digite:

```javascript
show dbs
```

> 💡 Dica: Você também pode usar o **MongoDB Compass** (interface gráfica) para visualizar os dados.

---

### 🔹 Exemplo de arquivo `.env`

Crie um arquivo chamado `.env` dentro da pasta `backend/` com o conteúdo abaixo:

#### Para usar o **MongoDB local**:

```
MONGO_URI=mongodb://localhost:27017/cadastro-usuario
PORT=5000
```

#### Para usar o **MongoDB Atlas (nuvem)**:

```
MONGO_URI=mongodb+srv://<usuario>:<senha>@<cluster>.mongodb.net/cadastro-usuario
PORT=5000
```

> Substitua `<usuario>`, `<senha>` e `<cluster>` pelos dados da sua conta do Atlas.

---

### 🔹 Rodar o back-end:

```bash
cd backend
npm install
npm start
```

### 🔹 Rodar o front-end:

Abra outro terminal:

```bash
cd frontend
npm install
npm run dev
```

---

## 💡 Funcionalidades

* Cadastro de novos usuários
* Edição e exclusão de registros
* Comunicação entre front e back via API
* Interface simples e responsiva

---

## 👩‍💻 Autora

**Yasmin Ribeiro**
📧 Contato: [yasminribeirofeltrin@gmail.com]
🌐 GitHub: [https://github.com/YasminRibeiroDev](https://github.com/yaya2006-ai)
