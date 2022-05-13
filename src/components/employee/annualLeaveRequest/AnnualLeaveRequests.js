
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


    useEffect(() => {

        axios.get(CONFIG.API_PATHS.EMPLOYEE.GET_ANNUAL_REQUEST_BY_EMPLOYEE_ID(userId))
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
                                    </ul>
                                </div>
                            ) : null;
                        }) : (
                            <p style={{display: "block", margin: "10px auto 0px auto",}}>Herhangi bir izin talebiniz bulunmamaktadır.</p>
                        )
                        
                    }

                </div>
            </div>
        </>

    } />
}