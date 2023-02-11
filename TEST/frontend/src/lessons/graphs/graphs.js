import Topbar from "../baza/topbar";
import '../css/style.css'

const Graphs = () => {
    return (
    <div>
        <Topbar></Topbar>
        <div className="main__cont">
            <div className="themes__wrapper">
                <h1>Темы:</h1>
                <div className="themes">
                    <a href="#" id="f0"><div className="theme">Обход в ширину</div></a>
                    <a href="#" id="f1"><div className="theme">Обход в глубину</div></a>
                    <a href="#" id="f2"><div className="theme">Поиск циклов</div></a>
                    <a href="#" id="f3"><div className="theme">Алгоритм Дейкстры</div></a>
                    <a href="#" id="f4"><div className="theme">Алгоритм Краскала </div></a>
                    <a href="#" id="f5"><div className="theme">Система непересекающихся множеств</div></a>
                    <a href="#" id="f6"><div className="theme">Алгоритм Прима</div></a>
                    <a href="#" id="f7"><div className="theme">Алгоритм Флойда–Уоршелла</div></a>
                    <a href="#" id="f8"><div className="theme">Алгоритм Беллмана–Форда</div></a>
                    <a href="#" id="f9"><div className="theme">Топологическая сортировка</div></a>
                </div>
                <div className="flex__cont__for__articles">
                    <div className="article" id="a0">
                        <div className="text">
                            <h1>Обход в ширину</h1>
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
            </div>
        </div>
    </div>
    )
}

export default Graphs