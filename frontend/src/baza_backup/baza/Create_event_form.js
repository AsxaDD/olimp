import Topbar from "./Topbar";
import {useState} from "react";
import '../css/style.css'
import axios from "axios";


const CreateEvent = () => {
    const [date1, setDate1] = useState("")
    const [date2, setDate2] = useState("")

    let data = {}

    const [event, setEvent] = useState("")
    const [description, setDescription] = useState("")
    const [link, setLink] = useState("")
    const [color, setColor] = useState("")

    const handleChange_date1 = (event) => {setDate1(event.target.value); console.log(date1)}
    const handleChange_date2 = (event) => {setDate2(event.target.value)}
    const handleChange_event = (event) => {setEvent(event.target.value)}
    const handleChange_desc = (event) => {setDescription(event.target.value)}
    const handleChange_link = (event) => {setLink(event.target.value)}
    const handleChange_color = (event) => {setColor(event.target.value)}

    const months = {
        1: 'Jan', 2: 'Feb', 3: 'Mar', 4: 'Apr', 5: 'May', 6: 'Jun', 7: 'Jul', 8: 'Aug', 9: 'Sep', 10: 'Oct', 11: 'Nov', 12: 'Dec'
    }
    function makeid(length) {
        let result = '';
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        const charactersLength = characters.length;
        for (let i = 0; i < length; i++ ) {
            result += characters.charAt(Math.floor(Math.random() *
                charactersLength));
        }
        return result;
    }

    const handleSubmit = () => {
        let year_start = parseInt(date1[0] + date1[1] + date1[2] + date1[3])
        let year_end = parseInt(date2[0] + date2[1] + date2[2] + date2[3])

        let day_start = parseInt(date1[8] + date1[9])
        let month_start = parseInt(date1[5] + date1[6])

        let day_end = parseInt(date2[8] + date2[9])
        let month_end = parseInt(date2[5] + date2[6])

        const fillData = (day, month, year) => {
            if (!(year in data)) {
                data[year] = {};
            }
            if (!(months[month] in data[year])) {
                data[year][months[month]] = {};
            }
            if (!(day in data[year][months[month]])){
                data[year][months[month]][day] = {}
            }
            data[year][months[month]][day][makeid(15)] = {
                'event': event,
                'description': description,
                'color': color,
                'link': link,
            }
        }

        const fillDataBetweenTwoMonths = (day_start, day_end, month_start, month_end, year) => {
            if (month_start === month_end){
                for (let i = day_start; i <= day_end; i++) {
                    fillData(i, month_start, year)
                }
            } else {
                while (true) {
                    if (month_start === month_end) {
                        for (let i = day_start; i <= day_end; i++) {
                            fillData(i, month_start, year)
                        }
                        break
                    }
                    console.log("1")


                    for (let i = day_start; i <= 31; i++) {
                        fillData(i, month_start, year)
                    }

                    day_start = 1
                    month_start = (month_start + 1) % 13
                }
            }
        }

        if (year_start === year_end) {
            fillDataBetweenTwoMonths(day_start, day_end, month_start, month_end, year_start)
        } else {
            while (true) {
                if (year_start === year_end) {
                    fillDataBetweenTwoMonths(1, day_end, 1, month_end, year_end)
                    break
                }

                fillDataBetweenTwoMonths(day_start, 31, month_start, 12, year_start)
                month_start = 1
                day_start = 1
                year_start += 1
            }
        }

        console.log(data)

        axios.post(`${process.env.REACT_APP_ROOT_ADDR}api/get_event`, data)
        data = {}
    }

    const deleteAllEvents = () => {
        axios.delete(`${process.env.REACT_APP_ROOT_ADDR}api/get_event`)
    }



    return(
        <div>
            <Topbar />
            <div className="main__cont">

                <form onSubmit={handleSubmit}>

                    <label style={{display: "block"}}>
                        Начало: <br />
                        <input onChange={handleChange_date1} type="date" />
                    </label>
                    <label style={{display: "block"}}>
                        Конец: <br />
                        <input onChange={handleChange_date2} type="date" />
                    </label>



                    <label style={{display: "block"}}>
                        Событие: <br />
                        <input onChange={handleChange_event} />
                    </label>
                    <label style={{display: "block"}}>
                        Описание:<br />
                        <textarea onChange={handleChange_desc} />
                    </label>
                    <label style={{display: "block"}}>
                        Ссылка: <br />
                        <input onChange={handleChange_link} />
                    </label>
                    <label style={{display: "block"}}>
                        Цвет: <br />
                        <input onChange={handleChange_color} type="color" />
                    </label>

                    <input type="submit" value="Отправить" />
                </form>
            </div>
            <button onClick={handleSubmit}>wefwefewf</button>
            <button onClick={deleteAllEvents}>Удалить все записи</button>
        </div>
    )
}

export default CreateEvent
