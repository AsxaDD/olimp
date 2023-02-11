import '../css/mainpage.css'
import '../css/style.css'
import g1 from '../pics/graph_icon.png'
import g2 from '../pics/connection.png'
import g3 from '../pics/flow-chart.png'


const MainPageGrid = () => {
    return (
        <div className="main__cont">

            <div className="first">
                <a href="graphs/" className="el g__el">
                    <div className="invisible__block">
                        <div className="line line1"></div>
                        <div className="line line2"></div>
                        <div className="line line3"></div>
                        <div className="line l1"></div>
                        <div className="line l2"></div>
                        <div className="line l3"></div>
                    </div>
                    <div className="header g__header">
                        Графы
                    </div>

                    <div className="invisible__block">
                        <p className="g__text">В олимпиадном программировании графы применяются повсеместно. От самых
                            простых задач на обход в ширину до сложных комбинаций из раличных алгоритмов.</p>
                    </div>

                    <div className="invisible__block">
                        <div className="g__for__logos">
                            <img alt="" src={g1} />
                            <img alt="" src={g2} />
                            <img alt="" src={g3} />
                        </div>
                    </div>
                </a>

                <div className="el d__el">
                    <div className="header d__header">
                        Деревья
                    </div>
                </div>

                <div className="el dyn__el">
                    <div className="header dyn__header">
                        Динамическое<br /> программирование
                    </div>
                </div>

                <div className="el a__el">
                    <div className="header a__header">
                        a
                    </div>
                </div>

            </div>
            <div className="second">
                <div className="transparent__div"></div>

                <div className="el b__el">
                    <div className="header b__header">
                        Бинарный<br className="b__tmp" /> поиск
                    </div>
                </div>

                <div className="el t__el">
                    <div className="header t_header">
                        Теория чисел
                    </div>
                </div>

                <div className="el c__el">
                    <div className="header c_header">
                        Строки
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainPageGrid