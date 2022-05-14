
import SectionContent from "../../SectionContent"
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import CONFIG, { ANNUAL_LEAVE_REQUEST_STATES, ANNUAL_LEAVE_REQUEST_STATE_STYLES, ANNUAL_LEAVE_REQUEST_STATE_TR } from "../../../app/";
import "../../../style.css";
import loadingGifURL from "../../../assets/img/loading.gif";
import { dateLocaleFormatter } from "../../../app/helper";
export default function AnnualLeaveRequests() {

    const [annualLeaveRequests, setAnnualLeaveRequests] = useState([]);
    const [isError, setIsError] = useState(false);
    const [loading, setLoading] = useState(true);
    const {userId, type, username, password} = useSelector(state => state.userReducer);
    const [filter, setFilter] = useState("ALL");
    const [detailEmployee, setDetailEmployee] = useState(null);

    const [showDetail, setShowDetail] = useState(false);
    const [selectedRequestId, setSelectedRequestId] = useState(-1);
    const [newState, setNewState] = useState("WAITING");

    useEffect(() => {
        fetchRequests();
    }, []);

    const fetchRequests = () => {
        axios.get(CONFIG.API_PATHS.ADMIN.GET_ANNUAL_REQUESTS())
        .then(response => {
            const { error, message, data } = response.data;
            if (error) setIsError(true);
            else {
                setLoading(false);
                setAnnualLeaveRequests(data);
            }

        })
        .catch(error => {
            setLoading(false);
            if (error) setIsError(true);
        });
    }

    const changeHandler = (e) => {
        setFilter(e.target.value);
    }

    //asagidaki fonksiyon detay sayfasindaki durum <select> icin...
    const changeStateForUpdate = (e) => {
        setNewState(e.target.value);
    }


    const detail = (id,employeeId) => {
        
        axios.get(CONFIG.API_PATHS.EMPLOYEE.GET_EMPLOYEE_BY_ID(employeeId))
        .then(res => {
            const {data} = res;
            setSelectedRequestId(id);
            setShowDetail(true);

            setDetailEmployee(data.data);
        })
        .catch(err => {
            alert("Bir hata meydana geldi.");
        });
    }

   


    const save = (e) => {
        e.preventDefault();
        
        setLoading(true);
        const selectedRequest = annualLeaveRequests.filter(request => (request.id === selectedRequestId))[0];
        axios.put(CONFIG.API_PATHS.ADMIN.PUT_ANNUAL_REQUEST(type, username, password),
        {
            id: selectedRequest.id,
            employeeId: selectedRequest.employeeId,
            state: newState,
            startDate: selectedRequest.startDate,
            endDate: selectedRequest.endDate,
            requestDate: selectedRequest.requestDate,
            day: selectedRequest.day
        })
        .then(response => {
            const {data} = response;
            setLoading(false);
            fetchRequests();
            alert(data.message);

        })
        .catch(error => {
            setLoading(false);
            console.log(error);
        });


    }


    if (!showDetail) {
        return <SectionContent content={
            <>
                <h2>İzin Taleplerim</h2>
                <label>Durum: </label>
                <select onChange={changeHandler}>
                    <option value="ALL">HEPSİNİ LİSTELE</option>
                    <option value="WAITING">ONAY BEKLİYOR</option>
                    <option value="ACCEPTED">ONAYLANDI</option>
                    <option value="DENIED">REDDEDİLDİ</option>
                </select>
                <div className="table">
                    <div className="table-head">
                        <ul>
                            <li>İŞLEM TARİHİ</li>
                            <li>BAŞ. TARİHİ</li>
                            <li>BİT. TARİHİ</li>
                            <li>GÜN SAYISI</li>
                            <li>DURUM</li>
                            <li>İŞLEM</li>
                        </ul>
                    </div>

                    <div className="table-body">
                        {(loading) ? <img style={{ width: "72px", height: "72px", margin: "0 auto" }} className="loading" src={loadingGifURL} /> : null}
                        {
                            (annualLeaveRequests.length > 0) ? annualLeaveRequests.map((request, index) => {
                                return (request.state === filter || filter === "ALL") ? (
                                    <div key={index} className="table-row">
                                        <ul>
                                            <li>{dateLocaleFormatter(request.requestDate)}</li>
                                            <li>{dateLocaleFormatter(request.startDate)}</li>
                                            <li>{dateLocaleFormatter(request.endDate)}</li>
                                            <li>{request.day}</li>
                                            <li className={`state ${ANNUAL_LEAVE_REQUEST_STATE_STYLES[request.state]}`}>{ANNUAL_LEAVE_REQUEST_STATE_TR[request.state]}</li>
                                            <li><a onClick={() => {
                                                detail(request.id, request.employeeId)
                                            }} href="#">DETAYA GİT</a></li>
                                        </ul>
                                    </div>
                                ) : null;
                            }) : (
                                <p style={{ display: "block", margin: "10px auto 0px auto" }}>Herhangi bir izin talebi bulunmamaktadır.</p>
                            )

                        }

                    </div>
                </div>
            </>

        } />
    } else {
        //DETAY KISMI

        const selectedRequest = annualLeaveRequests.filter(request => (request.id === selectedRequestId))[0];
        return (
            <SectionContent content={
                <>
                    <a onClick={() => {
                        setShowDetail(false)
                    }} href="#">{"<-- Geri Dön"}</a>
                    <h2 style={{ marginTop: "20px" }}>İZİN TALEP DETAYI</h2>
                    <span>Personel: </span><h4 className="employee-name">{detailEmployee.name} {detailEmployee.surname}</h4>
                    <form onSubmit={save}>
                        <label className="form-label">İşlem tarihi: {dateLocaleFormatter(selectedRequest.requestDate)}</label>
                        <label className="form-label">Başlangıç tarihi: {dateLocaleFormatter(selectedRequest.startDate)}</label>
                        <label className="form-label">Bitiş tarihi: {dateLocaleFormatter(selectedRequest.endDate)}</label>
                        <label className="form-label">Gün sayısı: {selectedRequest.day}</label>

                        <label className="form-label">Durum:</label>
                        <select className="form-input" onChange={changeStateForUpdate}>
                            <option value={selectedRequest.state}>{ANNUAL_LEAVE_REQUEST_STATE_TR[selectedRequest.state]}</option>

                            {
                                ANNUAL_LEAVE_REQUEST_STATES.map((state, index) => {
                                    return (state !== selectedRequest.state) ? (
                                        <option key={index} value={state}>{ANNUAL_LEAVE_REQUEST_STATE_TR[state]}</option>
                                    ) : null
                                   
                                })
                            }

                           
                            
                        </select>

                        <div className="button-group">
                            <button type="submit" className="form-button">{(loading) ? <img className="loading" src={loadingGifURL} /> : null} KAYDET</button>
                        </div>
                    </form>
                </>
            } />
        );
    }


}