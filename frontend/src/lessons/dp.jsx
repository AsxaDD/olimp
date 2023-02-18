import Topbar from "../baza/Topbar";
import "../css/style.css";
import React from "react";
import MyTabs from "../baza/MyTabs";
import Question from "../baza/question";
import SyntaxHightlighterPython from "../baza/CodeBlocksPython";

const fibonacciMemoization = `
    # Вычисление n-ого числа Фибоначчи с помощью мемоизации

    # В данном словаре будут хранится результаты вызова функции \`fib\`
    mem_table = {}
    
    def fib(n):
        if n == 1 or n == 2:
            return 1
        
        if not n in mem_table:
            # Если до этого мы не считали результат \`fib\` для n
            # то добавляем этот результат в таблицу мемоизации
            mem_table[n] = fib(n - 1) + fib(n - 2) 

        return mem_table[n]
`;

const fibonacciInbuiltMemoization = `
    # Вычисление n-ого числа с помощью встроенной в Python мемоизации

    import functools

    # functools.cache предоставляет специальный декоратор для эффективной мемоизации функций
    # однако для его работы требуется, чтобы ВСЕ аргументы функции могли быть хэшируемыми
    # Например: list не хэшируется, вместо него необходимо использовать tuple
    @functools.cache
    def fib(n):
        if n == 1 or n == 2:
            return 1
        
        return fib(n - 1) + fib(n - 2)
`;

const DP = () => {
  return (
    <div>
      <Topbar></Topbar>

      <div style={{ maxWidth: 950, textAlign: "left", margin: "0 auto" }}>
        <h1 style={{ maxWidth: 950, marginBottom: 0, marginTop: 40 }}>Темы:</h1>
      </div>

      <div className="main__cont">
        <MyTabs themes={["Основные понятия", "Мемоизация", "Рекурсия"]}>
          <div className="flex__cont__for__articles">
            <div className="article">
              <div className="text">
                <h1>Основные понятия</h1>
                <p>
                  Динамическое программирование - способ решения сложных задач
                  путём разбиения их на более простые подзадачи. Этот способ в
                  основном применяется к задачам, которые можно явно разделить
                  на конкретные подчасти, покрывающие своим решением всю задачу.
                </p>
                <p>
                  Как правило, результаты выполнения этих "подчастей"
                  объединяются с помощью некого алгоритма, в результате которого
                  получается решение.
                </p>

                <h1>Основная идея</h1>
                <p>
                  Оптимальная подструктура в динамическом программировании
                  означает, что оптимальное решение подзадач меньшего размера
                  может быть использовано для решения исходной задачи. К
                  примеру, кратчайший путь в графе из одной вершины (обозначим
                  s) в другую (обозначим t) может быть найден так: сначала
                  считаем кратчайший путь из всех вершин, смежных с s, до t, а
                  затем, учитывая веса рёбер, которыми s соединена со смежными
                  вершинами, выбираем лучший путь до t (через какую вершину
                  лучше всего пойти).
                </p>
                <p>
                  В общем случае мы можем решить задачу, в которой присутствует
                  оптимальная подструктура, проделывая следующие три шага.
                  Разбиение задачи на подзадачи меньшего размера. Нахождение
                  оптимального решения подзадач рекурсивно, проделывая такой же
                  трехшаговый алгоритм. Использование полученного решения
                  подзадач для конструирования решения исходной задачи.
                  Подзадачи решаются делением их на подзадачи ещё меньшего
                  размера и т. д., пока не приходят к тривиальному случаю
                  задачи, решаемой за константное время (ответ можно сказать
                  сразу). К примеру, если нам нужно найти n!, то тривиальной
                  задачей будет 1! = 1 (или 0! = 1).
                </p>

                <h1>Примеры задач</h1>
                <p>
                  <ul>
                    <li>
                      <a
                        className="link"
                        href="https://en.wikipedia.org/wiki/Knapsack_problem"
                      >
                        Задача о рюкзаке (Knapsack problem)
                      </a>
                    </li>

                    <li>
                      <a
                        className="link"
                        href="https://en.wikipedia.org/wiki/Fibonacci_number"
                      >
                        Задача о вычислении чисел Фибоначчи
                      </a>
                    </li>

                    <li>
                      <a
                        className="link"
                        href="https://en.wikipedia.org/wiki/Matrix_chain_multiplication"
                      >
                        Задача о порядке перемножения матриц (Matrix chain
                        multiplication)
                      </a>
                    </li>

                    <li>
                      <a
                        className="link"
                        href="https://en.wikipedia.org/wiki/Longest_common_subsequence"
                      >
                        Задача о набольшей общей подпоследовательности (Longest
                        common subsequence)
                      </a>
                    </li>
                  </ul>
                </p>
              </div>
            </div>
          </div>

          <div>
            <div className="flex__cont__for__articles">
              <div className="article">
                <div className="text">
                  <h1>Основные понятия</h1>
                  <p>
                    Меомизация (от англ. "memory" - память и "optimization" -
                    оптимизация) - сохранение результатов выполнения функций
                    (или других исполняемых объектов) для последующего
                    использования в прогамме.
                  </p>
                  <p>
                    Позволяет за счёт использования памяти ускорить выполнение
                    программы. Часто применяется в динамическом программировании
                    для хранения промежуточных данных.
                  </p>

                  <h1>Примеры</h1>
                  <p>Все примеры приведены на языке программирования Python.</p>
                  <SyntaxHightlighterPython code={fibonacciMemoization} />
                  <SyntaxHightlighterPython
                    code={fibonacciInbuiltMemoization}
                  />
                </div>
              </div>
            </div>
          </div>
        </MyTabs>
      </div>
    </div>
  );
};

export default DP;
