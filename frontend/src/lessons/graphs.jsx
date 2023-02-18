import Topbar from "../baza/Topbar";
import '../css/style.css'
import React from 'react';
import graph1 from '../pics/graph1.png'
import hlst from '../pics/half_stepeni.png'
import depth_search from '../pics/DepthFirstSearchTimestampsRu.svg.png'
import MyTabs from "../baza/MyTabs";
import Question from "../baza/question";
import SyntaxHightlighterCPP from "../baza/CodeBlocksCPP";
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import cpp from 'react-syntax-highlighter/dist/esm/languages/hljs/cpp'
SyntaxHighlighter.registerLanguage('cpp', cpp);

const code1 = `vector<int> adj[N];
`
const code2 = `vector<pair<int,int>> adj[N];
`
const code3 = `for (auto u : adj[s]) {
    //	обработать	вершину	u
}
`
const code4 = `int adj[N][N];
`
const code5 = `vector<pair<int,int>> edges;
`
const code6 = `vector<tuple<int,int,int>> edges;`

const code7 = `vector<int> adj[N];`
const code8 = `bool visited[N];
`
const code9 = `void dfs(int s) {
    if (visited[s]) return;
    visited[s] = true;
    //	обработать	вершину	s
    for (auto u: adj[s]) {
        dfs(u);
    }
}
   `
const code10 = `def dfs(graph, start, visited=None):
    if visited is None:
        visited = set()
    visited.add(start)

    print(start)

    for next in graph[start] - visited:
        dfs(graph, next, visited)
    return visited


graph = {'0': set(['1', '2']),
     '1': set(['0', '3', '4']),
     '2': set(['0']),
     '3': set(['1']),
     '4': set(['2', '3'])}

dfs(graph, '0')`
const code11 = ``
const code12 = ``
const code13 = ``
const code14 = ``


const Graphs = () => {
    return (
    <div>
        <Topbar></Topbar>

        <div style={{ maxWidth: 950, textAlign: 'left', margin: '0 auto'}}>
                <h1 style={{ maxWidth: 950, marginBottom: 0, marginTop: 40}}>Темы:</h1>
        </div>

        <div className="main__cont">
                
                <MyTabs themes={['Основные понятия', 'Поиск в ширину', 'Поиск в глубину', 'Алгоритм Дейкстры',
                    'Алгоритм Беллмана-Форда', 'Алгоритм Флойда-Уоршелла ', 'Топологическая сортировка',
                    'Алгоритм Краскала', 'Алгоритм Прима', 'Расстояние Хэмминга'
                ]}>

                    <div className="flex__cont__for__articles">
                        <div className="article" id="a0">
                            <div className="text">
                                <h1 id='1'>Определение графа</h1>
                                <img alt='' src={graph1} className="picture" ></img>

                                <p>
                                Термин «граф» неоднозначен и это легко обнаружить, сравнивая определения графа, приводимые в разных книгах по теории графов. Однако во всех этих определениях есть и общее. В любом случае граф состоит из двух множеств – множества вершин и множества ребер, причем для каждого ребра указана пара вершин, которые это ребро соединяет. Здесь будут рассматриваться только конечные графы, то есть такие, у которых оба множества конечны. Чтобы получить законченное определение графа того или иного типа, необходимо уточнить еще следующие три момента.
                                </p>

                                <h3>1. Ориентированный или неориентированный?</h3>
                                <p>
                                    Прежде всего нужно договориться, считаем ли мы пары (a, b) и (b, a) различными. Если да, то говорят, что рассматриваются упорядоченные пары (порядок элементов в паре важен), если нет – неупорядоченные. Если ребро e соединяет вершину a с вершиной b и пара считается упорядоченной, то это ребро называется ориентированным, вершина a – его началом, вершина b – концом. Если же эта пара считается неупорядоченной, то ребро называется неориентированным, а обе вершины – его концами. Заметим, что неориентированное ребро, соединяющее a с b, соединяет и b с a, для ориентированного же это неверно. Чаще всего рассматривают графы, в которых все ребра имеют один тип – либо ориентированные, либо неориентированные. В соответствии с этим и весь граф называют ориентированным или неориентированным
                                </p>

                                <h3>2. Кратные ребра</h3>
                                <p>
                                    Следующий пункт, требующий уточнения – могут ли два разных ребра соединять одну и ту же пару вершин? Если да, то говорят, что в графе допускаются кратные ребра. Граф с кратными ребрами называют также мультиграфом.
                                </p>

                                <h3>3. Петли</h3>
                                <p>
                                Ребро, которому поставлена в соответствие пара вида (a, a) , то есть ребро, соединяющее вершину a с нею же самой, называется петлей. Если такие ребра не допускаются, то говорят, что рассматриваются графы без петель.
                                </p>
                                <p>
                                Комбинируя эти три признака, можно получить разные варианты определения понятия графа. Особенно часто встречаются неориентированные графы без петель и кратных ребер. Такие графы называют обыкновенными, или простыми. Если в графе нет кратных ребер, то есть для каждой пары вершин имеется не более одного соединяющего их ребра, то можно просто отождествить ребра с соответствующими парами вершин – считать, что ребро это и есть пара вершин. Чтобы исключить петли, достаточно оговорить, что вершины, образующие ребро, должны быть различны. Это приводит к следующему определению обыкновенного графа.
                                </p>

                                <p>
                                Обыкновенным графом называется пара G = (V, E) , где V – конечное множество, E – множество неупорядоченных пар различных элементов из V. Элементы множества V называются вершинами графа, элементы множества E – его ребрами.
                                </p>

                                <p>
                                Определения других типов графов без кратных ребер легко получить из этого: если заменить слово «неупорядоченных» на «упорядоченных», получится определение ориентированного графа без петель, если убрать слово «различных», получится определение графа с петлями. Ориентированный граф коротко называют орграфом.
                                </p>

                                <p>
                                Сумма степеней всех вершин графа равна 2m, где m – число ребер, поскольку каждое ребро увеличивает степени ровно двух вершин на единицу. Таким образом, сумма степеней вершин всегда четна. Граф называется
                                регулярным, если степени всех его вершин одинаковы (равны некоторой
                                константе d). Граф называется полным, если степень каждой его вершины
                                равна n − 1, т. е. в графе присутствуют все возможные ребра.
                                </p>
                                <p>
                                В ориентированном графе полустепенью захода вершины называется
                                число ребер, оканчивающихся в этой вершине, а полустепенью исхода –
                                число ребер, начинающихся в вершине. На рис. 7.10 показаны полустепени захода и исхода для каждой вершины графа. Например, для вершины 2
                                полустепень захода равна 2, а полустепень исхода – 1.
                                </p>

                                <img alt='' src={hlst} className="picture" ></img>

                                <p>
                                Граф называется двудольным, если его вершины можно раскрасить в два
                                    цвета, так что цвета любых двух соседних вершин различны. Можно доказать, что граф является двудольным тогда и только тогда, когда в нем нет
                                    цикла с нечетным числом вершин. На рис. 7.11 изображены двудольный
                                    граф и его раскраска
                                </p>

                                <h2 id='2'>Представление графа</h2>

                                <p>
                                Есть несколько способов представить граф в алгоритмах. Выбор структуры данных зависит от размера графа и способа его обработки в алгоритме.
Ниже рассмотрены три популярных представления.
                                </p>

                                <h3>Списки смежности</h3>
                                <p>
                                В этом случае каждой вершине x сопоставляется
список смежности, включающий вершины, соединенные с x ребром. Списки смежности – самый популярный способ представления графов, они позволяют эффективно реализовать большинство алгоритмов.
Списки смежности удобно хранить в массиве векторов, который объявлен следующим образом:

                                </p>

                                <SyntaxHightlighterCPP code={code1}/>

                                <p>
                                Неориентированные графы можно хранить аналогично, только каждое
ребро нужно учитывать в двух списках смежности (для обоих направлений).
Для взвешенных графов структуру следует дополнить:
                                </p>
                                
                                <SyntaxHightlighterCPP code={code2}/>

                                <p>
                                Списки смежности позволяют эффективно находить вершины, в которые можно перейти из данной по одному ребру. Следующий цикл обходит
все вершины, в которые можно попасть из вершины s:
                                </p>

                                <SyntaxHightlighterCPP code={code3}/>

                                <h3>Матрица смежности</h3>
                                
                                <p>
                                    Матрица смежности показывает, какие ребра есть в графе. С ее помощью можно эффективно проверить, существует ли ребро между двумя
вершинами. Матрицу можно хранить в виде массива
                                </p>

                                <SyntaxHightlighterCPP code={code4}/>

                                <p>где элемент adj[a][b] равен 1, если существует ребро, ведущее из вершины a в вершину b, а в противном случае равен 0. Если граф взвешенный, то представление в виде матрицы смежности
можно обобщить: если две вершины соединены ребром, то в матрице хранится вес этого ребра.</p>
                                
Недостаток матрицы смежности заключается в том, что она содержит n^2
элементов, большая часть которых обычно равна 0. Поэтому такое представление не годится для больших графов

                                <h3>Список рёбер</h3>
                                
                                <p>
                                р содержит все ребра графа в некотором порядке. Это представление удобно, если алгоритм обрабатывает все ребра и не требуется
находить ребра, начинающиеся в заданной вершине.
Список ребер можно хранить в векторе

                                </p>
                                <SyntaxHightlighterCPP code={code5}/>
                                <p>Для взвешенных графов структуру можно обобщить:</p>
                                <SyntaxHightlighterCPP code={code6}/>
                                <p>Каждый элемент этого списка имеет вид (a,b,w), это означает, что существует ребро с весом w, ведущее из вершины a в вершину b.</p>

                                <p className='source'>Источники: "Олимпиадное программирование", Антти Лааксонен | Записи студентов ГУ Н. И. Лобачевского</p>
                            </div>
                        </div>

                        <div className="sidebar">
                            <ul>
                                <a href='#1'><li>Определение графа</li></a>
                                <a href='#2'><li>Представление графа</li></a>

                            </ul>
                        </div>
                    </div>
















                    <div className="flex__cont__for__articles">
                        <div className="article" id="a0">
                            <div className="text">
                                <h1>Поиск в ширину</h1>

                            
                                <p>
                                    При поиске в ширину (breadth-first search - BFS) вершины графа посещаются в 
                                    порядке возрастания расстояния от начальной вершины. Следовательно, 
                                    используя поиск в ширину, мы сможем вычислить расстояния от
                                    начальной вершины до всех остальных.
                                </p>

                                <p>
                                    В процессе поиска в ширину мы обходим вершины уровень за уровнем.
                                    Сначала посещаются вершины, отстоящие от начальной на расстояние 1,
                                    затем - на расстояние 2 и т. д. Процесс продолжается, пока не останется
                                    непосещенных вершин.
                                </p>

                                <SyntaxHightlighterCPP code={code1} />

                                <p>В процессе поиска в ширину мы обходим вершины уровень за уровнем.
                                    Сначала посещаются вершины, отстоящие от начальной на расстояние 1,
                                    затем - на расстояние 2 и т. д. Процесс продолжается, пока не останется
                                    непосещенных вершин.
                                </p>

                                <Question question={'Сколько?'} answers={['два', 'один', ['десять', '23']]} />


                                <h2 id='realisations'>Реализации</h2>
                                <p>
                                    Реализации Реализации Реализации Реализации Реализации 
                                    Реализации Реализации Реализации Реализации Реализации 
                                    Реализации Реализации Реализации Реализации Реализации 
                                </p>

                            </div>
                        </div>
                        <div className="sidebar">
                            <ul>
                                <li>Введение</li>
                                <li style={{ lineHeight: 0.9 }}>Основные понятия</li>
                                <li>Примеры</li>
                                <a href='#realisations'><li>Реализации</li></a>
                                <li>Задачи</li>
                            </ul>
                        </div>
                    </div>












                    <div className="flex__cont__for__articles">
                        <div className="article" id="a0">
                            <div className="text">
                                <h2 id='3'>Определение</h2>
                                <p>Поиск в глубину (англ. Depth-first search, DFS) — один из методов обхода графа. Стратегия поиска в глубину, как и следует из названия, состоит в том, чтобы идти «вглубь» графа, насколько это возможно. Алгоритм поиска описывается рекурсивно: перебираем все исходящие из рассматриваемой вершины рёбра. Если ребро ведёт в вершину, которая не была рассмотрена ранее, то запускаем алгоритм от этой нерассмотренной вершины, а после возвращаемся и продолжаем перебирать рёбра. Возврат происходит в том случае, если в рассматриваемой вершине не осталось рёбер, которые ведут в нерассмотренную вершину. Если после завершения алгоритма не все вершины были рассмотрены, то необходимо запустить алгоритм от одной из нерассмотренных вершин.</p>
                                
                                <p>
                                Поиск в глубину всегда следует по одному пути, пока на нем еще имеются вершины. После этого он возвращается назад и начинает исследовать
другие части графа. Алгоритм запоминает посещенные вершины, так что
каждая обрабатывается только один раз.
                                </p>

                                <img alt='' src={depth_search} className="picture"></img>

                                <h2 id='4'>Реализации</h2>

                                <p>. Поиск в глубину удобно реализовать рекурсивно. Показанная ниже функция dfs начинает поиск с заданной вершины. Предполагается, что граф представлен списками смежности, хранящимися в массиве</p>

                                <SyntaxHightlighterCPP code={code7}/>
                                <p>Кроме того, используется массив</p>
                                <SyntaxHightlighterCPP code={code8}/> 
                                <p>в котором запоминаются посещенные вершины. В начальный момент все
элементы этого массива равны false, но когда алгоритм заходит в вершину s, в элемент visited[s] записывается true. Функцию можно реализовать на C++
следующим образом:</p>
                                <SyntaxHightlighterCPP code={code9}/> 
                                <p>Временная сложность поиска в глубину равна O(n + m), где n – число
вершин, а m – число ребер, поскольку алгоритм обрабатывает каждую вершину и каждое ребро ровно один раз.</p>
                                <p>Реализация на Python:</p>
                                <SyntaxHightlighterCPP code={code10}/> 

                                <p className='source'>Источники: "Олимпиадное программирование", Антти Лааксонен | Wikipedia</p>
                            </div>
                        </div>

                        <div className="sidebar">
                            <ul>
                                <a href='#3'><li>Определение</li></a>
                                <a href='#4'><li>Реализации</li></a>

                            </ul>
                        </div>
                    </div>

                    <div className="flex__cont__for__articles">
                        <div className="article" id="a0">
                            <div className="text">
                                <h1>Обход в ширину 3</h1>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam voluptatibus incidunt ullam dolores fugiat ab, totam similique doloribus ut quidem obcaecati enim qui libero officia repudiandae veritatis quam optio fuga. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, fugiat. Saepe ipsam doloribus cumque assumenda nihil. At accusantium minus quam, beatae delectus omnis repellendus nulla suscipit tempora, voluptatibus in consequatur? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat esse delectus veniam suscipit quia quo unde voluptates ad. Qui fugit officiis explicabo id voluptas obcaecati sapiente ullam dolor quod deleniti!</p>
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt quibusdam laboriosam deserunt unde commodi cum maiores odio alias quod modi! Obcaecati ad dolorum eius debitis. Aperiam commodi ullam minus praesentium? Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, corporis nemo. Quod, eos, atque nesciunt placeat delectus architecto repudiandae, provident enim ullam exercitationem tempore hic officiis iste laborum accusantium ex!</p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet soluta commodi, nostrum tempore eaque fuga quo magnam odio, iusto, ut officia ipsum consequuntur accusantium adipisci exercitationem maiores eveniet eum asperiores. Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis porro animi voluptatibus quasi necessitatibus et, amet eum quo a sunt quibusdam? A nam hic soluta at ut voluptatem optio vitae! Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis ullam reiciendis quam ab cum veniam mollitia maxime voluptates dolorum adipisci, magnam repellendus. Hic accusamus, ducimus veritatis explicabo maxime tenetur sapiente.</p>
                            </div>
                        </div>

                        <div className="sidebar">
                            <ul>
                                <li>Введение</li>
                                <li style={{ lineHeight: 0.9 }}>Основные понятия</li>
                                <li>Примеры</li>
                                <li>Реализации</li>
                                <li>Задачи</li>
                            </ul>
                        </div>
                    </div>
                </MyTabs>
            </div>
        </div>
    )
}

export default Graphs