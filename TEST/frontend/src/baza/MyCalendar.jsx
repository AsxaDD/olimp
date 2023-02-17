import Topbar from "./Topbar";
import React, {useEffect, useState} from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import '../css/calendar.css'
import '../css/style.css'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import axios from "axios";


const LeftBarElement = (props) => {
    return(
        <div onClick={() => {props.func(

            [<SwiperSlide>
                <h1 style={{textDecoration: `underline ${props.color}`}}>{props.event}</h1>
                <p>{props.content}</p>
                <a href={props.link} style={{textDecoration: `underline ${props.color}`}}>Ссылка</a>
                <div style={{marginBottom: 35}}></div>
            </SwiperSlide>]

        )}} style={{display: 'flex', alignItems: 'center'}}>

            <div className={'calendar__left__menu__el'}>
                <div className={'color__circle'} style={{backgroundColor: props.color}}></div>
                <div>{props.event}</div>
            </div>

        </div>
    )
}


const MyCalendar = () => {
    const [value, onChange] = useState(new Date())
    const [data, setData] = useState({})
    const [arr, setArr] = useState([<SwiperSlide><h1>Нет мероприятий</h1></SwiperSlide>])
    const [arr2, setArr2] = useState([<LeftBarElement />])

    const checkIndex = (arr, index) => {
        let answer = ''
        try{
            answer = arr[index]
        } catch (e) {
            answer = ''
        }
        return answer
    }

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_ROOT_ADDR}api/get_event`)
            .then(res => {

                console.log(res.data)
                setData(res.data)
            })
    }, [])


    useEffect(() => {
        let events = new Set()
        let colors = new Set()
        let contents = new Set()
        let links = new Set()
        for (let year in data){
            for (let month in data[year]){
                for (let day in data[year][month]){
                    for (let event in data[year][month][day]){
                        events.add(data[year][month][day][event]['event'])
                        colors.add(data[year][month][day][event]['color'])
                        contents.add(data[year][month][day][event]['description'])
                        links.add(data[year][month][day][event]['link'])
                    }
                }
            }
        }

        let events2 = Array.from(events)
        let colors2 = Array.from(colors)
        let contents2 = Array.from(contents)
        let links2 = Array.from(links)
        let tmp_arr = []

        for (let i in events2){
            tmp_arr.push(<LeftBarElement
                key={events2[i]}
                event={events2[i]}
                color={checkIndex(colors2, i)}
                content={checkIndex(contents2, i)}
                link={checkIndex(links2, i)}
                func={setArr}
            />)
        }


        let td = new Date()
        td = td + ''
        let month = td[4] + td[5] + td[6]
        let day  = parseInt(td[8] + td[9])
        let year = parseInt(td[11] + td[12] + td[13] + td[14])


        setArr(returnSwiperSlides(day, month, year))

        setArr2(tmp_arr)
    }, [data])

    const returnSwiperSlides = (day, month, year) => {
        let list = []
        if (checkIfDateInAData(day, month, year)){
            for (let event in data[year][month][day]){
                list.push(
                    <SwiperSlide className={'my__swiper__slide'} key={data[year][month][day][event]["event"]}>
                        <h1 style={{textDecoration: `underline ${data[year][month][day][event]["color"]}`}}>{data[year][month][day][event]["event"]}</h1>
                        <p>{data[year][month][day][event]["description"]}</p>
                        <a
                            href={data[year][month][day][event]["link"]}
                            style={{textDecoration: `underline ${data[year][month][day][event]["color"]}`}}>
                            Ссылка</a>
                    </SwiperSlide>
                )
            }
        } else list.push(<SwiperSlide><h1>Нет мероприятий</h1></SwiperSlide>)
        return list
    }


    const returnDate = (activeStartDate, flag) => {
        let a
        if (flag === 1) a = activeStartDate.date + ""
        else a = activeStartDate + ""
        let month = a[4] + a[5] + a[6]
        let day = parseInt(a[8] + a[9])
        let year = parseInt(a[11] + a[12] + a[13] + a[14])
        day = day + ''
        return [day, month, year]
    }


    const checkIfDateInAData = (day, month, year) => {
        if (data[year]){
            if (data[year][month]){
                if (data[year][month][day]){
                    return true
                }
            }
        }
        return false
    }

    const myTileContent = (activeStartDate) => {
        let [day, month, year] = returnDate(activeStartDate, 1)
        let list = []

        if (checkIfDateInAData(day, month, year)){
            for (let event in data[year][month][day]){
                list.push(
                    <div
                        className="color__circle"
                        style={{backgroundColor: `${data[year][month][day][event]["color"]}`}}
                        key={data[year][month][day][event]["event"]}
                    />
                )
            }
        } else return(<div className="color__circle" style={ {opacity: 0} }></div>)

        return(
            <div style={{ display: "flex", gap: 3, flexWrap: "wrap", justifyContent: "center"}}>{list}</div>
        )
    }


    const onClickDay = (activeStartDate) => {
        let [day, month, year] = returnDate(activeStartDate, 0)
        setArr(returnSwiperSlides(day, month, year))
    }


    return(
        <div>
            <Topbar />
            <div className="main__cont">
                <div className={'calendar__left__menus__wrapper'}>
                    <div className={'text calendar__leftbar'}>
                        {arr2}
                    </div>

                    <div className={'my__swiper'}>
                        <Swiper
                            pagination={{
                                dynamicBullets: false,
                            }}
                            modules={[Pagination]}
                            className="mySwiper"

                            effect={
                                'cube'
                            }
                        >{arr}
                        </Swiper>
                    </div>
                </div>

                <Calendar
                    onChange={onChange}
                    value={value}
                    tileContent={myTileContent}
                    onClickDay={onClickDay}
                    className={'my__calendar'}
                    tileClassName={'my__tile'}
                />
            </div>
        </div>
    )
}

export default MyCalendar