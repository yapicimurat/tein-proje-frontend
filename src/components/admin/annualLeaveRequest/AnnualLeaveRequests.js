
import SectionContent from "../../SectionContent"
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import CONFIG, { ANNUAL_LEAVE_REQUEST_STATE_STYLES, ANNUAL_LEAVE_REQUEST_STATE_TR } from "../../../app/";
import "../../../style.css";
import loadingGifURL from "../../../assets/img/loading.gif";
import { dateLocaleFormatter } from "../../../app/helper";
export default function AnnualLeaveRequests() {

    const [annualLeaveRequests, setAnnualLeaveRequests] = useState([]);
    const [isError, setIsError] = useState(false);
    const [loading, setLoading] = useState(true);
    const userId = useSelector(state => state.userReducer.userId);
    const [filter, setFilter] = useState("ALL");


    const [showDetail, setShowDetail] = useState(false);
    const [selectedRequestId, setSelectedRequestId] = useState(-1);

    useEffect(() => {
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


    }, []);

    const changeHandler = (e) => {
        setFilter(e.target.value);
    }


    const detail = (id) => {
        setSelectedRequestId(id);
        setShowDetail(true);
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
                            <li>TARİH</li>
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
                                                detail(request.id)
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
        const selectedRequest = annualLeaveRequests.filter(request => (request.id === selectedRequestId))[0];
        return (
            <SectionContent content={
                <>
                    <a onClick={() => {
                        setShowDetail(false)
                    }} href="#">{"<-- Geri Dön"}</a>
                    <h2 style={{ marginTop: "20px" }}>İZİN TALEP DETAYI</h2>
                    <form>
                        <label className="form-label">İşlem tarihi: {dateLocaleFormatter(selectedRequest.requestDate)}</label>
                        <label className="form-label">Başlangıç tarihi: {dateLocaleFormatter(selectedRequest.startDate)}</label>
                        <label className="form-label">Bitiş tarihi: {dateLocaleFormatter(selectedRequest.endDate)}</label>
                        <label className="form-label">Gün sayısı: {selectedRequest.day}</label>

                        <label className={`form-label state ${ANNUAL_LEAVE_REQUEST_STATE_STYLES[selectedRequest.state]}`}>{ANNUAL_LEAVE_REQUEST_STATE_TR[selectedRequest.state]}</label>
                        <div className="button-group">
                            <button type="submit" className="form-button">KAYDET</button>
                        </div>
                    </form>
                </>
            } />
        );
    }


}