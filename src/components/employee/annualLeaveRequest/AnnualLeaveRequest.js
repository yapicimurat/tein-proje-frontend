import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
//CSS
import "../../../style.css";
//END CSS
import loadingGifURL from "../../../assets/img/loading.gif";

import SectionContent from "../../SectionContent";


import { dateFormatter } from "../../../app/helper";

import axios from "axios";

import CONFIG from "../../../app/"


export default function AnnualLeaveRequest() {

    const {type, userId, username, password} = useSelector(state => state.userReducer);

    const today = new Date(Date.now());

    const startDateFormatted = dateFormatter(today);
    today.setDate(today.getDate() + 1);
    const endDateFormatted = dateFormatter(today);

    const [startDate, setStartDate] = useState(startDateFormatted);
    const [endDate, setEndDate] = useState(endDateFormatted);
    const [requestDay, setRequestDay] = useState(1);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        dateFixer(startDate, endDate);
    });

    const dateFixer = (start, end) => {
        const asDateStartDate = new Date(startDate);
        const asDateEndDate = new Date(endDate);

        //sonuc milisaniye olarak veriliyor!!!
        const diff = (asDateEndDate - asDateStartDate);

        if (diff <= 0) {
            alert("İzin başlangıç tarihi, izin bitiş tarihinden önce olmalıdır.");

            asDateEndDate.setDate(asDateEndDate.getDate() - 1);

            setStartDate(dateFormatter(asDateEndDate));

        } else {
            if (start)
                setStartDate(start);
            if (end)
                setEndDate(end);
        }
    };

    const onChangeInput = (e) => {
        if (e.target.name === "startDate") {
            setStartDate(e.target.value);

        }
        else if (e.target.name === "endDate") {
            setEndDate(e.target.value);

        }
        else if (e.target.name === "requestDay") {
            //2 tarih arasindaki gunu hesapla
            const asDateStartDate = new Date(startDate);
            let day = parseInt(e.target.value);

            if (isNaN(day))
                day = 1;


            //sınırlama -> sistemin hataya düşmemesi için...
            if (day > 1000)
                day = 1000;
            asDateStartDate.setDate(asDateStartDate.getDate() + parseInt(day));

            setEndDate(dateFormatter(asDateStartDate));
            setRequestDay(day);
        }
    }

    const submit = (e) => {
        e.preventDefault();
        //gerekli kontroller...
        setLoading(true);
        axios.post(CONFIG.API_PATHS.EMPLOYEE.POST_REQUEST(type, username, password),
        {
            employeeId: userId,
            state: 0,
            startDate: startDate,
            endDate: endDate,
            day: requestDay,
            requestDate: new Date(Date.now())
        })
        .then(response => {
            setLoading(false);
            const {data, message} = response.data;
            alert(message);
        })
        .catch(error => {
            setLoading(false);
            alert("İzin talebi oluşturulurken bir hata meydana geldi. Lütfen sonra tekrar bekleyiniz.");
        });

    }

    const clear = () => {
        const today = new Date(Date.now());
        setStartDate(dateFormatter(today));
        today.setDate(today.getDate() + 1);
        setEndDate(dateFormatter(today));
        setRequestDay(1);
    }

    return (
        <SectionContent content={
            <>
                <h2>İzin Talep Formu</h2>
                <form onSubmit={submit}>
                    <label className="form-label">İzin başlangıç tarihi</label>
                    <input id="startDate" name="startDate" type="date" onChange={onChangeInput} value={startDate} className="form-input" />

                    <label className="form-label">İzin bitiş tarihi</label>
                    <input id="endDate" name="endDate" type="date" className="form-input" onChange={onChangeInput} value={endDate} />

                    <label className="form-label">Kullanılacak izin gün sayısı</label>
                    <input id="requestDay" name="requestDay" type="number" className="form-input" min="1" max="1000" value={requestDay} onChange={onChangeInput} />
                    <div className="button-group">
                        <button type="button" id="clearButton" name="clearButton" className="form-button default-btn" onClick={clear}>Temizle</button>
                        <button type="submit" className="form-button default-btn">{(loading) ? <img className="loading" src={loadingGifURL} /> : null} Gönder</button>
                    </div>
                </form>
            </>
        } />
    );
}