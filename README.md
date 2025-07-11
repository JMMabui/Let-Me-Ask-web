# 📚 NLW Agents - Web

Aplicação web de perguntas e respostas com Inteligência Artificial, construída com React, Tailwind e outras tecnologias modernas.

> Desenvolvido durante o **NLW (Next Level Week)** da [Rocketseat](https://rocketseat.com.br).

---

[![Deploy na Vercel](https://img.shields.io/badge/deploy-Vercel-000?logo=vercel&style=for-the-badge)](https://vercel.com)
[![License: MIT](https://img.shields.io/badge/license-MIT-green.svg?style=for-the-badge)](./LICENSE)
![Status](https://img.shields.io/badge/status-em%20desenvolvimento-yellow?style=for-the-badge)

---

## ✨ Tecnologias Utilizadas

- ⚛️ **React**
- 🟦 **TypeScript**
- ⚡ **Vite**
- 🎨 **Tailwind CSS**
- 🪝 **React Hook Form**
- ✅ **Zod**
- 📦 **React Query**
- 📅 **Day.js**
- 🎯 **Lucide Icons**
- 🧩 **Radix UI**

---

## 📂 Estrutura do Projeto

```
src/
├── components/   # Componentes reutilizáveis
├── http/         # Configuração de requisições (ex: axios)
├── lib/          # Utilitários e configurações
├── pages/        # Páginas principais da aplicação
├── app.tsx       # Componente raiz da aplicação
└── main.tsx      # Ponto de entrada
```

---

## 🚀 Como Rodar o Projeto

1. **Clone o repositório:**
   ```sh
   git clone https://github.com/seu-usuario/nlw-agents-web.git
   cd nlw-agents-web
   ```

2. **Instale as dependências:**
   ```sh
   npm install
   ```

3. **Inicie o servidor de desenvolvimento:**
   ```sh
   npm run dev
   ```

4. **Acesse no navegador:** [http://localhost:5173](http://localhost:5173)

---

## 📜 Scripts úteis

- `npm run dev` — ambiente de desenvolvimento
- `npm run build` — build de produção
- `npm run preview` — preview da build

---

## 🌐 Deploy

A aplicação pode ser hospedada facilmente no Vercel:

1. Faça login com sua conta GitHub
2. Importe este repositório
3. Adicione a variável `VITE_API_URL` no painel de ambiente
4. Clique em Deploy

---

## 🧪 Exemplo de `.env.example`

Crie um arquivo `.env.example` na raiz com o seguinte conteúdo:

```
VITE_API_URL=http://localhost:33
```

---

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](./LICENSE) para mais detalhes.