# Adapt Educa

## Integrantes da Equipe
* **[ARTHUR VINICIUS GOMES CAMPOS]** - [12401528]
* **[BIANCA ALVES DA SILVA]** - [12401935]
* **[CARLOS HENRIQUE SIMOES NETO]** - [12400416]
* **[MARIA CLARA DE AQUINO SOUZA]** - [12401242]
* **[MARIA EDUARDA OLIVEIRA LAVORATO ANDRADA]** - [12400777]
* **[SARAH ELISE ALCANTARA DE FREITAS]** - [12401838]

---

## Descrição do Sistema
O **Adapt Educa** é uma plataforma desenvolvida para gerar conteúdos adaptados para alunos com dificuldade de aprendizagem. O sistema busca resolver o problema de combate a exclusão escolar gerada por conteúdos padronizados que ignoram estudantes com TDAH, TEA e dificuldades de aprendizagem. Como os professores carecem de tempo para personalizar materiais individualmente, a plataforma automatiza essa adaptação para evitar o baixo desempenho e a desmotivação dos alunos, por meio de funcionalidades como Conteúdos padronizados prejudicam alunos com TDAH e TEA, gerando desmotivação. Como os professores carecem de tempo para personalização individual, a plataforma usa Inteligência Artificial para adaptar os materiais automaticamente. Assim, o aluno aprende de forma personalizada enquanto professores e responsáveis monitoram a evolução juntos.

---

## Stack Utilizada

### **Frontend**
* **[Tecnologia/Framework]** ( React.js / Vue.js / HTML & CSS)
* **[Biblioteca auxiliar]** ( Bootstrap )

### **Backend**
* **[Linguagem/Framework]** ( Node.js com Express / Python com Django )
* **[Autenticação]** (ex: JWT / Firebase Auth ??)

### **Banco de Dados**
* **[Tipo/Banco]** (MySQL)

---

## Como Executar o Projeto

Siga os passos abaixo para rodar a aplicação localmente em sua máquina.

### **Pré-requisitos**
Antes de começar, você vai precisar ter instalado em sua máquina:
* **[Ferramenta 1]** (ex: Node.js versão LTS)
* **[Ferramenta 2]** (ex: Docker / Git / SGBD do banco)

### **1. Clonar o Repositório**
```bash
git clone https://github.com[seu-usuario]/adapt-educa.git
cd adapt-educa
```

### **2. Configurar o Backend**
1. Acesse a pasta do servidor:
   ```bash
   cd backend
   ```
2. Instale as dependências:
   ```bash
   [comando de instalação] # ex: npm install ou pip install -r requirements.txt
   ```
3. Crie um arquivo `.env` na raiz do backend baseado no arquivo `.env.example` e preencha as variáveis de ambiente (banco de dados, chaves de API).
4. Execute as migrações do banco de dados (se aplicável):
   ```bash
   [comando de migração] # ex: npm run db:migrate ou python manage.py migrate
   ```
5. Inicie o servidor:
   ```bash
   [comando para rodar] # ex: npm start ou python manage.py runserver
   ```

### **3. Configurar o Frontend**
1. Abra um novo terminal e acesse a pasta do cliente:
   ```bash
   cd frontend
   ```
2. Instale as dependências:
   ```bash
   [comando de instalação] # ex: npm install ou yarn
   ```
3. Inicie a aplicação:
   ```bash
   [comando para rodar] # ex: npm run dev ou npm start
   ```
4. O projeto abrirá automaticamente no seu navegador pelo endereço `http://localhost:[porta]`.
