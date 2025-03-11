Explorar conceitos de **tipagem**, **funções de array** como `map`, `reduce` e `filter`, além de **manipulação de arquivos JSON** usando **TypeScript**.

---

### Trabalhando com JSON

Nesse exercício você vai ter uma lista de tarefas, cada uma contendo as seguintes informações:

- `id`: um número identificador único da tarefa.
- `titulo`: o título ou nome da tarefa.
- `descricao`: uma descrição detalhada da tarefa.
- `categoria`: a categoria à qual a tarefa pertence (Exemplo: "Estudos", "Trabalho", "Lazer").
- `isChecked`: um valor que indica se a tarefa está concluída ou não.

```json
[
  { 
	  "id": 1, 
	  "titulo": "Estudar TypeScript", 
	  "descricao": "Revisar map, filter e reduce.", 
	  "categoria": "Estudos", 
	  "isChecked": false },
  { 
	  "id": 2, 
	  "titulo": "Fazer compras", 
	  "descricao": "Comprar frutas e vegetais.", 
	  "categoria": "Lazer", 
	  "isChecked": true 
  },
  { 
	  "id": 3, 
	  "titulo": "Trabalhar no projeto", 
	  "descricao": "Finalizar API do cliente.", 
	  "categoria": "Trabalho", 
	  "isChecked": false 
	  },
  { 
	  "id": 4, 
	  "titulo": "Ler um livro", 
	  "descricao": "Terminar o livro de ficção.", 
	  "categoria": "Lazer", 
	  "isChecked": false 
  },
  { 
	  "id": 5, 
	  "titulo": "Aula de Álgebra Linear", 
	  "descricao": "Assistir à aula gravada.", 
	  "categoria": "Estudos", 
	  "isChecked": true 
  }
]
```

Esse arquivo json está em `src\data\tarefas.json` e ele representa, o que seria a resposta do backend ao consultar um endpoint `getAllTasks` por exemplo:

```sass
frontend → requisição → /getAllTasks → backend → banco de dados
frontend ← resposta ← /getAllTasks ← backend ← banco de dados
```

A requisição HTTP para o endpoint `/getAllTasks` no backend seria, na prática, do tipo **GET**. Esse tipo de requisição é utilizado quando o objetivo é **obter** dados do servidor, como a lista de tarefas:

```xml
GET /getAllTasks HTTP/1.1
Host: seu-servidor.com
```

Isso é o que o navegador envia ao backend para solicitar os dados (neste caso, a lista de tarefas). A URL `/getAllTasks` é o endpoint que o backend expõe para fornecer essa informação.

O frontend, usando JavaScript, pode fazer essa requisição HTTP utilizando a função `fetch`, que é uma API interna do navegador para fazer requisições HTTP **assíncronas.**

> **Por que Requisição HTTP Assíncona?**
> 
> 
> A requisição é assíncrona porque, ao fazer uma requisição HTTP (como a com o `fetch`), o navegador não precisa esperar a resposta do servidor para continuar executando o restante do código. Isso significa que o JavaScript pode continuar fazendo outras coisas enquanto espera pela resposta da API, sem bloquear a interface do usuário ou a execução de outras tarefas.
> 
> Se tu quiser saber mais de funções assíncronas:
> 
> [Introducing asynchronous JavaScript - Learn web development | MDN](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Async_JS/Introducing)
> 

Então no front a gente teria algo do tipo:

```jsx
fetch('https://seu-servidor.com/getAllTasks', {
  method: 'GET',
})
  .then(response => response.json()) // Converte a resposta em JSON
  .then(data => {
    // Aqui, você pode fazer algo com os dados, como renderizar as tarefas na tela
    console.log(data);
  })
  .catch(error => console.error('Erro ao obter tarefas:', error));

```

*Enfim, isso tudo só pra tu ter uma base do que acontece na prática no front. Essa é a base pra entender como funciona a comunicação frontend x backend, que é feita por meio do protocolo HTTP e com o uso de JSON no corpo da requisição e resposta (geralmente)…*

Como a gente não faz uma requisição em si então você pode fazer algo do tipo:

```tsx
const carregarTarefas = (): Tarefa[] => {
  const dados = fs.readFileSync("src/data/tarefas.json", "utf-8");
  return JSON.parse(dados);
};
```

---

## Voltando ao Exercício

**Objetivo:**

Este exercício tem como objetivo explorar conceitos de **tipagem**, **funções de array** como `map`, `reduce` e `filter`, além de **manipulação de arquivos JSON** usando **TypeScript**.

### Descrição:

Você tem uma lista de tarefas que recebe do seu “backend” (no caso ta tudo no arquivo json já - estamos simulando), cada uma contendo as seguintes informações:

- `id`: um número identificador único da tarefa.
- `titulo`: o título ou nome da tarefa.
- `descricao`: uma descrição detalhada da tarefa.
- `categoria`: a categoria à qual a tarefa pertence (Exemplo: "Estudos", "Trabalho", "Lazer").
- `isChecked`: um valor que indica se a tarefa está concluída ou não.

A lista de tarefas está armazenada em um arquivo JSON (`tarefas.json`). Sua tarefa é implementar um programa em TypeScript que forneça as seguintes funcionalidades:

### Requisitos:

1. **Leitura de Arquivo JSON:**
    - Carregar a lista de tarefas de um arquivo JSON. Cada tarefa deve ser representada por um objeto (*tipado, porque estamos usando typescript - você pode criar um arquivo `tarefa.ts` em um diretório como `src/types` para criar o tipo*) com os campos `id`, `titulo`, `descricao`, `categoria` e `isChecked`.
2. **Exibição das Tarefas:**
    - Listar todas as tarefas, mostrando `id`, `titulo`, `categoria` e o status da tarefa (se está "Concluída" ou "Pendente").
3. **Filtragem das Tarefas:**
    - Filtrar e exibir as tarefas que estão concluídas (ou seja, aquelas com `isChecked = true`).
    - Filtrar e exibir as tarefas de uma categoria específica fornecida como argumento (por exemplo, "Estudos").
4. **Contagem das Tarefas:**
    - Contar o número total de tarefas.
    - Contar o número de tarefas que estão concluídas.
    - Usar a função `reduce` para contar a quantidade de tarefas concluídas e pendentes.
5. **Resumo das Tarefas:**
    - Criar e exibir um resumo das tarefas utilizando a função `map`. O resumo deve conter apenas o `titulo` da tarefa seguido de seu status ("Concluída" ou "Pendente").
6. **Uso de Tipagem:**
    - Definir uma interface **Tarefa** em TypeScript que especifique os tipos de dados esperados para cada campo da tarefa.
    - Tipar todas as funções e variáveis corretamente, utilizando o sistema de tipagem do TypeScript para garantir segurança e clareza no código.

### Funções Esperadas:

- **`listarTarefas(tarefas: Tarefa[])`**: Exibe todas as tarefas.
- **`tarefasConcluidas(tarefas: Tarefa[])`**: Retorna apenas as tarefas concluídas.
- **`filtrarPorCategoria(tarefas: Tarefa[], categoria: string)`**: Filtra as tarefas por categoria.
- **`contarTarefasConcluidas(tarefas: Tarefa[])`**: Retorna o número de tarefas concluídas.
- **`contarTotalTarefas(tarefas: Tarefa[])`**: Retorna o número total de tarefas.
- **`resumoDasTarefas(tarefas: Tarefa[])`**: Retorna um resumo das tarefas (titulo + status).
- **`contarConcluidasEPendentes(tarefas: Tarefa[])`**: Usa a função `reduce` para contar as tarefas concluídas e pendentes.

### Desafio:

1. Utilize **`map`**, **`filter`** e **`reduce`** para implementar as funcionalidades, demonstrando seu domínio dessas funções.
2. Garanta que as funções estejam bem tipadas, utilizando o sistema de tipagem do TypeScript de forma apropriada.

### Estrutura de Arquivos:

- **`src/data/tarefas.json`**: Arquivo JSON com a lista de tarefas.
- **`src/exercicio1.ts`**: Arquivo TypeScript que implementa a solução.

### Exemplo de Entrada e Saída:

**Entrada (tarefas.json):**

```json

[
  { 
	  "id": 1, 
	  "titulo": "Estudar TypeScript", 
	  "descricao": "Revisar map, filter e reduce.", 
	  "categoria": "Estudos", 
	  "isChecked": false },
  { 
	  "id": 2, 
	  "titulo": "Fazer compras", 
	  "descricao": "Comprar frutas e vegetais.", 
	  "categoria": "Lazer", 
	  "isChecked": true 
  },
  { 
	  "id": 3, 
	  "titulo": "Trabalhar no projeto", 
	  "descricao": "Finalizar API do cliente.", 
	  "categoria": "Trabalho", 
	  "isChecked": false 
	  },
  { 
	  "id": 4, 
	  "titulo": "Ler um livro", 
	  "descricao": "Terminar o livro de ficção.", 
	  "categoria": "Lazer", 
	  "isChecked": false 
  },
  { 
	  "id": 5, 
	  "titulo": "Aula de Álgebra Linear", 
	  "descricao": "Assistir à aula gravada.", 
	  "categoria": "Estudos", 
	  "isChecked": true 
  }
]
```

**Saída Esperada:**

Você deve conseguir gerar essa saída (lembre-se usar as funções para isso):

```

Lista de Tarefas:
1. Estudar TypeScript - Estudos [Pendente]
2. Fazer compras - Lazer [Concluída]
3. Trabalhar no projeto - Trabalho [Pendente]
4. Ler um livro - Lazer [Pendente]
5. Aula de Álgebra Linear - Estudos [Concluída]

Resumo das Tarefas:
Estudar TypeScript - Pendente
Fazer compras - Concluída
Trabalhar no projeto - Pendente
Ler um livro - Pendente
Aula de Álgebra Linear - Concluída

Tarefas Concluídas:
2. Fazer compras - Lazer [Concluída]
5. Aula de Álgebra Linear - Estudos [Concluída]

Tarefas na categoria "Estudos":
1. Estudar TypeScript - Estudos [Pendente]
5. Aula de Álgebra Linear - Estudos [Concluída]

Número de Tarefas Concluídas: 2
Número Total de Tarefas: 5

Tarefas Concluídas: 2, Tarefas Pendentes: 3

```

---

Tenta fazer o máximo que você puder sem consultar o gpt ou coisa do tipo.

Usa documentações como:

[JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

[Eloquent JavaScript](https://eloquentjavascript.net/)

[W3Schools.com](https://www.w3schools.com/typescript/)

[The starting point for learning TypeScript](https://www.typescriptlang.org/docs/)

e se travar da uma olhada nums tutoriais da internet, mas basicamente esses conceitos ai são importantes pra poder começar a trabalhar com React.