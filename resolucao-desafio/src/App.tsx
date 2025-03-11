//? Leitura de Arquivo JSON:
// // * Carregar a lista de tarefas de um arquivo JSON. Cada tarefa deve ser representada por um objeto (tipado, porque estamos usando typescript - você pode criar um arquivo tarefa.ts em um diretório como src/types para criar o tipo) com os campos id, titulo, descricao, categoria e isChecked.

//? Exibição das Tarefas:
// // * Listar todas as tarefas, mostrando id, titulo, categoria e o status da tarefa (se está "Concluída" ou "Pendente").

//? Filtragem das Tarefas:
// // * Filtrar e exibir as tarefas que estão concluídas (ou seja, aquelas com isChecked = true).
// // * Filtrar e exibir as tarefas de uma categoria específica fornecida como argumento (por exemplo, "Estudos").

//? Contagem das Tarefas:
// // * Contar o número total de tarefas.
// // * Contar o número de tarefas que estão concluídas.
// // * Usar a função reduce para contar a quantidade de tarefas concluídas e pendentes.

//? Resumo das Tarefas:
// // * Criar e exibir um resumo das tarefas utilizando a função map. O resumo deve conter apenas o titulo da tarefa seguido de seu status ("Concluída" ou "Pendente").

//? Uso de Tipagem:
// // * Definir uma interface Tarefa em TypeScript que especifique os tipos de dados esperados para cada campo da tarefa.
// // * Tipar todas as funções e variáveis corretamente, utilizando o sistema de tipagem do TypeScript para garantir segurança e clareza no código.

//-----------------

//? Funções Esperadas:
// //  * listarTarefas(tarefas: Tarefa[]): Exibe todas as tarefas.
// //  * resumoDasTarefas(tarefas: Tarefa[]): Retorna um resumo das tarefas (titulo + status).
// //  * tarefasConcluidas(tarefas: Tarefa[]): Retorna apenas as tarefas concluídas.
// //  * filtrarPorCategoria(tarefas: Tarefa[], categoria: string): Filtra as tarefas por categoria.
// // * contarTarefasConcluidas(tarefas: Tarefa[]): Retorna o número de tarefas concluídas.
// // * contarTotalTarefas(tarefas: Tarefa[]): Retorna o número total de tarefas.
// // * contarConcluidasEPendentes(tarefas: Tarefa[]): Usa a função reduce para contar as tarefas concluídas e pendentes.

//? -----------

import tasks from "./data/tarefas.json";

const App = () => {
   interface Tarefa {
      id: number;
      titulo: string;
      descricao: string;
      categoria: string;
      isChecked: boolean;
   }

   const tarefas: Tarefa[] = tasks;

   //? Lista de Tarefas:
   //? 1. Estudar TypeScript - Estudos [Pendente]
   //? 2. Fazer compras - Lazer [Concluída]
   //? 3. Trabalhar no projeto - Trabalho [Pendente]
   //? 4. Ler um livro - Lazer [Pendente]
   //? 5. Aula de Álgebra Linear - Estudos [Concluída]

   function listarTarefas(tarefas: Tarefa[]): void {
      console.log(
         "Lista de Tarefas:\n" +
            tarefas
               .map(
                  (tarefa) => `${tarefa.id}. ${tarefa.titulo} - ${tarefa.categoria} [${tarefa.isChecked ? "Concluída" : "Pendente"}]`
               ).join("\n")
      );
   }

   //? Resumo das Tarefas:
   //? Estudar TypeScript - Pendente
   //? Fazer compras - Concluída
   //? Trabalhar no projeto - Pendente
   //? Ler um livro - Pendente
   //? Aula de Álgebra Linear - Concluída

   function resumoDasTarefas(tarefas: Tarefa[]): void {
      console.log(
         "Resumo das Tarefas:\n" +
            tarefas
               .map(
                  (tarefa) => `${tarefa.titulo} - ${tarefa.isChecked ? "Concluída" : "Pendente"}`
               ).join("\n")
      );
   }

   //? Tarefas Concluídas:
   //? 2. Fazer compras - Lazer [Concluída]
   //? 5. Aula de Álgebra Linear - Estudos [Concluída]

   function tarefasConcluidas(tarefas: Tarefa[]): void {
      const tarefasConcluidas = tarefas.filter(
         (tarefa) => tarefa.isChecked === true
      );

      console.log(
         "Tarefas Concluídas:\n" +
            tarefasConcluidas
               .map(
                  (tarefa) => `${tarefa.id}. ${tarefa.titulo} - ${tarefa.categoria} [${tarefa.isChecked ? "Concluído" : "Pendente"
                     }]`
               ).join("\n")
      );
   }

   //? Tarefas na categoria "Estudos":
   //? 1. Estudar TypeScript - Estudos [Pendente]
   //? 5. Aula de Álgebra Linear - Estudos [Concluída]

   function filtrarPorCategoria(tarefas: Tarefa[], categoria: string): void {
      const tarefasFiltradas = tarefas.filter(
         (tarefa) => !categoria || tarefa.categoria.toLowerCase() === categoria.toLowerCase()
      );

      console.log(
         'Tarefas na categoria "Estudos": \n' +
            tarefasFiltradas
               .map(
                  (tarefa) => `${tarefa.id}. ${tarefa.titulo} - ${tarefa.categoria} [${tarefa.isChecked ? "Concluído" : "Pendente"
                     }]`
               ).join("\n")
      );
   }

   //? Número de Tarefas Concluídas: 2

   // function contarTarefasConcluidas(tarefas: Tarefa[]) {
   //    const somaTarefasConcluidas = tarefas.filter(tarefa => tarefa.isChecked === true)

   //    console.log("Número de Tarefas Concluídas: " + somaTarefasConcluidas.length)
   // }

   function contarTarefasConcluidas(tarefas: Tarefa[]) {
      const somaTarefasConcluidas = tarefas.reduce(function (accumulator, tarefa) {
         return accumulator + (tarefa.isChecked ? 1 : 0);
      },
      0);
      console.log("Número de Tarefas Concluídas: " + somaTarefasConcluidas);
   }

   //? Número Total de Tarefas: 5


   function contarTotalTarefas(tarefas: Tarefa[]): void {
      console.log("Número Total de Tarefas:" + tarefas.length);
   }

   /*
   function contarTotalTarefas(tarefas: Tarefa[]): void {
      const totalTarefas = tarefas.reduce(function(accumulator, tarefa){
         return accumulator + (tarefa.id ? 1: 0)
      }, 0);
      console.log("Número Total de Tarefas:" + totalTarefas);
   }
   */

   //? Tarefas Concluídas: 2, Tarefas Pendentes: 3

   function contarConcluidasEPendentes(tarefas: Tarefa[]) {
      const totalConcluida = tarefas.reduce(function (accumulator, tarefa) {
         return accumulator + (tarefa.isChecked ? 1 : 0);
      }, 0);
      const totalPendente = tarefas.reduce(function (accumulator, tarefa) {
         return accumulator + (tarefa.isChecked ? 0 : 1);
      }, 0);
      console.log(`Tarefas Concluídas: ${totalConcluida}, Tarefas Pendentes: ${totalPendente}`);
   }

   listarTarefas(tasks);
   resumoDasTarefas(tasks);
   tarefasConcluidas(tasks);
   filtrarPorCategoria(tasks, "estudos");
   contarTarefasConcluidas(tasks);
   contarTotalTarefas(tasks);
   contarConcluidasEPendentes(tasks);

   return (
      <div className="w-screen h-screen bg-zinc-600 flex justify-center p-6">
         <h1></h1>
      </div>
   );
};

export default App;