# API REST com Node.js, TypeScript, Bun e Swagger

Este projeto é uma API REST desenvolvida com **Node.js**, **TypeScript** e **Bun**, e documentada com **Swagger**. Ele fornece uma estrutura simples para criar endpoints, com suporte para rotas GET e POST.

## Recursos

- **Node.js + TypeScript**: Para um código limpo e escalável.
- **Bun**: Para maior velocidade no gerenciamento de pacotes e execução.
- **Express**: Framework minimalista para criação de APIs.
- **Swagger**: Documentação interativa no padrão OpenAPI.

---

## Pré-requisitos

Antes de começar, certifique-se de ter o **Bun** instalado. Caso não tenha, siga a [documentação oficial](https://bun.sh).

---

## Instalação

1. Clone este repositório:
```bash
   git clone https://github.com/seu-usuario/nome-do-repositorio.git
   cd nome-do-repositorio
```

2 - Instale as dependências:
```bash
   bun install
```

3 - Inicie o servidor:
```bash
    bun dev
```
 O servidor estará disponível em `http://localhost:3000`.
 Acesse `http://localhost:3000/api-docs` para ver a documentação da API.

## Estrutura do projeto
    ```
├── src
│   ├── routes
│   │   └── example.route.ts   # Rotas da API
│   ├── app.ts                 # Configuração principal do app
│   └── tests
│       └── example.test.ts   # Testes unitários
├── swagger.json              # Configuração da documentação Swagger 
├── package.json              # Configuração do projeto
└── tsconfig.json             # Configuração do TypeScript
```