import Topbar from "../baza/Topbar";
import '../css/style.css'
import React from 'react';
import MyTabs from "../baza/MyTabs";
import Question from "../baza/question";
import SyntaxHightlighterPython from "../baza/CodeBlocksPython";

const code1 = `for (int i = 0; i < 5; i++){
    cout << i;
    print(1)
}`

const Strings = () => {
    return (
        <div>
            <Topbar></Topbar>

            <div style={{ maxWidth: 950, textAlign: 'left', margin: '0 auto'}}>
                <h1 style={{ maxWidth: 950, marginBottom: 0, marginTop: 40}}>Темы:</h1>
            </div>

            <div className="main__cont">
                
                <MyTabs themes={['gay', 'sex']}>

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


                </MyTabs>
            </div>
        </div>
    )
}

export default Strings