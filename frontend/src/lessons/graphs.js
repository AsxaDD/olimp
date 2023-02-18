import Topbar from "../baza/Topbar";
import '../css/style.css'
import React from 'react';
import MyTabs from "../baza/MyTabs";
import Question from "../baza/question";
import SyntaxHightlighterPython from "../baza/CodeBlocksPython";

const code1 = `print('hello')
for i in range(5):
    print(bebra)
`

const Graphs = () => {
    return (
    <div>
        <Topbar></Topbar>
        <div className="main__cont">
                <h1 style={{ maxWidth: 890}}>Темы:</h1>
                <MyTabs themes={['Основные понятия', 'Поиск в ширину', 'Поиск в глубину', 'Алгоритм Дейкстры',
                    'Алгоритм Беллмана-Форда', 'Алгоритм Флойда-Уоршелла ', 'Топологическая сортировка',
                    'Алгоритм Краскала', 'Алгоритм Прима', 'Расстояние Хэмминга'
                ]}>

                    <div>
                        <h1>В разработке</h1>
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

                                <SyntaxHightlighterPython code={code1} />

                                <p>В процессе поиска в ширину мы обходим вершины уровень за уровнем.
                                    Сначала посещаются вершины, отстоящие от начальной на расстояние 1,
                                    затем - на расстояние 2 и т. д. Процесс продолжается, пока не останется
                                    непосещенных вершин.
                                </p>

                                <Question question={'Сколько?'} answers={['два', 'один', ['ноль', 1]]} />


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
                                <h1>Обход в ширину 2</h1>
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