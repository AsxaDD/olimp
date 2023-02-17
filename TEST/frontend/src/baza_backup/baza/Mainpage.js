import '../css/mainpage.css'
import '../css/style.css'
import Switch from "react-switch";
import {useEffect, useState} from "react";
import MediaQuery from 'react-responsive'

const check = (flag) => {
    return flag === true
}

const Graphs = (props) => {
    const [is_transparent, setTr] = useState(0)
    const [f, setF] = useState(props.flag)

    useEffect(() => {
        setF(props.flag)
    }, [f, props.flag])

    return(
        <a href="graphs/" className={check(f) ? 'el all__h__cell__shadows g__el_h g__el' : 'el g__el'}
           onMouseEnter={() => {setTr(1)}}
           onMouseLeave={() => {setTr(0)}}>
            <div className={check(f) ? '' : 'invisible__block'}>
                <div className="line line1"></div>
                <div className="line line2"></div>

                <div className="line l1"></div>
                <div className="line l2"></div>


                <div className="line linetwo l4"></div>
                <div className="line linetwo l5"></div>

                <div className="line linethree lt1"></div>
                <div className="line linethree lt2"></div>
            </div>
            <div className={check(f) ? 'all__h__headers g__header_h' : 'header g__header'}>
                Графы
            </div>

            <p style={check(f)
                ? {transition: 'opacity 0.7s', opacity: 1}
                : is_transparent === 1 ? {transition: 'opacity 0.7s', opacity: 1} : {transition: 'opacity 0s', opacity: 0}}
               className="g__text">В олимпиадном программировании графы применяются повсеместно. От самых
                простых задач на обход в ширину до сложных комбинаций из раличных алгоритмов. ширину до сложных комбинаций из раличных алгоритмов</p>
        </a>
    )
}
const Trees = (props) => {
    const [is_transparent, setTr] = useState(0)
    const [f, setF] = useState(props.flag)

    useEffect(() => {
        setF(props.flag)
    }, [f, props.flag])

    return(
        <div className={check(f) ? 'el all__h__cell__shadows d__el_h d__el' : 'el d__el'}
             onMouseEnter={() => {setTr(1)}}
             onMouseLeave={() => {setTr(0)}}>
            <div className={check(f) ? 'all__h__headers d__header_h' : 'header d__header'}>
                Деревья
            </div>

            <p style={check(f)
                ? {transition: 'opacity 0.7s', opacity: 1}
                : is_transparent === 1 ? {transition: 'opacity 0.7s', opacity: 1} : {transition: 'opacity 0s', opacity: 0}} className="d__text">В олимпиадном программировании графы применяются повсеместно. От самых
                простых задач на обход в ширину до сложных комбинаций из раличных алгоритмов.</p>

            <div className={check(f) ? '' : 'invisible__block'}>
                <div className={check(f) ? 'd__lines d__lines_h' : 'd__lines'} />
            </div>
        </div>
    )
}
const NumberTheory = (props) => {
    const [is_transparent, setTr] = useState(0)
    const [f, setF] = useState(props.flag)

    useEffect(() => {
        setF(props.flag)
    }, [f, props.flag])

    return(
        <div className={check(f) ? 'el all__h__cell__shadows b__el_h b__el' : 'el b__el'}
             onMouseEnter={() => {setTr(1)}}
             onMouseLeave={() => {setTr(0)}}>
            <div className={check(f) ? '' : 'invisible__block'}>
                <div className={check(f) ? "b__ramka b__ramka1_h" : "b__ramka b__ramka1"}></div>
                <div className={check(f) ? "b__ramka b__ramka2_h" : "b__ramka b__ramka2"}></div>
                <div className={check(f) ? "b__ramka b__ramka3_h" : "b__ramka b__ramka3"}></div>
                <div className={check(f) ? "b__ramka b__ramka4_h" : "b__ramka b__ramka4"}></div>
            </div>

            <div className={check(f) ? 'all__h__headers b__header b__header2_h' : 'header b__header b__header2'}>
                чисел
            </div>
            <div className={check(f) ? 'all__h__headers b__header b__header1_h' : 'header b__header b__header1'}>
                Теория
            </div>

            <p style={check(f)
                ? {transition: 'opacity 0.7s', opacity: 1}
                : is_transparent === 1 ? {transition: 'opacity 0.7s', opacity: 1} : {transition: 'opacity 0s', opacity: 0}} className="b__text">В олимпиадном программировании графы применяются повсеместно. От самых
                простых задач на обход в ширину до сложных комбинаций из раличных алгоритмов.</p>


        </div>
    )
}
const DynamicProg = (props) => {
    const [is_transparent, setTr] = useState(0)
    const [f, setF] = useState(props.flag)

    useEffect(() => {
        setF(props.flag)
    }, [f, props.flag])

    return(
        <div className={check(f) ? 'el all__h__cell__shadows dyn__el_h dyn__el' : 'el dyn__el'}
        onMouseEnter={() => {setTr(1)}}
           onMouseLeave={() => {setTr(0)}}
        >
            <div className={check(f) ? 'all__h__headers dyn__header1_h' : 'header dyn__header1'}>
                Д
            </div>
            <div className={check(f) ? 'all__h__headers dyn__header2_h' : 'header dyn__header2'}>
                П
            </div>
            <div className={check(f) ? '' : 'invisible__block'}>
                <div className={check(f) ? 'dyn__line1_h' : 'dyn__line1'}></div>
                <div className={check(f) ? 'dyn__line2_h' : 'dyn__line2'}></div>

                <div className='all__h__headers ina'>инамическое</div>
                <div className='all__h__headers org'>рограммирование</div>
            </div>


            <p style={check(f)
                ? {transition: 'opacity 0.7s', opacity: 1}
                : is_transparent === 1 ? {transition: 'opacity 0.7s', opacity: 1} : {transition: 'opacity 0s', opacity: 0}} className="dyn__text">В олимпиадном программировании графы применяются повсеместно. От самых
                простых задач на обход в ширину до сложных комбинаций из раличных алгоритмов.</p>

        </div>
    )
}
const Strings = (props) => {
    const [is_transparent, setTr] = useState(0)
    const [f, setF] = useState(props.flag)

    useEffect(() => {
        setF(props.flag)
    }, [f, props.flag])

    return(
        <div className={check(f) ? 'el all__h__cell__shadows t__el_h t__el' : 'el t__el'}
        onMouseEnter={() => {setTr(1)}}
        onMouseLeave={() => {setTr(0)}}
        >
            <div className={check(f) ? 't__border_h' : "t__border"}>
                <div className={check(f) ? 'all__h__headers t__header t__header_h' : 'header t__header'}>
                    Строки
                </div>

                <p style={check(f)
                ? {transition: 'opacity 0.7s', opacity: 1}
                : is_transparent === 1 ? {transition: 'opacity 0.7s', opacity: 1} : {transition: 'opacity 0s', opacity: 0}} className="t__text">В олимпиадном программировании графы применяются повсеместно. От самых
                простых задач на обход в ширину до сложных комбинаций из раличных алгоритмов.</p>


            </div>
        </div>
    )
}


const MainPageGrid = () => {
    const [flag, setFlag] = useState(false)

    const handleChange = (checked) => {
        setFlag(checked)
    }

    return (
        <div className="main__cont" style={{'flex-wrap': 'nowrap'}}>

            <MediaQuery minWidth={850}>
                <div className="first">

                    <Graphs flag={flag} />
                    <Trees flag={flag} />
                    <DynamicProg flag={flag} />
                </div>
                <div className="second">
                    <div className="transparent__div">
                        <h3>Активировать все</h3>
                        <Switch
                            onChange={handleChange}
                            checked={flag}
                            uncheckedIcon={false}
                            checkedIcon={false}
                            boxShadow={'0px 1px 6px -1px'}
                            height={23}
                            width={51}
                        />
                    </div>
                    <NumberTheory flag={flag} />
                    <Strings flag={flag} />
                </div>
            </MediaQuery>

            <MediaQuery minWidth={1} maxWidth={849}>
                <div className="first">

                    <div className="transparent__div">
                        <h3>Активировать все</h3>
                        <Switch
                            onChange={handleChange}
                            checked={flag}
                            uncheckedIcon={false}
                            checkedIcon={false}
                            boxShadow={'0px 1px 6px -1px'}
                            height={23}
                            width={51}
                        />
                    </div>

                    <Graphs flag={flag} />
                    <NumberTheory flag={flag} />
                    <Trees flag={flag} />
                    <Strings flag={flag} />
                    <DynamicProg flag={flag} />
                </div>
            </MediaQuery>
        </div>
    )
}

export default MainPageGrid